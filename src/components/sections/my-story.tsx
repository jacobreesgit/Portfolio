import Noise from '@/components/noise';

export default function MyStory() {
  return (
    <section className="section-padding relative">
      <Noise />
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
            My Story
          </h2>

          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              I&apos;ve been hooked on building things with code since secondary
              school Computer Science. What started as curiosity became a
              passion for the intersection of design and engineering—making
              things that not only work well, but feel right to use.
            </p>

            <p>
              After studying Digital Media at Leeds (graduating with a First in
              my final coding project), I&apos;ve spent the last 3+ years as a
              Front-End Developer working on products used by millions. At
              Revolution Viewing, I built Vepple—a platform serving 30+ UK
              universities—architecting everything from real-time event systems
              to A/B testing frameworks. At Pavers, I developed accessible
              component libraries powering 160+ retail stores.
            </p>

            <p>
              What I love about this work is the variety. One day I&apos;m
              refining a micro-interaction until it feels perfect; the next
              I&apos;m solving a complex state management problem or debugging a
              tricky edge case. That blend of craft and problem-solving keeps me
              engaged.
            </p>

            <p>
              I&apos;m now looking for a role with more technical ownership and
              the opportunity to grow further into full-stack development. I
              want to build products that matter, with a team that cares about
              doing things properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
