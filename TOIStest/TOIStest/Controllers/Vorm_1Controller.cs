#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TOIStest.Data;
using TOIStest.Models;

namespace TOIStest.Controllers
{
    public class Vorm_1Controller : Controller
    {
        private readonly TOIStestContext _context;

        public Vorm_1Controller(TOIStestContext context)
        {
            _context = context;
        }

        // GET: Vorm_1
        public async Task<IActionResult> Index(string? search)
        {
            ViewData["search"] = search;
            return View(await _context.Vorm_1.ToListAsync());
        }

        public IActionResult CreateBase()
        {
            return View();
        }
        
        // GET: Vorm_1/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vorm_1 = await _context.Vorm_1
                .FirstOrDefaultAsync(m => m.Id == id);
            if (vorm_1 == null)
            {
                return NotFound();
            }

            return View(vorm_1);
        }

        // GET: Vorm_1/Create
        public IActionResult Create(string whoFills, string id)
        {
            ViewData["filler"] = whoFills;
            ViewData["id"] = id;
            if (id == null)
            {
                return NotFound();
            }
            
            return View();
        }

        // POST: Vorm_1/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,creatorName,nameEstonian,nameEnglish,nameRussian,e_Study,practice,independentStudy,someElse,EAP,studyForm,studyLanguages,targetGroup,gradingMethod,gradingCriteriaEstonian,gradingCriteriaEnglish,gradingCriteriaRussian,studyGoalEstonian,studyGoalEnglish,studyGoalRussian,contentEstonian,contentEnglish,contentRussian,reqEstonian,reqEnglish,reqRussian,studyMethodsEstonian,studyMethodsEnglish,studyMethodsRussian,fieldOfTraining,fieldOfStudy,fieldOfStudyDetailed,groupOfField,citationForField,baseForCurriculum,studyEnvironment,competenceOfTeacher,comments,instituteOfMainSupervisor,mainSupervisorName,isOrganiser,supervisorInstitute,nameOfsupervisor,isSubscribable,webName,teacherNameOnWeb,isVisible")] Vorm_1 vorm_1)
        {
            if (ModelState.IsValid)
            {
                _context.Add(vorm_1);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(vorm_1);
        }

        // GET: Vorm_1/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vorm_1 = await _context.Vorm_1.FindAsync(id);
            if (vorm_1 == null)
            {
                return NotFound();
            }
            return View(vorm_1);
        }

        // POST: Vorm_1/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,creatorName,nameEstonian,nameEnglish,nameRussian,e_Study,practice,independentStudy,someElse,EAP,studyForm,studyLanguages,targetGroup,gradingMethod,gradingCriteriaEstonian,gradingCriteriaEnglish,gradingCriteriaRussian,studyGoalEstonian,studyGoalEnglish,studyGoalRussian,contentEstonian,contentEnglish,contentRussian,reqEstonian,reqEnglish,reqRussian,studyMethodsEstonian,studyMethodsEnglish,studyMethodsRussian,fieldOfTraining,fieldOfStudy,fieldOfStudyDetailed,groupOfField,citationForField,baseForCurriculum,studyEnvironment,competenceOfTeacher,comments,instituteOfMainSupervisor,mainSupervisorName,isOrganiser,supervisorInstitute,nameOfsupervisor,isSubscribable,webName,teacherNameOnWeb,isVisible")] Vorm_1 vorm_1)
        {
            if (id != vorm_1.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(vorm_1);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!Vorm_1Exists(vorm_1.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(vorm_1);
        }

        // GET: Vorm_1/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var vorm_1 = await _context.Vorm_1
                .FirstOrDefaultAsync(m => m.Id == id);
            if (vorm_1 == null)
            {
                return NotFound();
            }

            return View(vorm_1);
        }

        // POST: Vorm_1/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var vorm_1 = await _context.Vorm_1.FindAsync(id);
            _context.Vorm_1.Remove(vorm_1);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool Vorm_1Exists(int id)
        {
            return _context.Vorm_1.Any(e => e.Id == id);
        }
    }
}
