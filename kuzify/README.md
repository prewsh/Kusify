# Kuzify

A WAEC study library for Nigerian secondary-school students. Browse Core, Sciences, and Arts & Humanities. The ready courses have ordered video lessons, worked examples, quick quizzes, and a cumulative practice exam.

Run `npm ci` and `npm run dev`, then visit http://localhost:3000. Run `npm run build` for a production build. Courses use curriculum files in the repository. Quiz progress is saved in the browser (localStorage), per subject.

Set `YOUTUBE_API_KEY` in `.env.local` for on-demand video discovery. For Vercel, set it as a server-side Preview environment variable and redeploy. The first lesson in each ready course has a curated video for review without a key. GitHub Pages serves static files and cannot run the YouTube lookup route.

No account or database is required. Original Kuzify practice and linked WAEC examiner materials are identified separately.

## Brand and images

The logo (`public/kuzify-logo.svg`, also used as `src/app/icon.svg`) is the original Kuzify logo. Brand colours: orange `#FF5421`, navy `#031A3D`, sky `#21A7D0`.

Landing page photos live in `public/images`. `tutor-video-call.jpg` and `student-laptop.jpg` come from the original Kuzify site. The others are free photos from [Unsplash](https://unsplash.com/license):
`hero-student.jpg` (unsplash.com/photos/gAoaTMD-0kg), `step-phone.jpg` (s2WxsnxeRc4), `step-laptop.jpg` (KUzlAah2dog), `step-writing.jpg` (Rbus5PbeBzM), `ss-students.jpg` (Z-KCM4gK8C8).
