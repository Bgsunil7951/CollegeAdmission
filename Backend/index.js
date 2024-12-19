const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const my_db = require("./DBconnect");

const PORT = 3500;
const App = new express();
App.use(bp.json());

App.use(cors({ origin: "*" }));

App.use(express.urlencoded({
  extended: false
})
);

App.post("/user", (req, resp) => {
  const detail = req.body;
  const Register_id = detail.Register_id;
  const password = detail.password;
  const userType = detail.userType

  const query = 'SELECT * FROM users WHERE register_id = ? AND password = ? and user_type = ?';
  my_db.query(query, [Register_id, password, userType], (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})



App.post("/signup", (req, resp) => {
  const detail = req.body;
  const name = detail.user_name;
  const password = detail.user_password;
  const email = detail.user_email;
  const user_type = detail.user_type;

  const query = 'INSERT INTO users (user_name, email , password ,user_type) VALUES (?, ?, ? , ?)';
  my_db.query(query, [name, email, password, user_type], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})



App.post("/FirstStuDetails", (req, resp) => {
  const detail = req.body;
  const studentId = detail.studentId
  const firstName = detail.firstName
  const middleName = detail.middleName
  const lastName = detail.lastName
  const stuPhone = detail.stuPhone
  const fatherName = detail.fatherName
  const fatherPhone = detail.fatherPhone
  const motherName = detail.motherName
  const motherPhone = detail.motherPhone
  const gender = detail.gender
  const dob = detail.dob
  const bloodGroup = detail.bloodGroup
  const aadhar = detail.aadhar
  const cast = detail.cast
  const address = detail.address
  const state = detail.state
  const city = detail.city
  const zip = detail.zip

  const query = 'INSERT INTO  studentDetails(`studentId`, `firstName`, `middleName`, `lastName`, `stuPhone`, `fatherName`, `fatherPhone`, `motherName`, `motherPhone`, `gender`, `dob`, `bloodGroup`, `aadhar`, `cast`, `address`, `state`, `city`, `zip`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
  my_db.query(query, [studentId, firstName, middleName, lastName, stuPhone, fatherName, fatherPhone, motherName, motherPhone, gender, dob, bloodGroup, aadhar, cast, address, state, city, zip], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})

App.post("/FirstEducationDetails", (req, resp) => {
  const detail = req.body;

  const studentId = detail.studentId

  const sslcRegNo = detail.sslcRegNo
  const sslcPercentage = detail.sslcPercentage
  const schoolName = detail.schoolName
  const schoolBoard = detail.schoolBoard
  const schoolState = detail.schoolState
  const schoolPassYear = detail.schoolPassYear

  const pucRegNo = detail.pucRegNo
  const pucPercentage = detail.pucPercentage
  const collegeName = detail.collegeName
  const collegeBoard = detail.collegeBoard
  const collegeState = detail.collegeState
  const pucPassYear = detail.pucPassYear
  const totalMarks = detail.totalMarks
  const PCMBPercentage = detail.PCMBPercentage


  const query = 'INSERT INTO  studentseducationdetails (`studentId`, `sslcRegNo`, `sslcPerecntage`, `schoolName`, `schoolBoard`, `schoolState`, `scchoolPassYear`, `pucRegNo`, `pucPercentage`, `collegeName`, `collegeBoard`, `collegeState`, `pucPassYear`, `totalMarks`, `PCMBPercentage`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';



  my_db.query(query, [studentId, sslcRegNo, sslcPercentage, schoolName, schoolBoard, schoolState, schoolPassYear, pucRegNo, pucPercentage, collegeName, collegeBoard, collegeState, pucPassYear, totalMarks, PCMBPercentage], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })




})

App.post("/dipEducationDetails", (req, resp) => {
  const detail = req.body;

  const studentId = detail.studentId

  const sslcRegNo = detail.sslcRegNo
  const sslcPercentage = detail.sslcPercentage
  const schoolName = detail.schoolName
  const schoolBoard = detail.schoolBoard
  const schoolState = detail.schoolState
  const schoolPassYear = detail.schoolPassYear

  const pucRegNo = detail.pucRegNo
  const pucPercentage = detail.pucPercentage
  const collegeName = detail.collegeName
  const collegeBoard = detail.collegeBoard
  const collegeState = detail.collegeState
  const pucPassYear = detail.pucPassYear
  const totalMarks = detail.totalMarks
  const PCMBPercentage = detail.PCMBPercentage


  const query = 'INSERT INTO  studentseducationdetails (`studentId`, `sslcRegNo`, `sslcPerecntage`, `schoolName`, `schoolBoard`, `schoolState`, `scchoolPassYear`, `pucRegNo`, `pucPercentage`, `collegeName`, `collegeBoard`, `collegeState`, `pucPassYear`, `totalMarks`, `PCMBPercentage`)  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';



  my_db.query(query, [studentId, sslcRegNo, sslcPercentage, schoolName, schoolBoard, schoolState, schoolPassYear, pucRegNo, pucPercentage, collegeName, collegeBoard, collegeState, pucPassYear, totalMarks, PCMBPercentage], (err, result) => {
    // if (err) {
    //   if (err.code === 'ER_DUP_ENTRY') {
    //     console.log(err)
    //     resp.status(409).json({ sqlMessage: err.sqlMessage });
    //   } else {
    //     console.log(err)
    //     resp.status(500).send('Error in database operation');
    //   }
    // } else {
    //   resp.send(result)
    // }
  })

  const dipRegNo = detail.dipRegNo
  const dipPercentage = detail.dipPercentage
  const dipCollegeName = detail.dipCollegeName
  const dipBoard = detail.dipBoard
  const dipcollegeState = detail.dipcollegeState
  const dipPassYear = detail.dipPassYear
  const diptotalMarks = detail.diptotalMarks


  const query1 = 'INSERT INTO  diploma_entry (`studentId`, `dipRegNo`, `dipPercentage`, `dipcollegeName`, `dipcollegeBoard`, `dipcollegeState`, `dipPassYear`, `diptotalMarks`) VALUES (?,?, ?,? ,?,? ,?,?)';

  my_db.query(query1, [studentId, dipRegNo, dipPercentage, dipCollegeName, dipBoard, dipcollegeState, dipPassYear, diptotalMarks], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})



App.post("/FirstBankDetails", (req, resp) => {
  const detail = req.body;

  const studentId = detail.studentId

  const stuName = detail.stuName
  const accountNumber = detail.accountNumber
  const bankName = detail.bankName
  const bankBranch = detail.bankBranch
  const ifscCode = detail.ifscCode
  const bankState = detail.bankState





  const query = ' INSERT INTO studentbankdetails (studentId, Name, accountNumber, bankName, bankBranch, ifscCode, bankState) VALUES (?,?,?,?,?,?,?) ';
  my_db.query(query, [studentId, stuName, accountNumber, bankName, bankBranch, ifscCode, bankState], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})

App.post("/FirstAdmissionDetails", (req, resp) => {
  const detail = req.body;

  const studentId = detail.studentId
  const stuName = detail.stuName
  const admissionType = detail.admissionType
  const registerNumber = detail.registerNumber
  const rank = detail.rank
  const category = detail.category
  const branch = detail.branch
  const admissionYear = detail.admissionYear
  const date = detail.date



  const query = 'INSERT INTO student_admission_details (`Register_id`, `Student_name`, `admission_type`, `register_no`, `admission_year`, `branch`, `rank`, `category`, `date`) VALUES (? ,?,? ,?,?, ?,? ,?, ?)';
  my_db.query(query, [studentId, stuName, admissionType, registerNumber, admissionYear, branch, rank, category, date], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})

App.post("/fees_details", (req, resp) => {
  const detail = req.body;
  const query = 'SELECT * FROM fees_structure WHERE usn = ?  and year = ?';
  my_db.query(query, [detail.usn, detail.year], (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
});



App.post("/payfees", (req, resp) => {
  const detail = req.body;
  const studentId = detail.studentId
  const UTR_No = detail.UTR_No
  const uploadFile = detail.uploadFile
  const stuYear = detail.stuYear
  const branch = detail.branch
  const tutionFees = detail.tutionFees
  const collegeFees = detail.collegeFees
  const vtuFees = detail.vtuFees
  const examFees = detail.examFees
  const hostelFees = detail.hostelFees
  const otherFees = detail.otherFees
  const totalFees = detail.totalFees
  const insta_no = detail.insta_no
  const date = detail.date





  const query = ' INSERT INTO  fees (`usn`, `utrno`, `image`, `year`, `branch`, `tution_fees`, `college_fees`, `vtu_fees`, `exam_fees`, `hostel_fees`, `other_fees`, `total_fees`, `installment_no` , `date`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ';
  my_db.query(query, [studentId, UTR_No, uploadFile, stuYear, branch, tutionFees, collegeFees, vtuFees, examFees, hostelFees, otherFees, totalFees, insta_no, date], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})




App.post("/updateFees", (req, resp) => {
  const detail = req.body;
  const studentId = detail.studentId
  const year = detail.stuYear
  const insta_no = detail.insta_no

  const query = `update fees_structure set installment_${insta_no}_status = ? where usn = ? and year = ? ;`
  my_db.query(query, ["paid", studentId, year], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  });
})



App.post("/verify", (req, resp) => {
  const detail = req.body;

  const studentId = detail.student_id
  const date = detail.date
  const year = detail.year

  const query = 'INSERT INTO verification (`Register_id`, `year`, `date`) VALUES (?,?,?) ';
  my_db.query(query, [studentId, year, date], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})




App.post("/getAdmissionStatus", (req, resp) => {
  const detail = req.body;
  const student_id = detail.student_id;
  const year = detail.year;

  const query = 'SELECT * FROM verification WHERE Register_id = ? AND year = ? ; '
  my_db.query(query, [student_id, year], (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})



App.get("/viewApplications", (req, resp) => {
  // const query = 'SELECT * FROM student_admission_details where Register_id = (select Register_id from verification Where admission_status = ?) '
  const query = 'SELECT * FROM student_admission_details WHERE Register_id in ( SELECT Register_id FROM verification WHERE admission_status = ? )'
  my_db.query(query,"pending", (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})
App.get("/viewRejectedApplications", (req, resp) => {
  const query = 'SELECT * FROM student_admission_details where Register_id in (select Register_id from verification Where admission_status = ?) '
  my_db.query(query, "rejected" ,(err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})
App.get("/viewApprovedApplications", (req, resp) => {
  const query = 'SELECT * FROM student_admission_details where Register_id in (select Register_id from verification Where admission_status = ?) '
  my_db.query(query, "approved" ,(err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})



App.post("/approveApplication", (req, resp) => {
  const { student_id } = req.body;
  const query = 'UPDATE verification SET admission_status = ? WHERE Register_id = ?;';

  my_db.query(query, ["Approved", student_id], (err, result) => {
    if (err) {
      console.log(err);
      return resp.status(500).send('Error in database operation');
    }

    if (result.affectedRows > 0) {
      resp.status(200).send('Application approved');
    } else {
      resp.status(404).send('Application not found');
    }
  });
});



App.post("/rejectApplication", (req, resp) => {
  const { student_id } = req.body;
  const query = 'UPDATE verification SET admission_status = ? WHERE Register_id = ?;';

  my_db.query(query, ["Rejected", student_id], (err, result) => {
    if (err) {
      console.log(err);
      return resp.status(500).send('Error in database operation');
    }

    if (result.affectedRows > 0) {
      resp.status(200).send('Application approved');
    } else {
      resp.status(404).send('Application not found');
    }
  });
});

App.post("/viewFeesdetails", (req, resp) => {
  const detail = req.body;
 const branch = detail.branch
const year  = detail.year
  const query = 'SELECT student_admission_details.register_id, student_admission_details.Student_name, student_admission_details.admission_year, student_admission_details.branch, fees_structure.installment_1, fees_structure.installment_1_status, fees_structure.installment_2, fees_structure.installment_2_status FROM student_admission_details INNER JOIN fees_structure ON student_admission_details.register_id = fees_structure.usn WHERE student_admission_details.branch = ? AND  student_admission_details.admission_year = ?;'
  
   my_db.query(query, [branch , year] ,(err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})

App.post("/viewPendingFeesdetails", (req, resp) => {
  const detail = req.body;
 const branch = detail.branch
const year  = detail.year
  const query = 'SELECT student_admission_details.register_id, student_admission_details.Student_name, student_admission_details.admission_year, student_admission_details.branch, fees_structure.installment_1, fees_structure.installment_1_status, fees_structure.installment_2, fees_structure.installment_2_status FROM student_admission_details INNER JOIN fees_structure ON student_admission_details.register_id = fees_structure.usn WHERE student_admission_details.branch = ? AND  student_admission_details.admission_year = ?  AND fees_structure.installment_2_status = ? ;'
  
   my_db.query(query, [branch , year , "pending"] ,(err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})
App.post("/viewPaidFeesdetails", (req, resp) => {
  const detail = req.body;
 const branch = detail.branch
const year  = detail.year
  const query = 'SELECT student_admission_details.register_id, student_admission_details.Student_name, student_admission_details.admission_year, student_admission_details.branch, fees_structure.installment_1, fees_structure.installment_1_status, fees_structure.installment_2, fees_structure.installment_2_status FROM student_admission_details INNER JOIN fees_structure ON student_admission_details.register_id = fees_structure.usn WHERE student_admission_details.branch = ? AND  student_admission_details.admission_year = ?  AND fees_structure.installment_2_status = ? ;'
  
   my_db.query(query, [branch , year , "paid"] ,(err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
})


App.post("/setFeesDetails", (req, resp) => {
  const detail = req.body;
  const stdId = detail.stdId
  const stdYear = detail.stdYear
  const totalFees = detail.totalFees
  const inst_1 = detail.inst_1
  const inst_2 = detail.inst_2

  const query = ' INSERT INTO fees_structure (`usn`, `year`, `installment_1`, `installment_2`,  `TotalFees`) VALUES (?,?,?,?,?) ';
  my_db.query(query, [stdId, stdYear, inst_1, inst_2, totalFees], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.log(err)
        resp.status(409).json({ sqlMessage: err.sqlMessage });
      } else {
        console.log(err)
        resp.status(500).send('Error in database operation');
      }
    } else {
      resp.send(result)
    }
  })
})


App.post("/viewStuDetails", (req, resp) => {
  const detail = req.body;

  const query = 'SELECT * FROM studentdetails WHERE studentId = ?  ';
  my_db.query(query, [detail.usn], (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
});


App.post("/viewEduDetails", (req, resp) => {
  const detail = req.body;

  const query = 'SELECT * FROM studentseducationdetails WHERE studentId = ?  ';
  my_db.query(query, [detail.usn], (err, result) => {
    if (err) {
      console.log(err);
      resp.status(500).send('Error in database operation');
    } else {
      resp.send(result)
    }
  })
});



App.listen(PORT, function (err) {
  if (err)
    console.log(" Error in server connection " + err);
  else
    console.log("\n server running at port : " + PORT + "...");
});