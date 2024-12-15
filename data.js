const articles = [
  {
    docID: 1,
    title: "Helpful iPhone Features",
    content:
      "Your iPhone comes with a powerful markup tool, making it easy to add annotations to documents and photos. This feature, available across several iOS apps, can be accessed in Photos by tapping the edit button and selecting the markup icon. Similarly, the markup tools appear when you take a screenshot, letting you add arrows or scribbles before saving. You can also find markup options in apps like Files, where you can annotate PDFs or add signatures. The tools include pens, an eraser, a ruler, and a selection tool, along with options to change colors, transparency, and line size. Additional tools like stickers, text, and shapes can be accessed via the plus button, enabling you to drop arrows, labels, or emojis onto images and documents. With shapes, you can adjust the fill and outline colors or add text by double-tapping. Snap-to-shapes allows you to turn rough drawings into perfect forms, and the undo button lets you correct mistakes. Once you’re satisfied, tap 'Done' to save your annotations. This feature is perfect for personal or professional tasks, offering flexibility and simplicity in editing photos and documents directly on your iPhone.",
  },
  {
    docID: 2,
    title: "AI in Healthcare",
    content:
      "Researchers from MIT, Equality AI, ands Boston University emphasize the importance of regulating both AI models and traditional algorithms in healthcare. A new commentary published in the NEJM AI highlights the need for oversight to address potential discrimination in patient care decision support tools, including non-automated systems. This follows a final rule under the Affordable Care Act by the U.S. Office for Civil Rights, which prohibits bias in such tools. Developed in response to President Biden's 2023 executive order on safe AI use, the rule reflects the administration's commitment to equity-driven healthcare. Marzyeh Ghassemi, an associate professor at MIT, stated that this step should inspire equitable improvements in both AI and non-AI algorithms, advancing health equity while reducing risks in clinical settings. The rule also builds upon the Biden-Harris administration’s focus on fair, trustworthy AI development in medical contexts.",
  },
  {
    docID: 3,
    title: "Best Videos Games of 2024",
    content: "Last year was particularly strong for the video game industry. Several major releases found critical and commercial success, including Baldur’s Gate 3 and The Legend of Zelda: Tears of the Kingdom, while smaller indie puzzlers like Chants of Sennaar also delighted audiences.This year, the environment has not been nearly as kind. The rising cost of game development has hurt the bottom line for many studios. Thousands lost their jobs as executives attempted to streamline operations. Despite those challenges, there were many new games filled with creative vision and thought-provoking stories.Here, in alphabetical order, are some of the best releases of 2024."
  },
  {
    docID: 4,
    title: "Can Drones Avoid GPS Jammers ?",
    content : "Autonomous drones are usually only as good as its GPS navigation system. Without it, the uncrewed aerial vehicles (UAVs) are essentially dead in the air unless a human can remotely take over piloting duties. This is especially problematic given the rise in drone GPS jamming attacks. Instead of trying to develop increasingly advanced and costly navigation technologies, one research team is turning to one of humanity’s oldest mapping methods: charting the stars."
  },
  {
    docID: 5,
    title: "What is Claude",
    content: "Claude, a creation of the artificial intelligence company Anthropic, is not the best-known A.I. chatbot on the market. (That would be OpenAI’s ChatGPT, which has more than 300 million weekly users and a spot in the bookmark bar of every high school student in America.) It’s also not designed to draw users into relationships with lifelike A.I. companions, the way apps like Character.AI and Replika are."
  },
  {
    docID: 6,
    title: "How to mirror your iPhone on your Mac",
    content: "an iphone screen open on a mac\n" +
        "Your iPhone and your Mac work better together than ever before. Image: Apple\n" +
        "Share\n" +
        "Apple products have always worked well together. Features like the Universal Clipboard—which lets you copy something on one device and paste it on another—have given you more reasons to stick with Apple rather than checking out anything running Windows or Android.\n" +
        "\n" +
        "With the launch of iOS 18 and macOS 15 Sequoia, you’ve got a new trick to try: iPhone mirroring. Essentially, it gets your iPhone screen up on your macOS desktop, so you can interact with your smartphone without having to physically reach for it. You can launch apps, for example, swipe through home screens, and manage notifications."
  },
  {
    docID: 7,
    title: "How to prep your iPhone for unexpected medical emergencies",
    content: "iphone screenshot of medical settings on iphone screen\n" +
        "Make sure your iPhone is ready, should the worst happen. Screenshot: Apple\n" +
        "Share\n" +
        "While we hope you all live long and healthy lives without experiencing a medical emergency, they do happen—and if one happens to you or someone close to you, then you want to be as prepared as possible.\n" +
        "\n" +
        "The iPhone has a few features that can help. You can log key health details on the handset, which will then be available to emergency responders, if required. There are also a couple of tricks worth knowing for making emergency calls.\n" +
        "\n" +
        "This prep doesn’t take long, and should something serious happen to you, you’ll then stand the best chance of getting the help you need. Here’s how to get everything set up so your iPhone is ready for an emergency.\n" +
        "\n" +
        "Setting up your Medical ID\n" +
        "medical id settings on iphone\n" +
        "Make sure your medical details can be accessed in an emergency. Screenshot: Apple\n" +
        "You can find your Medical ID by opening the Health app on your iPhone, then tapping your profile picture (top right) and Medical ID. Right away you can turn on the Show When Locked and Share During Emergency Call toggle switches—this will make your details available to others even when your iPhone is locked, and also give you the opportunity to share them on emergency calls."
  },
  {
    docID: 8,
    title: "The best drones for kids in 2024",
    content: "Best overall: DEERC D20 Mini Drone for Kids\n" +
        "Best splurge: ZVFOTN 4K Drone for Kids\n" +
        "Best value: Holy Stone HS210 Mini Drone\n" +
        "Best rated: Mirason Drone with Camera\n" +
        "Best budget: ACIXXX RC Mini Drone for Kids\n" +
        " How we chose the best drones for kids\n" +
        "When choosing these drones, we considered various factors. As these are devices for children, safety was our No. 1 priority. Next, we looked at ease of use. Will a child—or indeed any other beginner—be able to get up to speed with the quadcopter’s functionality quickly? Other points that we factored in included whether the drone could be used outdoors, indoors, or both, whether it had a camera and, if so, how good it was, and finally, the educational content of the device. Once we gathered this information, we cross-referenced our choices with those from our colleagues in the industry and consumer ratings to be confident we have chosen the best drones for kids."
  },
  {
    docID: 9,
    title: "Hidden Tool in Windows",
    content: "While Windows comes with plenty of apps out of the box, the real fun starts when you start installing third-party software. Think Spotify, Photoshop, Google Chrome, Apple Music, Steam, or whatever packages suit your needs.\n" +
        "\n" +
        "The process of actually installing this software often involves heading to the relevant official hosting page on the web and finding the download link. Since Windows 8 (which launched in 2012), there has also been the option of the Microsoft Store (previously the Windows Store)—offering a similar experience to the app store on your phone.\n" +
        "\n" +
        "There’s a third option too, though it’s less well-known: the Windows Package Manager. It runs in the Windows terminal, the text-based interface in Microsoft’s operating system, and while this makes it a little less user-friendly–at least at first–it’s speedy and lightweight, and great for installing all kinds of programs.\n" +
        "\n" +
        "Getting started with the Windows Package Manager\n" +
        "screenshot of windows powershell\n" +
        "The Windows Package Manager can list everything installed on your system. Screenshot: Microsoft\n" +
        "Open the Windows command line by launching the Start menu, and searching for “powershell.” Right-click the top result and choose Run as administrator. Once you’re into the terminal interface, type “winget” and hit Enter to see a description of what the Windows Package Manager is, and what it can do (there’s also lots of useful information on the Microsoft site)."
  },
  {
    docID: 10,
    title: "Best Movies of 2024",
    content: "Box Office 2024: Top 10 Movies of the Year\n" +
        "Inside Out 2: $652.9 million.\n" +
        "Deadpool & Wolverine: $636.7m.\n" +
        "Despicable Me 4: $361.m.\n" +
        "Wicked: $320.5m.\n" +
        "Moana 2: $300.m.\n" +
        "Beetlejuice Beetlejuice: $294m.\n" +
        "Dune: Part Two: $282.1m.\n" +
        "Twisters: $267.7m."
  },
];

export { articles };
