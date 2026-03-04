import { create } from "zustand";

export const useStudyStore = create((set) => ({
  activeChannel: "react-mastery",

  messages: [
    {
      id: 1,
      user: "Sarah_Dev",
      text: "Has anyone figured out the performance bottleneck in the latest Next.js 15 lab?",
      time: "2:45 PM",
      isSystem: false,
      reactions: { "👍": 4, "🔥": 2 },
      myReactions: ["👍"],
    },
    {
      id: 2,
      user: "Marcus_Architect",
      text: "Check your middleware. Custom headers can add significant latency if not cached.",
      time: "2:47 PM",
      isSystem: false,
      reactions: { "❤️": 3 },
      myReactions: [],
    },
    {
      id: 3,
      user: "Lumina_Bot",
      text: "New resource uploaded: 'Advanced Caching Patterns.pdf'",
      time: "3:01 PM",
      isSystem: true,
      reactions: {},
      myReactions: [],
    },
  ],

  setActiveChannel: (channel) => set({ activeChannel: channel }),

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, { ...msg, reactions: {}, myReactions: [] }],
    })),

  toggleReaction: (messageId, emoji) =>
    set((state) => ({
      messages: state.messages.map((msg) => {
        if (msg.id !== messageId) return msg;

        const reactions = { ...msg.reactions };
        let myReactions = [...(msg.myReactions || [])];

        if (myReactions.includes(emoji)) {
          // remove reaction
          myReactions = myReactions.filter((e) => e !== emoji);
          reactions[emoji] = (reactions[emoji] || 1) - 1;
          if (reactions[emoji] <= 0) delete reactions[emoji];
        } else {
          // add reaction
          myReactions.push(emoji);
          reactions[emoji] = (reactions[emoji] || 0) + 1;
        }

        return { ...msg, reactions, myReactions };
      }),
    })),
}));
