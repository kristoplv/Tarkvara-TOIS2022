namespace TOIStest.Models
{
    public class Vorm_1
    {
        //Main things
        public int Id { get; set; }

        public string creatorName { get; set; }
        public string nameEstonian { get; set; }
        public string nameEnglish { get; set; }
        public string? nameRussian { get; set; }
        // Study course info
        public bool e_Study { get; set; }
        public bool practice { get; set; }
        public bool independentStudy { get; set; }
        public string? someElse { get; set; }
        public int EAP { get; set; }
        public string? studyForm { get; set; }
        public string studyLanguages { get; set; }
        public string targetGroup { get; set; }
        //Grading
        public string gradingMethod { get; set; }
        public string gradingCriteriaEstonian { get; set; }
        public string gradingCriteriaEnglish { get; set; }
        public string? gradingCriteriaRussian { get; set; }
        //Study goals
        public string studyGoalEstonian { get; set; }
        public string? studyGoalEnglish { get; set; }
        public string? studyGoalRussian { get; set; }
        //Study content
        public string contentEstonian { get; set; }
        public string contentEnglish { get; set; }
        public string contentRussian { get; set; }
        //Study requirements
        public string reqEstonian { get; set; }
        public string reqEnglish { get; set; }
        public string reqRussian { get; set; }
        //Study methods
        public string studyMethodsEstonian { get; set; }
        public string studyMethodsEnglish { get; set; }
        public string studyMethodsRussian { get; set; }
        //Field of study
        public string fieldOfTraining { get; set; }
        public string fieldOfStudy { get; set; }
        public string fieldOfStudyDetailed { get; set; }
        public string groupOfField { get; set; }
        public string citationForField { get; set; }
        public string baseForCurriculum { get; set; }
        public string studyEnvironment { get; set; }
        public string competenceOfTeacher { get; set; }
        public string comments { get; set; }
        // Supervisor info
        public string instituteOfMainSupervisor { get; set; }
        public string mainSupervisorName { get; set; }
        public bool isOrganiser { get; set; }
        public string supervisorInstitute { get; set; }
        public string nameOfsupervisor { get; set; }
        // Web and Media
        public bool isSubscribable { get; set; }
        public string webName { get; set; }
        public string teacherNameOnWeb { get; set; }
        public bool isVisible { get; set; }
    }
}
