import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { sendToken } from "../utils/jwtToken.js";
import bcrypt from 'bcrypt';
import runValidators 
export const register = catchAsyncErrors(async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      password,
      role,
      firstNiche,
      secondNiche,
      thirdNiche,
      coverLetter,
    } = req.body;

    if (!name || !email || !phone || !address || !role) {
      return next(new ErrorHandler("All fields are required.", 400));
    }
    if (role === "Job Seeker" && (!firstNiche || !secondNiche || !thirdNiche)) {
      return next(
        new ErrorHandler("Please provide your preferred job niches.", 400)
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ErrorHandler("Email is already registered.", 400));
    }

    const userData = {
      name,
      email,
      phone,
      address,
      role,
      password,
      niches: {
        firstNiche,
        secondNiche,
        thirdNiche,
      },
      coverLetter,
    };
    if (req.files && req.files.resume) {
      const { resume } = req.files;
      if (resume) {
        try {
          const cloudinaryResponse = await cloudinary.uploader.upload(
            resume.tempFilePath,
            { folder: "Job_Seeker_Resume" }
          );
          if (!cloudinaryResponse || cloudinaryResponse.error) {
            return next(
              new ErrorHandler("Failed to upload resume to cloud.", 500)
            );
          }
          userData.resume = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
          };
        } catch (error) {
          return next(new ErrorHandler("Failed to upload resume.", 500));
        }
      }
    }
    const user = await User.create(userData);
    sendToken(user, 201, res, "User Registered.");
  } catch (error) {
    next(error);
  }
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { role, email, password } = req.body;
  if (!role || !email || !password) {
    return next(new ErrorHandler("Email, Password, Role are required", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }
  if (user.role !== role) {
    return next(new ErrorHandler("Invalid user role.", 400));
  }
  sendToken(user, 200, res, "User logged in successfully!");
});

export const logout = catchAsyncErrors(async (req, res, next) => {
  // have to remove cookie from postman
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
      // same option like jwttoken
    })
    .json({
      success: true,
      message: "Logged out successfully!",
    });
});

export const getUser = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});


console.log(User);
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
    console.log(req.user);
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    coverLetter: req.body.coverLetter,
    niches: {
      firstNiche: req.body.firstNiche,
      secondNiche: req.body.secondNiche,
      thirdNiche: req.body.thirdNiche,
    },
  };
  const { firstNiche, secondNiche, thirdNiche } = newUserData.niches;
  if (
    req.user.role === "Job Seeker" &&
    (!firstNiche || !secondNiche || !thirdNiche)
  ) {
    return next(new ErrorHandler("Please provide your all niches.", 400));
  }
  if (req.files) {
    const resume = req.files.resume;
    if (resume) {
      const currentResumeId = req.user.resume.public_id;
      if (currentResumeId) {
        await cloudinary.uploader.destroy(currentResumeId);
      }
      const newResume = await cloudinary.uploader.upload(resume.tempFilePath, {
        folder: "Job_Seeker_Resume",
      });
      newUserData.resume = {
        public_id: newResume.public_id,
        url: newResume.secure_url,
      };
    }
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
    message: "Profile Updated!",
  });
});




// export const updatePassword = catchAsyncErrors(async(req, res, next)=>{
//     const user = await User.findById(req.user.id).select("+password");

//     const isPasswordMatched = await User.comparePassword(req.body.oldPassword);
//     if(!isPasswordMatched){
//         return next(new ErrorHandler("old password is incorrect.", 400));
//     }
//     if(req.body.newPassword !== req.body.confirmPassword){
//         return next(new ErrorHandler("New password and Confirm password is do not match.", 400));
//     }
//     user.password = req.body.newPassword;
//     await user.save();
//     sendToken(user, 200, res, "Password updated successfully!");
// })

// export const updatePassword = catchAsyncErrors(async (req, res, next) => {
//   // Fetch user with password field
//   const user = await User.findById(req.user.id).select("+password");

//   // Log user for debugging
//   console.log(user);

//   // Compare old password with hashed password in the database
//   const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  
//   if (!isPasswordMatched) {
//     return next(new ErrorHandler("Old password is incorrect.", 400));
//   }

//   // Check if new password matches confirm password
//   if (req.body.newPassword !== req.body.confirmPassword) {
//     return next(new ErrorHandler("New password and confirm password do not match.", 400));
//   }

//   // Update password and save user
//   user.password = req.body.newPassword;
//   await user.save();

//   // Send response
//   sendToken(user, 200, res, "Password updated successfully!");
// });


export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  // Check if all fields are provided
  if (!oldPassword || !newPassword || !confirmPassword) {
    return next(new ErrorHandler("Please provide all password fields.", 400));
  }

  // Check if newPassword and confirmPassword match
  if (newPassword !== confirmPassword) {
    return next(new ErrorHandler("New password and confirm password do not match.", 400));
  }

  // Get user from database
  const user = await User.findById(req.user.id).select("+password");

  console.log("New Password Length:", req.body.newPassword.length);
  console.log("New Password:", req.body.newPassword);
  // Check if old password matches
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return next(new ErrorHandler("Old password is incorrect.", 400));
  }

  // Hash new password and save
  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password updated successfully!",
  });
});