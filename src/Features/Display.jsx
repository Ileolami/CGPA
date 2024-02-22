import React, { useContext, useEffect, useRef } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import AuthContext from "../contexts/authContext";
import { CgpaContext } from "../contexts/CgpaContext";



const Display = () => {
  const { student } = useContext(AuthContext);
  const {
    submittedValues,
    scale,
    setSubmittedValues,
    editingIndex,
    setEditingIndex,
    calculatedCgpa,
    setCalculatedCgpa,
    resultClass,
  } = useContext(CgpaContext);


 useEffect(() => {
  const calculateCgpa = () => {
    if (submittedValues) {
      let totalCredit = 0;
      let totalGradeCreditProduct = 0;
      submittedValues.forEach((course) => {
        if (course.grade && course.credit) {
          const gradePoint = calculateGradePoint(course.grade, course.credit);
          if (gradePoint) {
            totalCredit += parseFloat(course.credit);
            totalGradeCreditProduct += gradePoint * parseFloat(course.credit);
          }
        }
      });
      if (totalCredit > 0) {
        const cgpa = totalGradeCreditProduct / totalCredit;
        setCalculatedCgpa(cgpa);
      }
    }
  };

  calculateCgpa();
}, [submittedValues, scale, setCalculatedCgpa]);

  useEffect(() => {
    if (student) {
      setSubmittedValues(student.courses);
    }
  }, [student, setSubmittedValues]);

  const gradeMapping5 = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };
  const gradeMapping4 = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
    F: 0,
  };

  const calculateGradePoint = (grade) => {
    const gradeMapping = scale === "4.0" ? gradeMapping4 : gradeMapping5;
    return gradeMapping[grade];
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSubmittedValues((prevValues) =>
      prevValues.filter((item, i) => i !== index)
    );
  };

  return (
    <div className="flex item-center justify-center">
      {submittedValues && (
         <>
        <div className="overflow-x-auto block" >
          <h1 className="flex justify-center items-center rounded-lg bg-slate-950 text-green-600 p-5 w-96 mx-32 my-10">
            {student && student.name}'s Courses
          </h1>
          <table
            style={{
              width: "50%",
              borderCollapse: "collapse",
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#ddd" }}>
                <th style={{ padding: "20px", textAlign: "center" }}>Title</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Unit</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Grade</th>
                <th style={{ padding: "20px", textAlign: "center" }}>Point</th>
                <th style={{ padding: "20px", textAlign: "center" }}>GC</th>
              </tr>
            </thead>
            <tbody>
              {submittedValues.map((value, index) => {
                const gradePoint = calculateGradePoint(value.grade, value.credit);
                const gradeCreditProduct = gradePoint * parseFloat(value.credit);

                return (
                  <tr key={index}>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "50px", height: "20px" }}
                          value={value.title}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].title = e.target.value;
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.title
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "20px", height: "20px" }}
                          value={value.credit}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].credit = e.target.value;
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.credit
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          style={{ width: "20px", height: "20px" }}
                          value={value.grade}
                          onChange={(e) => {
                            const newValues = [...submittedValues];
                            newValues[index].grade = e.target.value;
                            newValues[index].gradePoint = calculateGradePoint(
                              e.target.value,
                              value.credit
                            );
                            newValues[index].gradeCreditProduct =
                              newValues[index].gradePoint *
                              parseFloat(newValues[index].credit);
                            setSubmittedValues(newValues);
                          }}
                        />
                      ) : (
                        value.grade
                      )}
                    </td>
                    <td style={{ padding: "5px", textAlign: "center" }}>
                      {gradePoint}
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      {gradeCreditProduct}
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <DeleteButton index={index} onDelete={handleDelete} />
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <EditButton index={index} onEdit={handleEdit} />
                    </td>
                    <td style={{ padding: "2px", textAlign: "center" }}>
                      <SaveButton />
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td
                  colSpan="5"
                  style={{
                    padding: "5px",
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {calculatedCgpa && (
                    <div
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        fontStyle: "italic",
                        fontWeight: "500",
                        color: "red",
                        fontSize: "15px",
                        animation: "dance 1s infinite",
                      }}
                    >
                      {` 🔔 CGPA is: ${calculatedCgpa.toFixed(2)} which is ${resultClass}`}
                    </div>
                  )}

                  <style jsx>{`
                    @keyframes dance {
                      0% {
                        transform: translateX(0);
                      }
                      50% {
                        transform: translateX(30px);
                      }
                      100% {
                        transform: translateX(0);
                      }
                    }
                  `}</style>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      )}
    </div>
  );
};

export default Display;

