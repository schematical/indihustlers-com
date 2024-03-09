export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What is the difference between the Free and Paid versions?</h4>
                <p className="text-slate-500">
                  Right now while we are getting started we are offering 8 spots in the first cohort for free. After that we are looking at a $19/month.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">When do you meet?</h4>
                <p className="text-slate-500">

                  Right now Monday - Friday 10am ET but this is subject to change as the group grows
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Is This In Person?</h4>
                <p className="text-slate-500">
                  No, this is 100% virtual. I suppose you could meet up with other group members if you were interested in doing so. I am not going to stop you.

                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What does the application process look like?</h4>
                <p className="text-slate-500">
                  Right now you fill out the signup form then we will reach out to you to do a virtual face to face meeting. From there we will diliberate and let you know.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Where Do We Meet?</h4>
                <p className="text-slate-500">
                  Discord! We have voice channels with video enabled that will facilitate our meetings.

                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Will The Meetings Be Recorded?</h4>
                <p className="text-slate-500">
                  Possibly, but we will 100% let you know beforehand. We are going to experiment, perhaps starting by livestreaming one day a week to help promote the group and any of our projects that the public might find interesting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}