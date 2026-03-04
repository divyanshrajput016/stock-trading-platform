import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="w-225 flex flex-col items-center">
        <h1 className="font-semibold text-2xl mb-12"> People </h1>

        <div className="flex gap-10">
          <div className="w-1/2 flex flex-col gap-2 items-center justify-center">
            <img
              src="images/WhatsApp Image 2025-11-06 at 09.36.46_0c640a96.jpg"
              alt=""
              className="h-64 w-64 rounded-full"
            />
            <p>Divyansh Rajput</p>
            <p>Developer</p>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <p>
              Divyansh is building his career in technology with a strong focus
              on full-stack web development and Data Structures & Algorithms. As
              a college student preparing for 2026 placements, he consistently
              practices on LeetCode and has completed arrays, linked lists,
              stacks, queues, hashing, recursion, and strings. His next goal is
              mastering trees and graphs while completing a 100-day DSA
              challenge.
            </p>
            <p>
              He has learned HTML, CSS, JavaScript, React, Node.js, Express,
              MySQL, and MongoDB, and is focused on building real-world projects
              to strengthen his practical skills. Alongside technical growth, he
              is improving his communication and interview skills. Coding is his
              path — consistency is his strategy.
            </p>
            <p>Playing RPG Console Games is his zen.</p>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
