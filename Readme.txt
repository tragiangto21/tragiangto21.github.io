# Database Normalization Challenge

## Part 1: Normalization

### Unnormalized Table

STUDENT_GRADES_RAW

Columns:
- StudentID
- StudentName
- CourseID
- CourseName
- ProfessorName
- ProfessorEmail
- Grade

Example data:

| StudentID | StudentName | CourseID | CourseName | ProfessorName | ProfessorEmail | Grade |
|-----------|-------------|----------|------------|---------------|----------------|-------|
| 1 | Nguyen An | 101 | Database Systems | Dr. Le | le@uni.edu | A |
| 1 | Nguyen An | 102 | Web Development | Dr. Tran | tran@uni.edu | B+ |
| 2 | Tran Binh | 101 | Database Systems | Dr. Le | le@uni.edu | A- |

### Problems
The table has redundancy because:
- StudentName repeats for the same StudentID
- CourseName repeats for the same CourseID
- Professor information repeats for each course
- This may cause update anomalies

### Normalized Tables (3NF)

**STUDENTS**

StudentID (PK)  
StudentName

**PROFESSORS**

ProfessorEmail (PK)  
ProfessorName

**COURSES**

CourseID (PK)  
CourseName  
ProfessorEmail (FK)

**ENROLLMENTS**

StudentID (FK)  
CourseID (FK)  
Grade

Primary Key: (StudentID, CourseID)

---

## Part 2: Relationships

STUDENTS (1) ---- (N) ENROLLMENTS  

COURSES (1) ---- (N) ENROLLMENTS  

PROFESSORS (1) ---- (N) COURSES

---

## Final Schema

STUDENTS(StudentID PK, StudentName)

PROFESSORS(ProfessorEmail PK, ProfessorName)

COURSES(CourseID PK, CourseName, ProfessorEmail FK)

ENROLLMENTS(StudentID FK, CourseID FK, Grade)