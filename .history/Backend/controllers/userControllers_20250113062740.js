import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";
import { User } from "../models/userSchema.js";
import { v2 as cloudinary } from "cloudinary";
import { sendToken } from "../utils/jwtToken.js";

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

// export const updateProfile = catchAsyncErrors(async (req, res, next) => {
//   const newUserData = {
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     coverLetter: req.body.coverLetter,
//     niches: {
//       firstNiche: req.body.firstNiche,
//       secondNiche: req.body.secondNiche,
//       thirdNiche: req.body.thirdNiche,
//     },
//   };
//   const { firstNiche, secondNiche, thirdNiche } = newUserData.niches;
//   if (
//     req.user.role === "Job Seeker" &&
//     (!firstNiche || !secondNiche || !thirdNiche)
//   ) {
//     return next(new ErrorHandler("Please provide your all niches.", 400));
//   }
//   if (req.files) {
//     const resume = req.files.resume;
//     if (resume) {
//       const currentResumeId = req.user.resume.public_id;
//       if (currentResumeId) {
//         await cloudinary.uploader.destroy(currentResumeId);
//       }
//       const newResume = await cloudinary.uploader.upload(resume.tempFilePath, {
//         folder: "Job_Seeker_Resume",
//       });
//       newUserData.resume = {
//         public_id: newResume.public_id,
//         url: newResume.secure_url,
//       };
//     }
//   }

//   const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });
//   res.status(200).json({
//     success: true,
//     user,
//     message: "Profile Updated!",
//   });
// });

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
      return next(new ErrorHandler("Please provide all your niches.", 400));
    }
  
    if (req.files && req.files.resume) {
      const resumeFile = req.files.resume;
      try {
        if (req.user.resume && req.user.resume.public_id) {
          await cloudinary.uploader.destroy(req.user.resume.public_id);
        }
  
        const uploadedResume = await cloudinary.uploader.upload(resumeFile.tempFilePath, {
          folder: "Job_Seeker_Resume",
        });
  
        newUserData.resume = {
          public_id: uploadedResume.public_id,
          url: uploadedResume.secure_url,
        };
      } catch (error) {
        return next(new ErrorHandler("Failed to upload resume.", 500));
      }
    }
  
    try {
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
    } catch (error) {
        console.error("Error in updateProfile:", error);
      return next(new ErrorHandler("Failed to update profile.", 500));
    }
  });