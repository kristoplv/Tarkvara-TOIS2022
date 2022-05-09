using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TOIStest.Migrations
{
    public partial class InitForTOIS : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vorm_1",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    creatorName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nameEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nameEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nameRussian = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    e_Study = table.Column<bool>(type: "bit", nullable: false),
                    practice = table.Column<bool>(type: "bit", nullable: false),
                    independentStudy = table.Column<bool>(type: "bit", nullable: false),
                    someElse = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EAP = table.Column<int>(type: "int", nullable: false),
                    studyForm = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    studyLanguages = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    targetGroup = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gradingMethod = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gradingCriteriaEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gradingCriteriaEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gradingCriteriaRussian = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    studyGoalEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studyGoalEnglish = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    studyGoalRussian = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contentEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contentEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contentRussian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    reqEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    reqEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    reqRussian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studyMethodsEstonian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studyMethodsEnglish = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studyMethodsRussian = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fieldOfTraining = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fieldOfStudy = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    fieldOfStudyDetailed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    groupOfField = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    citationForField = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    baseForCurriculum = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    studyEnvironment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    competenceOfTeacher = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    comments = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    instituteOfMainSupervisor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    mainSupervisorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isOrganiser = table.Column<bool>(type: "bit", nullable: false),
                    supervisorInstitute = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nameOfsupervisor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isSubscribable = table.Column<bool>(type: "bit", nullable: false),
                    webName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    teacherNameOnWeb = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    isVisible = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vorm_1", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vorm_1");
        }
    }
}
