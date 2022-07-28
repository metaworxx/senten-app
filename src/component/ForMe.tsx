import { useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
export const ForMe = () => {
  const scrollRef = useRef(null);
  function viewPort() {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return [w, h];
  }
  useEffect(() => {
    const element = scrollRef.current;
    if (element)
      createScrollSnap(
        element,
        {
          snapDestinationY: viewPort()[1] + 40,
        },
        () => console.log("snapped")
      );
  }, [scrollRef]);
  return (
    <div ref={scrollRef} className="for-me">
      <div className="card card-4">
        <div className="overlay"></div>
        <div className="content">
          <h1>Protective Monk Seal Attacks Swimmer Who Got Too Close</h1>
          <p>
            A swimmer at a beach in Waikiki was injured this weekend after
            encountering an endangered Hawaiian monk seal known as Rocky and her
            young pup. The Hawaii Department of Land and Natural Resources said
            in a statement that the victim is a 60-year-old elementary school
            teacher from California. A witness shared video of the encounter
            with the Honolulu Star-Advertiser. The footage shows the mother seal
            in the water with its pup as the swimmer approaches. The seal then
            charges at the swimmer multiple times and pulls her underwater. The
            woman received lacerations to her face, arm, and back and was able
            to make it back to shore with help from bystanders.
          </p>
        </div>
      </div>

      <div className="card card-2">
        {" "}
        <div className="content">
          <h1>How to Write a Summary: 4 Tips for Writing a Good Summary</h1>
          <p>
            With a great summary, you can condense a range of information,
            giving readers an aggregation of the most important parts of what
            they’re about to read (or in some cases, see). A well-written
            summary provides a basic understanding of a piece of literature,
            media, or history. Learn more about how to write an effective
            summary for an established work.
          </p>
          <p>
            A summary is a brief summarization of a larger work that gives the
            reader a comprehensive understanding. To write a summary, a writer
            will gather the main ideas of an article, essay, television show, or
            film they’ve read or watched and condense the central ideas into a
            brief overview. Summaries provide an abridged description of another
            work in the form of a paragraph, providing enough detail so that the
            reader understands the subject of the summary, while highlighting
            the summary writer’s personal understanding of the subject matter.
          </p>
        </div>
      </div>
      <div className="card card-3">
        {" "}
        <div className="overlay"></div>
        <div className="content">
          <h1></h1>
          <p>
            A ham sandwich walks into a bar and orders a beer, bartender says
            “sorry, we don’t serve food here.”
          </p>
        </div>
      </div>
      <div className="card card-1">
        <div className="content">
          <h1>Tory leadership debate</h1>
          <p>
            Tonight's Conservative Party leadership debate between Liz Truss and
            Rishi Sunak was halted after presenter Kate McCann fainted during
            the live broadcast. Ms Truss held her hands to her face and said "oh
            my God" after a loud crash was heard - and then the contest was
            taken off air. TalkTV said Ms McCann is "fine" but that the channel
            had been given medical advice not to continue. "We apologise to our
            viewers and listeners," it added in a statement. As the debate was
            halted a message on TalkTV and The Sun's stream read: "We're sorry
            for the disruption to this programme."
          </p>
          <p>
            He said: "Everyone is OK so that is the good news. Rishi Sunak and
            Liz Truss are still currently in the studio chatting with readers
            and answering those questions." A Sun spokeswoman confirmed the
            incident was paused over a "medical issue", adding: "We hope to be
            back on air soon." But TalkTV later tweeted that Ms McCann, their
            political editor, was not expected back on air.
          </p>
        </div>
      </div>
    </div>
  );
};
