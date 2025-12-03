//🧠 Problem 3: Group Users by Role

//তোমার কাছে একটি user list আছে। প্রত্যেক user-এর name এবং role আছে।
//তোমাকে users-দের role অনুযায়ী আলাদা আলাদা গ্রুপে সাজাতে হবে।

function groupUsersByRole(users) {
    const groupedUsers = {};
    for (const user of users) {
        const role = user.role;
        if (!groupedUsers[role]) {
            groupedUsers[role] = [];
        }
        groupedUsers[role].push(user.name);
    }
    return groupedUsers;
}
const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "user" },
    { name: "Eve", role: "guest" },
];
console.log(groupUsersByRole(users));