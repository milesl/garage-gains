// ══════════════════════════════════════════
// EXERCISE DATABASE
// ══════════════════════════════════════════
const exercises = [
  // ── CHEST ──
  { name:"Barbell Bench Press (Flat)", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Olympic Barbell","Adjustable Bench","Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Set bench flat between squat pillars. Unrack, lower bar to mid-chest, press up. Keep feet planted and back slightly arched." },
  { name:"Barbell Bench Press (Incline)", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Olympic Barbell","Adjustable Bench","Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Set bench to 30–45° incline. Press from upper chest. Emphasises upper chest and front delts." },
  { name:"Dumbbell Bench Press (Flat)", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Lie flat, press dumbbells from chest level. Greater range of motion than barbell variation." },
  { name:"Dumbbell Bench Press (Incline)", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Incline bench 30–45°. Press dumbbells up from upper chest. Targets upper pecs." },
  { name:"Dumbbell Flyes (Flat)", muscle:"Chest", secondary:"Shoulders", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Lie flat, arms extended above chest. Lower dumbbells in wide arc with slight elbow bend. Squeeze chest to return." },
  { name:"Dumbbell Flyes (Incline)", muscle:"Chest", secondary:"Shoulders", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Incline bench. Perform flye motion targeting upper chest." },
  { name:"Push-Ups (Grips)", muscle:"Chest", secondary:"Shoulders, Triceps, Core", equipment:["Push-Up Grips"], type:"strength", category:"push", body:"upper", desc:"Using grips for deeper range of motion. Keep body rigid, lower until deep stretch, press up." },
  { name:"Wide Push-Ups (Grips)", muscle:"Chest", secondary:"Shoulders", equipment:["Push-Up Grips"], type:"strength", category:"push", body:"upper", desc:"Grips placed wider than shoulders. Emphasises chest stretch and contraction." },
  { name:"Dumbbell Pullover", muscle:"Chest", secondary:"Lats, Triceps", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Lie across bench, hold one dumbbell overhead with both hands. Lower behind head in arc, pull back over chest." },
  { name:"Landmine Press", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Olympic Barbell","Landmine"], type:"strength", category:"push", body:"upper", desc:"Stand or kneel at end of landmine bar. Press up and forward. Great for shoulder-friendly pressing." },
  { name:"Banded Push-Ups", muscle:"Chest", secondary:"Shoulders, Triceps", equipment:["Resistance Bands","Push-Up Grips"], type:"strength", category:"push", body:"upper", desc:"Loop band across back and under hands. Adds progressive resistance to the top of the push-up." },
  { name:"Dips (Chest Focus)", muscle:"Chest", secondary:"Triceps, Shoulders", equipment:["Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Using dip handles, lean torso forward ~30°. Lower until upper arms parallel to floor. Forward lean targets chest." },

  // ── BACK ──
  { name:"Barbell Bent-Over Row", muscle:"Back", secondary:"Biceps, Core", equipment:["Olympic Barbell"], type:"strength", category:"pull", body:"upper", desc:"Hinge at hips, torso ~45°. Row bar to lower chest/upper abdomen. Squeeze shoulder blades." },
  { name:"Landmine Row (Single Arm)", muscle:"Back", secondary:"Biceps, Core", equipment:["Olympic Barbell","Landmine","Row Grip"], type:"strength", category:"pull", body:"upper", desc:"Straddle bar, row with one arm using grip attachment. Great for lat isolation." },
  { name:"Landmine Row (Both Arms)", muscle:"Back", secondary:"Biceps", equipment:["Olympic Barbell","Landmine","Row Grip"], type:"strength", category:"pull", body:"upper", desc:"Use row grip with both arms. Pull to chest, squeeze back at top." },
  { name:"Dumbbell Row (Single Arm)", muscle:"Back", secondary:"Biceps, Core", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"pull", body:"upper", desc:"One knee on bench, row dumbbell to hip. Keep back flat." },
  { name:"Chin-Ups", muscle:"Back", secondary:"Biceps", equipment:["Chin-Up Bar"], type:"strength", category:"pull", body:"upper", desc:"Underhand grip, pull chin above bar. Emphasises biceps alongside back." },
  { name:"Pull-Ups", muscle:"Back", secondary:"Biceps, Shoulders", equipment:["Chin-Up Bar"], type:"strength", category:"pull", body:"upper", desc:"Overhand grip, pull chin above bar. Wide grip targets lats." },
  { name:"Neutral Grip Pull-Ups", muscle:"Back", secondary:"Biceps", equipment:["Chin-Up Bar"], type:"strength", category:"pull", body:"upper", desc:"Palms facing each other (climber grips). Balanced lat and bicep engagement." },
  { name:"Banded Pull-Ups", muscle:"Back", secondary:"Biceps", equipment:["Chin-Up Bar","Resistance Bands"], type:"strength", category:"pull", body:"upper", desc:"Loop band over bar and under feet/knees for assistance. Great for building up to full pull-ups." },
  { name:"Inverted Row (Bar)", muscle:"Back", secondary:"Biceps, Core", equipment:["Olympic Barbell","Squat Pillars"], type:"strength", category:"pull", body:"upper", desc:"Set barbell low on pillars. Hang underneath, pull chest to bar. Adjust difficulty by changing body angle." },
  { name:"Banded Face Pulls", muscle:"Back", secondary:"Rear Delts", equipment:["Resistance Bands"], type:"strength", category:"pull", body:"upper", desc:"Attach band at head height. Pull towards face, rotating hands outward. Great for posture and rear delts." },
  { name:"Barbell Shrugs", muscle:"Back", secondary:"Traps", equipment:["Olympic Barbell"], type:"strength", category:"pull", body:"upper", desc:"Hold barbell at arms length. Shrug shoulders up towards ears, pause at top." },
  { name:"Dumbbell Shrugs", muscle:"Back", secondary:"Traps", equipment:["Dumbbells"], type:"strength", category:"pull", body:"upper", desc:"Hold dumbbells at sides, shrug up. Can rotate slightly for fuller trap engagement." },
  { name:"Barbell Deadlift", muscle:"Back", secondary:"Glutes, Hamstrings, Core", equipment:["Olympic Barbell"], type:"strength", category:"pull", body:"full", desc:"Conventional or sumo stance. Drive through floor, hips and shoulders rise together. Lock out at top." },

  // ── SHOULDERS ──
  { name:"Barbell Overhead Press", muscle:"Shoulders", secondary:"Triceps, Core", equipment:["Olympic Barbell","Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Unrack at shoulder height. Press overhead to full lockout. Core tight, slight lean back." },
  { name:"Dumbbell Shoulder Press (Seated)", muscle:"Shoulders", secondary:"Triceps", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Bench at ~85° incline. Press dumbbells overhead. Seated position isolates shoulders." },
  { name:"Dumbbell Lateral Raise", muscle:"Shoulders", secondary:"Traps", equipment:["Dumbbells"], type:"strength", category:"push", body:"upper", desc:"Arms at sides, raise dumbbells out to shoulder height. Control the eccentric." },
  { name:"Dumbbell Front Raise", muscle:"Shoulders", secondary:"Chest", equipment:["Dumbbells"], type:"strength", category:"push", body:"upper", desc:"Raise dumbbells in front to shoulder height. Alternate or both together." },
  { name:"Landmine Lateral Raise", muscle:"Shoulders", secondary:"Core", equipment:["Olympic Barbell","Landmine"], type:"strength", category:"push", body:"upper", desc:"Stand side-on to landmine. Raise bar end up and across body in arc." },
  { name:"Banded Lateral Raise", muscle:"Shoulders", secondary:"Traps", equipment:["Resistance Bands"], type:"strength", category:"push", body:"upper", desc:"Stand on band, raise handles to sides. Constant tension throughout range." },
  { name:"Arnold Press", muscle:"Shoulders", secondary:"Triceps", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"upper", desc:"Start with palms facing you, rotate outward as you press overhead. Hits all three delt heads." },
  { name:"Kettlebell Halo", muscle:"Shoulders", secondary:"Core, Traps", equipment:["Kettlebell"], type:"strength", category:"push", body:"upper", desc:"Hold kettlebell upside down by horns. Circle it around head. Great for shoulder mobility." },
  { name:"Barbell Upright Row", muscle:"Shoulders", secondary:"Traps, Biceps", equipment:["Olympic Barbell"], type:"strength", category:"pull", body:"upper", desc:"Narrow grip, pull bar up along body to chin height. Elbows lead the movement." },
  { name:"Pike Push-Ups", muscle:"Shoulders", secondary:"Triceps", equipment:["Push-Up Grips"], type:"strength", category:"push", body:"upper", desc:"Feet elevated on bench, body in inverted V. Lower head between grips. Mimics overhead press." },

  // ── ARMS ──
  { name:"Barbell Curl", muscle:"Arms", secondary:"Forearms", equipment:["Standard Barbell"], type:"strength", category:"pull", body:"upper", desc:"Standing curl with standard barbell. Keep elbows pinned to sides." },
  { name:"Dumbbell Bicep Curl", muscle:"Arms", secondary:"Forearms", equipment:["Dumbbells"], type:"strength", category:"pull", body:"upper", desc:"Alternate or simultaneous curls. Supinate wrist at top for peak contraction." },
  { name:"Hammer Curl", muscle:"Arms", secondary:"Forearms, Brachialis", equipment:["Dumbbells"], type:"strength", category:"pull", body:"upper", desc:"Neutral grip curls. Targets brachialis and forearms alongside biceps." },
  { name:"Incline Dumbbell Curl", muscle:"Arms", secondary:"", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"pull", body:"upper", desc:"Bench at ~45° incline. Curl with arms hanging straight down. Long head stretch." },
  { name:"Concentration Curl", muscle:"Arms", secondary:"", equipment:["Dumbbells"], type:"strength", category:"pull", body:"upper", desc:"Seated, elbow braced against inner thigh. Curl with strict form for peak contraction." },
  { name:"Banded Bicep Curl", muscle:"Arms", secondary:"", equipment:["Resistance Bands"], type:"strength", category:"pull", body:"upper", desc:"Stand on band, curl handles up. Increasing resistance through range." },
  { name:"Close-Grip Bench Press", muscle:"Arms", secondary:"Chest, Shoulders", equipment:["Olympic Barbell","Adjustable Bench","Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Narrow grip on barbell. Emphasises triceps. Lower to lower chest." },
  { name:"Dips (Tricep Focus)", muscle:"Arms", secondary:"Chest, Shoulders", equipment:["Squat Pillars"], type:"strength", category:"push", body:"upper", desc:"Upright torso on dip handles. Elbows travel straight back. Targets triceps." },
  { name:"Dumbbell Tricep Kickback", muscle:"Arms", secondary:"", equipment:["Dumbbells"], type:"strength", category:"push", body:"upper", desc:"Bent over, extend dumbbell behind you. Squeeze at full extension." },
  { name:"Overhead Dumbbell Tricep Extension", muscle:"Arms", secondary:"", equipment:["Dumbbells"], type:"strength", category:"push", body:"upper", desc:"Hold one dumbbell overhead with both hands. Lower behind head, extend up." },
  { name:"Banded Tricep Pushdown", muscle:"Arms", secondary:"", equipment:["Resistance Bands"], type:"strength", category:"push", body:"upper", desc:"Attach band overhead. Push down to full extension, elbows pinned." },
  { name:"Diamond Push-Ups", muscle:"Arms", secondary:"Chest", equipment:["Push-Up Grips"], type:"strength", category:"push", body:"upper", desc:"Hands close together forming diamond shape. Targets triceps heavily." },
  { name:"Banded Wrist Curls", muscle:"Arms", secondary:"Forearms", equipment:["Resistance Bands"], type:"strength", category:"pull", body:"upper", desc:"Seated, forearms on thighs. Curl band with wrists. Builds grip strength." },

  // ── LEGS ──
  { name:"Barbell Back Squat", muscle:"Legs", secondary:"Glutes, Core", equipment:["Olympic Barbell","Squat Pillars"], type:"strength", category:"push", body:"lower", desc:"Bar on upper traps. Squat to parallel or below. Drive through heels. No safety catches so use conservative weight." },
  { name:"Barbell Front Squat", muscle:"Legs", secondary:"Core, Glutes", equipment:["Olympic Barbell","Squat Pillars"], type:"strength", category:"push", body:"lower", desc:"Bar racked on front delts. Upright torso, squat deep. Can bail forward safely without catches." },
  { name:"Landmine Squat", muscle:"Legs", secondary:"Core, Glutes", equipment:["Olympic Barbell","Landmine"], type:"strength", category:"push", body:"lower", desc:"Hold end of landmine bar at chest. Squat down. Very stable, great for form work." },
  { name:"Dumbbell Goblet Squat", muscle:"Legs", secondary:"Core, Glutes", equipment:["Dumbbells"], type:"strength", category:"push", body:"lower", desc:"Hold dumbbell at chest, squat deep. Elbows inside knees at bottom." },
  { name:"Kettlebell Goblet Squat", muscle:"Legs", secondary:"Core", equipment:["Kettlebell"], type:"strength", category:"push", body:"lower", desc:"Hold kettlebell at chest by horns. Squat deep with upright torso." },
  { name:"Barbell Romanian Deadlift", muscle:"Legs", secondary:"Glutes, Back", equipment:["Olympic Barbell"], type:"strength", category:"pull", body:"lower", desc:"Hinge at hips, slight knee bend. Lower bar along shins until hamstring stretch. Drive hips forward." },
  { name:"Dumbbell Romanian Deadlift", muscle:"Legs", secondary:"Glutes", equipment:["Dumbbells"], type:"strength", category:"pull", body:"lower", desc:"Same hip hinge pattern with dumbbells. Can do single leg for added challenge." },
  { name:"Barbell Lunges", muscle:"Legs", secondary:"Glutes, Core", equipment:["Olympic Barbell"], type:"strength", category:"push", body:"lower", desc:"Bar on back, step forward into lunge. Alternate legs. Keep torso upright." },
  { name:"Dumbbell Lunges", muscle:"Legs", secondary:"Glutes, Core", equipment:["Dumbbells"], type:"strength", category:"push", body:"lower", desc:"Dumbbells at sides, walking or stationary lunges." },
  { name:"Dumbbell Step-Ups", muscle:"Legs", secondary:"Glutes", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"lower", desc:"Step up onto bench holding dumbbells. Drive through lead leg. Alternate." },
  { name:"Barbell Hip Thrust", muscle:"Legs", secondary:"Glutes", equipment:["Olympic Barbell","Adjustable Bench"], type:"strength", category:"push", body:"lower", desc:"Upper back on bench, bar over hips. Drive hips up, squeeze glutes at top." },
  { name:"Barbell Calf Raise", muscle:"Legs", secondary:"", equipment:["Olympic Barbell","Squat Pillars"], type:"strength", category:"push", body:"lower", desc:"Bar on back, rise up onto toes. Slow eccentric for maximum calf engagement." },
  { name:"Dumbbell Calf Raise", muscle:"Legs", secondary:"", equipment:["Dumbbells"], type:"strength", category:"push", body:"lower", desc:"Single or double leg. Stand on edge of plate for extra range." },
  { name:"Bulgarian Split Squat", muscle:"Legs", secondary:"Glutes, Core", equipment:["Dumbbells","Adjustable Bench"], type:"strength", category:"push", body:"lower", desc:"Rear foot on bench, dumbbells at sides. Squat on front leg. Brutal unilateral work." },
  { name:"Banded Leg Curl", muscle:"Legs", secondary:"Hamstrings", equipment:["Resistance Bands"], type:"strength", category:"pull", body:"lower", desc:"Anchor band low, wrap around ankle. Lying face down, curl heel towards glute." },
  { name:"Banded Lateral Walk", muscle:"Legs", secondary:"Glutes", equipment:["Resistance Bands"], type:"strength", category:"push", body:"lower", desc:"Band around ankles or above knees. Side-step in squat position. Targets glute medius." },
  { name:"Wall Sit", muscle:"Legs", secondary:"Core", equipment:[], type:"strength", category:"push", body:"lower", desc:"Back against wall, thighs parallel to floor. Hold for time. Simple but savage." },
  { name:"Landmine Single-Leg RDL", muscle:"Legs", secondary:"Glutes, Core", equipment:["Olympic Barbell","Landmine"], type:"strength", category:"pull", body:"lower", desc:"Hold end of landmine bar. Hinge on one leg, opposite leg extends behind. Balance and hamstring focus." },

  // ── CORE ──
  { name:"Ab Roller Rollout", muscle:"Core", secondary:"Shoulders, Lats", equipment:["Ab Roller"], type:"strength", category:"core", body:"core", desc:"From knees, roll out until body is extended. Pull back using core. Progress to standing." },
  { name:"Hanging Knee Raise", muscle:"Core", secondary:"Hip Flexors", equipment:["Chin-Up Bar"], type:"strength", category:"core", body:"core", desc:"Hang from bar, raise knees to chest. Control the swing." },
  { name:"Hanging Leg Raise", muscle:"Core", secondary:"Hip Flexors", equipment:["Chin-Up Bar"], type:"strength", category:"core", body:"core", desc:"Hang from bar, raise straight legs to horizontal or above. Advanced core exercise." },
  { name:"Landmine Rotation", muscle:"Core", secondary:"Obliques, Shoulders", equipment:["Olympic Barbell","Landmine"], type:"strength", category:"core", body:"core", desc:"Hold end of bar at chest. Rotate side to side in arc. Anti-rotation and oblique work." },
  { name:"Barbell Rollout", muscle:"Core", secondary:"Shoulders", equipment:["Olympic Barbell"], type:"strength", category:"core", body:"core", desc:"Barbell on floor with round plates. Kneel behind, roll out and back. Similar to ab roller but wider grip." },
  { name:"Plank", muscle:"Core", secondary:"Shoulders", equipment:[], type:"strength", category:"core", body:"core", desc:"Forearms on floor, body rigid. Hold for time. Focus on posterior pelvic tilt." },
  { name:"Dumbbell Side Bend", muscle:"Core", secondary:"Obliques", equipment:["Dumbbells"], type:"strength", category:"core", body:"core", desc:"Hold dumbbell in one hand, bend sideways. Return to upright. Targets obliques." },
  { name:"Kettlebell Turkish Get-Up", muscle:"Core", secondary:"Shoulders, Legs, Full Body", equipment:["Kettlebell"], type:"strength", category:"core", body:"full", desc:"Lie down with KB locked out overhead. Stand up through a series of steps. Full body stability." },
  { name:"Mountain Climbers", muscle:"Core", secondary:"Shoulders, Hip Flexors", equipment:[], type:"cardio", category:"core", body:"core", desc:"Plank position, drive knees to chest alternately at speed. Great for core and cardio." },
  { name:"Dead Bug", muscle:"Core", secondary:"Hip Flexors", equipment:[], type:"strength", category:"core", body:"core", desc:"Lie on back, extend opposite arm and leg while maintaining flat back. Anti-extension exercise." },
  { name:"Banded Pallof Press", muscle:"Core", secondary:"Obliques", equipment:["Resistance Bands"], type:"strength", category:"core", body:"core", desc:"Band anchored to side. Press away from chest, resist rotation. Anti-rotation drill." },
  { name:"Russian Twist", muscle:"Core", secondary:"Obliques", equipment:["Kettlebell"], type:"strength", category:"core", body:"core", desc:"Seated, feet off floor. Rotate kettlebell side to side. Keep chest up." },

  // ── CARDIO ──
  { name:"Treadmill Run", muscle:"Cardio", secondary:"Legs", equipment:["Treadmill"], type:"cardio", category:"cardio", body:"full", desc:"Steady-state or intervals. Adjust speed and incline to match intensity." },
  { name:"Treadmill Incline Walk", muscle:"Cardio", secondary:"Glutes, Calves", equipment:["Treadmill"], type:"cardio", category:"cardio", body:"full", desc:"High incline (10-15%), moderate pace. Low impact but high calorie burn." },
  { name:"Treadmill Sprint Intervals", muscle:"Cardio", secondary:"Legs, Core", equipment:["Treadmill"], type:"cardio", category:"cardio", body:"full", desc:"Alternate max effort sprints with walking recovery. Brutal conditioning." },
  { name:"Stationary Bike Ride", muscle:"Cardio", secondary:"Legs", equipment:["Stationary Bike"], type:"cardio", category:"cardio", body:"full", desc:"Steady resistance, maintain cadence. Easier on joints than running." },
  { name:"Bike Sprint Intervals", muscle:"Cardio", secondary:"Legs", equipment:["Stationary Bike"], type:"cardio", category:"cardio", body:"full", desc:"Alternate high resistance sprints with easy spinning recovery." },
  { name:"Battle Rope Waves", muscle:"Cardio", secondary:"Shoulders, Core, Arms", equipment:["Battle Rope"], type:"cardio", category:"cardio", body:"full", desc:"Alternating arm waves. Keep core braced, slight squat. 20-30 second bursts." },
  { name:"Battle Rope Slams", muscle:"Cardio", secondary:"Shoulders, Core, Back", equipment:["Battle Rope"], type:"cardio", category:"cardio", body:"full", desc:"Raise both ropes overhead, slam down with full force. Power and conditioning." },
  { name:"Battle Rope Spirals", muscle:"Cardio", secondary:"Shoulders, Arms", equipment:["Battle Rope"], type:"cardio", category:"cardio", body:"full", desc:"Move arms in outward circles creating spiral patterns in the rope." },
  { name:"Kettlebell Swings", muscle:"Cardio", secondary:"Glutes, Hamstrings, Core", equipment:["Kettlebell"], type:"cardio", category:"cardio", body:"full", desc:"Hip hinge, swing KB to shoulder height. Power from hips not arms. High rep conditioning." },
  { name:"Burpees", muscle:"Cardio", secondary:"Full Body", equipment:[], type:"cardio", category:"cardio", body:"full", desc:"Squat down, jump feet back to plank, push-up, jump feet in, jump up. The classic conditioning move." },
  { name:"Jumping Jacks", muscle:"Cardio", secondary:"Full Body", equipment:[], type:"cardio", category:"cardio", body:"full", desc:"Classic warm-up and active recovery exercise. Jump feet out while raising arms overhead." },
  { name:"High Knees", muscle:"Cardio", secondary:"Hip Flexors, Core", equipment:[], type:"cardio", category:"cardio", body:"full", desc:"Running on the spot, driving knees high. Keep a fast pace." },
  { name:"Squat Jumps", muscle:"Cardio", secondary:"Legs, Glutes", equipment:[], type:"cardio", category:"cardio", body:"full", desc:"Bodyweight squat, explode up into a jump. Land softly, repeat. Plyometric power." },
  { name:"Box Jumps (Bench)", muscle:"Cardio", secondary:"Legs, Glutes", equipment:["Adjustable Bench"], type:"cardio", category:"cardio", body:"full", desc:"Jump onto flat bench. Step down, repeat. Explosive leg power. Ensure bench is stable." },

  // ── BOXING ──
  { name:"Shadow Boxing", muscle:"Cardio", secondary:"Shoulders, Core, Arms", equipment:[], type:"cardio", category:"cardio", body:"full", desc:"Throw combinations in the air — jabs, crosses, hooks, uppercuts. Stay light on feet, keep guard up. Great full-body conditioning." },
  { name:"Heavy Bag Rounds", muscle:"Cardio", secondary:"Shoulders, Core, Arms", equipment:["Heavy Bag"], type:"cardio", category:"cardio", body:"full", desc:"Work the heavy bag in 2–3 minute rounds. Mix punches, vary power and speed. Focus on technique and breathing." },
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentFilter = "all";
let selectedType = "weights";
let selectedFocus = "full";
let selectedDuration = 30;
let selectedIntensity = "moderate";

// Timer state
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerInitialSeconds = 0;

// Workout timer state
let workoutTimerInterval = null;
let workoutTimerData = null;

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function switchPage(pageId, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  btn.classList.add('active');
  if (pageId === 'exercises') renderExercises();
}

// ══════════════════════════════════════════
// EXERCISES PAGE
// ══════════════════════════════════════════
function initExerciseFilters() {
  const muscles = ["All","Chest","Back","Shoulders","Arms","Legs","Core","Cardio"];
  const container = document.getElementById('exerciseFilters');
  container.innerHTML = muscles.map(m =>
    `<button class="filter-btn ${m === 'All' ? 'active' : ''}" onclick="filterExercises('${m.toLowerCase()}', this)">${m}</button>`
  ).join('');
}

function filterExercises(muscle, btn) {
  currentFilter = muscle;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderExercises();
}

function renderExercises() {
  const filtered = currentFilter === 'all' ? exercises : exercises.filter(e => e.muscle.toLowerCase() === currentFilter);
  document.getElementById('exerciseCount').textContent = `${filtered.length} exercises`;
  const container = document.getElementById('exerciseList');
  container.innerHTML = filtered.map((e, i) => {
    const muscleClass = e.muscle.toLowerCase() === 'cardio' ? 'cardio' : e.muscle.toLowerCase();
    return `<div class="exercise-item" onclick="this.classList.toggle('expanded')">
      <div class="exercise-item-header">
        <span class="exercise-item-name">${e.name}</span>
        <span class="exercise-item-muscle">${e.muscle}</span>
      </div>
      <div class="exercise-item-equip">${e.equipment.length ? e.equipment.join(' · ') : 'Bodyweight'}</div>
      <div class="exercise-item-detail">
        ${e.secondary ? `<div style="margin-bottom:6px"><strong>Also targets:</strong> ${e.secondary}</div>` : ''}
        ${e.desc}
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
// GENERATOR CONTROLS
// ══════════════════════════════════════════
function selectType(el) {
  document.querySelectorAll('#typeOptions .gen-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedType = el.dataset.type;
  // Show/hide focus section
  document.getElementById('focusSection').style.display = selectedType === 'cardio' ? 'none' : 'block';
}

function selectFocus(el) {
  document.querySelectorAll('#focusOptions .focus-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedFocus = el.dataset.focus;
}

function selectDuration(el) {
  document.querySelectorAll('#durationOptions .gen-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedDuration = parseInt(el.dataset.duration);
}

function selectIntensity(el) {
  document.querySelectorAll('#intensityOptions .gen-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  selectedIntensity = el.dataset.intensity;
}

// ══════════════════════════════════════════
// CARDIO TIME MINIMUMS
// ══════════════════════════════════════════
function getMinimumSeconds(exercise) {
  const equip = exercise.equipment || [];
  if (equip.includes("Treadmill") || equip.includes("Stationary Bike")) return 120;
  if (equip.includes("Heavy Bag") || exercise.name === "Shadow Boxing") return 90;
  return 0;
}

function applyMinimumTime(exercise, prescriptionStr) {
  const minSec = getMinimumSeconds(exercise);
  if (minSec === 0) return prescriptionStr;

  // Parse interval-style prescriptions like "20s on / 10s off" or "30s on / 30s off"
  const intervalMatch = prescriptionStr.match(/^(\d+)s\s*on\s*\/\s*(\d+)s\s*off$/);
  if (intervalMatch) {
    const workSec = parseInt(intervalMatch[1]);
    if (workSec < minSec) {
      return `${minSec}s on / ${intervalMatch[2]}s off`;
    }
    return prescriptionStr;
  }

  // Parse work-only times like "40s" or "45s"
  const workMatch = prescriptionStr.match(/^(\d+)s$/);
  if (workMatch) {
    const workSec = parseInt(workMatch[1]);
    if (workSec < minSec) {
      return `${minSec}s`;
    }
    return prescriptionStr;
  }

  // Parse work/rest like "40s / 20s"
  const wrMatch = prescriptionStr.match(/^(\d+)s\s*\/\s*(\d+)s$/);
  if (wrMatch) {
    const workSec = parseInt(wrMatch[1]);
    if (workSec < minSec) {
      return `${minSec}s / ${wrMatch[2]}s`;
    }
    return prescriptionStr;
  }

  return prescriptionStr;
}

// ══════════════════════════════════════════
// WORKOUT GENERATION
// ══════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function pick(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }

function getRestSeconds() {
  return { low: 90, moderate: 60, high: 30 }[selectedIntensity];
}

function getSetsReps() {
  if (selectedIntensity === 'low') return { sets: 3, reps: '12-15', restLabel: '90s rest' };
  if (selectedIntensity === 'moderate') return { sets: 4, reps: '8-12', restLabel: '60s rest' };
  return { sets: 4, reps: '6-8', restLabel: '30-45s rest' };
}

function getCardioProtocol() {
  if (selectedIntensity === 'low') return { work: '5-6 min', style: 'Steady state', intervals: false };
  if (selectedIntensity === 'moderate') return { work: '30s on / 30s off', style: 'Intervals', intervals: true };
  return { work: '20s on / 10s off', style: 'Tabata / HIIT', intervals: true };
}

function filterByFocus(list) {
  if (selectedFocus === 'full') return list;
  if (selectedFocus === 'upper') return list.filter(e => e.body === 'upper' || e.body === 'full');
  if (selectedFocus === 'lower') return list.filter(e => e.body === 'lower' || e.body === 'full');
  if (selectedFocus === 'push') return list.filter(e => e.category === 'push');
  if (selectedFocus === 'pull') return list.filter(e => e.category === 'pull');
  if (selectedFocus === 'core') return list.filter(e => e.category === 'core' || e.muscle === 'Core');
  return list;
}

// Store last generated workout data for the workout timer
let lastWorkoutData = null;

function generateWeights() {
  const sr = getSetsReps();
  const strength = exercises.filter(e => e.type === 'strength');
  const pool = filterByFocus(strength);

  // Estimate: each exercise ~4-5 mins (including rest)
  const exerciseTime = selectedIntensity === 'low' ? 5 : selectedIntensity === 'moderate' ? 4.5 : 4;
  const warmupTime = 5;
  const availableTime = selectedDuration - warmupTime;
  const numExercises = Math.max(3, Math.min(Math.floor(availableTime / exerciseTime), 10));

  // Pick exercises ensuring muscle variety
  const selected = pick(pool, numExercises);

  // Split into compounds and accessories
  const compounds = selected.filter(e => e.secondary && e.secondary.length > 5);
  const accessories = selected.filter(e => !e.secondary || e.secondary.length <= 5);
  const ordered = [...compounds, ...accessories];

  // Store workout data for timer
  const restSec = getRestSeconds();
  lastWorkoutData = {
    type: 'weights',
    exercises: ordered.map(e => ({
      name: e.name,
      equipment: e.equipment,
      prescription: `${sr.sets}×${sr.reps}`,
      sets: sr.sets,
      workSeconds: 45, // estimated time per set
      restSeconds: restSec,
    })),
  };

  let html = `<div class="workout-header-bar">
    <div class="workout-title">💪 Weights Session</div>
    <div class="workout-meta">${selectedDuration}min · ${selectedIntensity} · ${selectedFocus}</div>
  </div>`;

  // Warm-up
  html += `<div class="workout-block">
    <div class="workout-block-title">Warm-Up · 5 minutes</div>
    <div class="workout-exercise"><span class="we-name">Light cardio + dynamic stretching</span><span class="we-prescription">5 min</span></div>
  </div>`;

  // Main work
  html += `<div class="workout-block"><div class="workout-block-title">Main Work · ${ordered.length} exercises</div>`;
  ordered.forEach(e => {
    html += `<div class="workout-exercise">
      <div><div class="we-name">${e.name}</div><div class="we-notes">${e.equipment.length ? e.equipment.join(' · ') : 'Bodyweight'}</div></div>
      <span class="we-prescription">${sr.sets}×${sr.reps}</span>
    </div>`;
  });
  html += `</div>`;
  html += `<div class="workout-rest">Rest ${sr.restLabel} between sets</div>`;

  return html;
}

function generateCardio() {
  const protocol = getCardioProtocol();
  const cardioExercises = exercises.filter(e => e.type === 'cardio');
  const warmupTime = 5;
  const cooldownTime = 3;
  const mainTime = selectedDuration - warmupTime - cooldownTime;

  let html = `<div class="workout-header-bar">
    <div class="workout-title">🫀 Cardio Session</div>
    <div class="workout-meta">${selectedDuration}min · ${selectedIntensity} · ${protocol.style}</div>
  </div>`;

  html += `<div class="workout-block">
    <div class="workout-block-title">Warm-Up · 5 minutes</div>
    <div class="workout-exercise"><span class="we-name">Easy pace build-up</span><span class="we-prescription">5 min</span></div>
  </div>`;

  if (!protocol.intervals) {
    // Steady state - pick 2-3 exercises and split time
    const selected = pick(cardioExercises, Math.min(3, Math.ceil(mainTime / 8)));
    const timeEach = Math.floor(mainTime / selected.length);

    // Store workout data for timer
    lastWorkoutData = {
      type: 'cardio-steady',
      exercises: selected.map(e => ({
        name: e.name,
        equipment: e.equipment,
        prescription: `${timeEach} min`,
        workSeconds: timeEach * 60,
        restSeconds: 0,
        sets: 1,
      })),
    };

    html += `<div class="workout-block"><div class="workout-block-title">Steady State · ${mainTime} minutes</div>`;
    selected.forEach(e => {
      html += `<div class="workout-exercise">
        <div><div class="we-name">${e.name}</div><div class="we-notes">${e.desc.substring(0, 60)}…</div></div>
        <span class="we-prescription">${timeEach} min</span>
      </div>`;
    });
    html += `</div>`;
  } else {
    // Interval training
    const numStations = selectedIntensity === 'high' ? 5 : 4;
    const selected = pick(cardioExercises, numStations);
    const rounds = selectedIntensity === 'high' ? Math.floor(mainTime / (numStations * 0.5 + 1)) : Math.floor(mainTime / (numStations * 1 + 1));
    const actualRounds = Math.max(2, Math.min(rounds, 5));

    // Parse work/rest from protocol for timer data
    const protoMatch = protocol.work.match(/^(\d+)s\s*on\s*\/\s*(\d+)s\s*off$/);
    const baseWorkSec = protoMatch ? parseInt(protoMatch[1]) : 30;
    const baseRestSec = protoMatch ? parseInt(protoMatch[2]) : 30;

    // Store workout data for timer
    lastWorkoutData = {
      type: 'cardio-intervals',
      rounds: actualRounds,
      exercises: selected.map(e => {
        const adjusted = applyMinimumTime(e, protocol.work);
        const adjMatch = adjusted.match(/^(\d+)s\s*on\s*\/\s*(\d+)s\s*off$/);
        const workSec = adjMatch ? parseInt(adjMatch[1]) : baseWorkSec;
        const restSec = adjMatch ? parseInt(adjMatch[2]) : baseRestSec;
        return {
          name: e.name,
          equipment: e.equipment,
          prescription: adjusted,
          workSeconds: workSec,
          restSeconds: restSec,
          sets: actualRounds,
        };
      }),
    };

    html += `<div class="circuit-round-info">${actualRounds} rounds · ${protocol.work} per exercise</div>`;
    html += `<div class="workout-block"><div class="workout-block-title">Interval Stations</div>`;
    selected.forEach(e => {
      const adjusted = applyMinimumTime(e, protocol.work);
      html += `<div class="workout-exercise">
        <div><div class="we-name">${e.name}</div><div class="we-notes">${e.equipment.length ? e.equipment.join(' · ') : 'Bodyweight'}</div></div>
        <span class="we-prescription">${adjusted}</span>
      </div>`;
    });
    html += `</div>`;
  }

  html += `<div class="workout-block">
    <div class="workout-block-title">Cool-Down · 3 minutes</div>
    <div class="workout-exercise"><span class="we-name">Easy pace + stretching</span><span class="we-prescription">3 min</span></div>
  </div>`;

  return html;
}

function generateCircuit() {
  const warmupTime = 5;
  const cooldownTime = 3;
  const mainTime = selectedDuration - warmupTime - cooldownTime;

  const strength = filterByFocus(exercises.filter(e => e.type === 'strength'));
  const cardio = exercises.filter(e => e.type === 'cardio');

  // Mix strength and cardio
  const stationsPerRound = selectedIntensity === 'high' ? 8 : selectedIntensity === 'moderate' ? 6 : 5;
  const strengthPicks = pick(strength, Math.ceil(stationsPerRound * 0.6));
  const cardioPicks = pick(cardio, Math.floor(stationsPerRound * 0.4));

  // Interleave
  let stations = [];
  const maxLen = Math.max(strengthPicks.length, cardioPicks.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < strengthPicks.length) stations.push(strengthPicks[i]);
    if (i < cardioPicks.length) stations.push(cardioPicks[i]);
  }
  stations = stations.slice(0, stationsPerRound);

  const workRest = selectedIntensity === 'low' ? '40s / 20s' : selectedIntensity === 'moderate' ? '40s / 15s' : '45s / 10s';
  const roundTimeMin = (stationsPerRound * (selectedIntensity === 'low' ? 1 : selectedIntensity === 'moderate' ? 0.92 : 0.92)) + 1; // +1 min rest between rounds
  const rounds = Math.max(2, Math.min(Math.floor(mainTime / roundTimeMin), 5));

  // Parse work/rest for timer
  const wrParts = workRest.split('/').map(s => parseInt(s.trim()));
  const baseWorkSec = wrParts[0];
  const baseRestSec = wrParts[1];

  // Store workout data for timer
  lastWorkoutData = {
    type: 'circuit',
    rounds: rounds,
    exercises: stations.map(e => {
      const workStr = workRest.split('/')[0].trim();
      const adjusted = applyMinimumTime(e, workStr);
      const adjSec = parseInt(adjusted);
      return {
        name: e.name,
        equipment: e.equipment,
        isCardio: e.type === 'cardio',
        prescription: adjusted,
        workSeconds: isNaN(adjSec) ? baseWorkSec : adjSec,
        restSeconds: baseRestSec,
        sets: rounds,
      };
    }),
  };

  let html = `<div class="workout-header-bar">
    <div class="workout-title">⚡ Circuit Session</div>
    <div class="workout-meta">${selectedDuration}min · ${selectedIntensity} · ${selectedFocus}</div>
  </div>`;

  html += `<div class="workout-block">
    <div class="workout-block-title">Warm-Up · 5 minutes</div>
    <div class="workout-exercise"><span class="we-name">Light cardio + mobility</span><span class="we-prescription">5 min</span></div>
  </div>`;

  html += `<div class="circuit-round-info">${rounds} rounds · ${stationsPerRound} stations · Work/Rest: ${workRest}</div>`;

  html += `<div class="workout-block"><div class="workout-block-title">Circuit Stations</div>`;
  stations.forEach((e, i) => {
    const isCardio = e.type === 'cardio';
    const workStr = workRest.split('/')[0].trim();
    const adjusted = applyMinimumTime(e, workStr);
    html += `<div class="workout-exercise">
      <div>
        <div class="we-name">${i + 1}. ${e.name}</div>
        <div class="we-notes">${isCardio ? '🫀 Cardio' : '💪 Strength'} · ${e.equipment.length ? e.equipment.join(' · ') : 'Bodyweight'}</div>
      </div>
      <span class="we-prescription">${adjusted}</span>
    </div>`;
  });
  html += `</div>`;

  html += `<div class="workout-rest">Rest 60–90s between rounds</div>`;

  html += `<div class="workout-block">
    <div class="workout-block-title">Cool-Down · 3 minutes</div>
    <div class="workout-exercise"><span class="we-name">Stretching + deep breathing</span><span class="we-prescription">3 min</span></div>
  </div>`;

  return html;
}

function generateWorkout() {
  let html;
  if (selectedType === 'weights') html = generateWeights();
  else if (selectedType === 'cardio') html = generateCardio();
  else html = generateCircuit();

  html += `<button class="start-workout-btn" onclick="startWorkoutTimer()">▶ Start Workout</button>`;
  html += `<button class="regen-btn" onclick="generateWorkout()">↻ Regenerate</button>`;

  document.getElementById('workoutOutput').innerHTML = `<div class="workout-output">${html}</div>`;
  document.getElementById('workoutOutput').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ══════════════════════════════════════════
// STANDALONE TIMER
// ══════════════════════════════════════════
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function setTimerPreset(seconds, btn) {
  stopTimer();
  timerSeconds = seconds;
  timerInitialSeconds = seconds;
  document.querySelectorAll('.timer-preset').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('customSeconds').value = '';
  updateTimerDisplay();
}

function setCustomTime() {
  const input = document.getElementById('customSeconds');
  const val = parseInt(input.value);
  if (val > 0 && val <= 3600) {
    stopTimer();
    timerSeconds = val;
    timerInitialSeconds = val;
    document.querySelectorAll('.timer-preset').forEach(b => b.classList.remove('active'));
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (display) {
    display.textContent = formatTime(timerSeconds);
  }
  const label = document.getElementById('timerLabel');
  if (label) {
    if (timerRunning) label.textContent = 'Running';
    else if (timerSeconds === 0 && timerInitialSeconds > 0) label.textContent = 'Done!';
    else label.textContent = 'Ready';
  }
}

function startPauseTimer() {
  if (timerRunning) {
    // Pause
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('timerStartBtn').textContent = '▶ Start';
    updateTimerDisplay();
    return;
  }

  if (timerSeconds <= 0) {
    // If timer is at 0, check for custom input
    const input = document.getElementById('customSeconds');
    const val = parseInt(input.value);
    if (val > 0) {
      timerSeconds = val;
      timerInitialSeconds = val;
    } else if (timerInitialSeconds > 0) {
      timerSeconds = timerInitialSeconds;
    } else {
      return; // nothing to start
    }
  }

  timerRunning = true;
  document.getElementById('timerStartBtn').textContent = '⏸ Pause';
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      document.getElementById('timerStartBtn').textContent = '▶ Start';
      timerFinished();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timerStartBtn').textContent = '▶ Start';
}

function resetTimer() {
  stopTimer();
  timerSeconds = timerInitialSeconds;
  updateTimerDisplay();
}

function timerFinished() {
  const display = document.getElementById('timerDisplay');
  display.classList.add('flash');
  setTimeout(() => display.classList.remove('flash'), 1600);
  updateTimerDisplay();
  timerBeep();
}

function timerBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const beep = (freq, start, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + start + dur);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    };
    beep(880, 0, 0.15);
    beep(880, 0.2, 0.15);
    beep(1320, 0.4, 0.3);
  } catch (e) {
    // Audio not available
  }
}

// ══════════════════════════════════════════
// WORKOUT TIMER (OVERLAY)
// ══════════════════════════════════════════
function startWorkoutTimer() {
  if (!lastWorkoutData || !lastWorkoutData.exercises.length) return;

  const data = lastWorkoutData;
  // Build a flat list of steps: each exercise's sets with work + rest
  const steps = [];
  const totalExercises = data.exercises.length;
  const rounds = data.rounds || 1;

  if (data.type === 'weights') {
    // Weights: for each exercise, alternate work/rest for each set
    data.exercises.forEach((ex, exIdx) => {
      for (let s = 0; s < ex.sets; s++) {
        steps.push({
          type: 'work',
          name: ex.name,
          detail: `Set ${s + 1} of ${ex.sets} · ${ex.prescription}`,
          seconds: ex.workSeconds,
          exerciseIndex: exIdx,
        });
        // Rest after set (except last set of last exercise)
        if (s < ex.sets - 1 || exIdx < totalExercises - 1) {
          steps.push({
            type: 'rest',
            name: 'Rest',
            detail: s < ex.sets - 1 ? `Before set ${s + 2}` : `Before next exercise`,
            seconds: ex.restSeconds,
            exerciseIndex: exIdx,
          });
        }
      }
    });
  } else if (data.type === 'cardio-steady') {
    // Steady cardio: just work blocks
    data.exercises.forEach((ex, exIdx) => {
      steps.push({
        type: 'work',
        name: ex.name,
        detail: ex.prescription,
        seconds: ex.workSeconds,
        exerciseIndex: exIdx,
      });
    });
  } else {
    // Intervals or circuit: rounds of exercises
    for (let r = 0; r < rounds; r++) {
      data.exercises.forEach((ex, exIdx) => {
        steps.push({
          type: 'work',
          name: ex.name,
          detail: `Round ${r + 1} of ${rounds}` + (ex.isCardio !== undefined ? (ex.isCardio ? ' · Cardio' : ' · Strength') : ''),
          seconds: ex.workSeconds,
          exerciseIndex: exIdx,
          round: r,
        });
        // Rest after each station
        if (ex.restSeconds > 0) {
          steps.push({
            type: 'rest',
            name: 'Rest',
            detail: `Round ${r + 1}`,
            seconds: ex.restSeconds,
            exerciseIndex: exIdx,
            round: r,
          });
        }
      });
      // Extra rest between rounds (except last)
      if (r < rounds - 1) {
        steps.push({
          type: 'rest',
          name: 'Round Break',
          detail: `Get ready for round ${r + 2}`,
          seconds: 60,
          exerciseIndex: -1,
          round: r,
        });
      }
    }
  }

  if (steps.length === 0) return;

  workoutTimerData = {
    steps: steps,
    currentStep: 0,
    secondsLeft: steps[0].seconds,
    running: false,
    totalSteps: steps.length,
  };

  renderWorkoutTimerOverlay();
  workoutTimerToggle(); // auto-start
}

function renderWorkoutTimerOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'workout-timer-overlay';
  overlay.id = 'workoutTimerOverlay';

  const d = workoutTimerData;
  const step = d.steps[d.currentStep];
  const nextWork = d.steps.slice(d.currentStep + 1).find(s => s.type === 'work');

  // Progress dots — one per work step
  const workSteps = d.steps.filter(s => s.type === 'work');
  const currentWorkIndex = d.steps.slice(0, d.currentStep + 1).filter(s => s.type === 'work').length - (step.type === 'work' ? 0 : 0);

  let progressHtml = '<div class="wt-progress">';
  workSteps.forEach((_, i) => {
    const cls = i < currentWorkIndex ? 'done' : i === currentWorkIndex ? 'current' : '';
    progressHtml += `<div class="wt-progress-dot ${cls}"></div>`;
  });
  progressHtml += '</div>';

  overlay.innerHTML = `
    ${progressHtml}
    <button class="wt-close" onclick="closeWorkoutTimer()">✕</button>
    <div class="wt-phase ${step.type}">${step.type === 'work' ? 'Work' : 'Rest'}</div>
    <div class="wt-exercise-name">${step.name}</div>
    <div class="wt-exercise-detail">${step.detail}</div>
    <div class="wt-time ${step.type}" id="wtTime">${formatTime(d.secondsLeft)}</div>
    <div class="wt-time-label" id="wtLabel">${d.running ? 'Running' : 'Ready'}</div>
    <div class="wt-controls">
      <button class="wt-btn secondary" onclick="workoutTimerSkip()">Skip ⏭</button>
      <button class="wt-btn primary" id="wtToggleBtn" onclick="workoutTimerToggle()">${d.running ? '⏸ Pause' : '▶ Start'}</button>
    </div>
    ${nextWork ? `<div class="wt-upcoming"><div class="wt-upcoming-label">Up Next</div><div class="wt-upcoming-name">${nextWork.name}</div></div>` : ''}
  `;

  // Replace existing or add new
  const existing = document.getElementById('workoutTimerOverlay');
  if (existing) existing.replaceWith(overlay);
  else document.body.appendChild(overlay);
}

function updateWorkoutTimerDisplay() {
  const d = workoutTimerData;
  if (!d) return;
  const timeEl = document.getElementById('wtTime');
  const labelEl = document.getElementById('wtLabel');
  if (timeEl) timeEl.textContent = formatTime(d.secondsLeft);
  if (labelEl) labelEl.textContent = d.running ? 'Running' : 'Paused';
}

function workoutTimerToggle() {
  const d = workoutTimerData;
  if (!d) return;

  if (d.running) {
    clearInterval(workoutTimerInterval);
    d.running = false;
    document.getElementById('wtToggleBtn').textContent = '▶ Start';
    updateWorkoutTimerDisplay();
    return;
  }

  d.running = true;
  document.getElementById('wtToggleBtn').textContent = '⏸ Pause';
  updateWorkoutTimerDisplay();

  workoutTimerInterval = setInterval(() => {
    d.secondsLeft--;
    updateWorkoutTimerDisplay();

    if (d.secondsLeft <= 0) {
      timerBeep();
      workoutTimerNext();
    }
  }, 1000);
}

function workoutTimerNext() {
  const d = workoutTimerData;
  if (!d) return;

  clearInterval(workoutTimerInterval);
  d.running = false;
  d.currentStep++;

  if (d.currentStep >= d.totalSteps) {
    // Workout complete
    workoutTimerComplete();
    return;
  }

  d.secondsLeft = d.steps[d.currentStep].seconds;
  renderWorkoutTimerOverlay();
  workoutTimerToggle(); // auto-start next step
}

function workoutTimerSkip() {
  const d = workoutTimerData;
  if (!d) return;
  clearInterval(workoutTimerInterval);
  d.running = false;
  d.currentStep++;

  if (d.currentStep >= d.totalSteps) {
    workoutTimerComplete();
    return;
  }

  d.secondsLeft = d.steps[d.currentStep].seconds;
  renderWorkoutTimerOverlay();
  workoutTimerToggle();
}

function workoutTimerComplete() {
  clearInterval(workoutTimerInterval);
  timerBeep();

  const overlay = document.getElementById('workoutTimerOverlay');
  if (overlay) {
    overlay.innerHTML = `
      <button class="wt-close" onclick="closeWorkoutTimer()">✕</button>
      <div class="wt-phase done">Complete</div>
      <div class="wt-exercise-name">Workout Done!</div>
      <div class="wt-exercise-detail">Great session. Time to recover.</div>
      <div class="wt-time flash" style="color: var(--accent);">00:00</div>
      <div class="wt-controls">
        <button class="wt-btn primary" onclick="closeWorkoutTimer()">Close</button>
      </div>
    `;
  }
  workoutTimerData = null;
}

function closeWorkoutTimer() {
  clearInterval(workoutTimerInterval);
  workoutTimerData = null;
  const overlay = document.getElementById('workoutTimerOverlay');
  if (overlay) overlay.remove();
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
initExerciseFilters();

// Initialize timer display
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('timerDisplay');
  if (display) {
    timerSeconds = 60;
    timerInitialSeconds = 60;
    display.textContent = formatTime(timerSeconds);
  }
});
