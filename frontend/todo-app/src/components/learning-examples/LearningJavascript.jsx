const person = {
    name: "Amaan",
    college: {
        collegeName: "KIET",
        address: "Ghaziabad"
    },
    profiles: ["linkedin", "leetcode", "instagram"]
}

export default function LearningJavascript() {
    return (
        <div className="LearningJavascript">
            <h1>Learning Javascript</h1>
            <div>{person.name}</div>
        </div>
    );
}