//generates random number from 0 to array.legnth - 1
function randomNumberGenerator(num) {
   return Math.floor(Math.random() * num);
};

const signArray = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const forecast = [
    "Today you might receive a phone call from a friend you haven't seen for a while. An intense and emotional conversation could follow.",
    "You generally enjoy philosophy, metaphysics, and other forms of higher thought. But today you could find yourself almost obsessive about them.",
    "Discussions involving a group you're affiliated with could lead to some deep subjects, such as philosophy, metaphysics, science - or all three.",
    "Today you might decide to do some repairs or decorating in your home. You'll have a lot of good ideas welling up from deep within you.",
    "Communicating with a current or potential romantic partner could involve a lot of subtlety, finding a way to enjoy each other's company while not divulging too much.",
    "An increased psychological awareness and heightened intuition could have you tuning in to the thoughts and feelings of family members before they even know what they want.",
    "The focus today is on families, with special emphasis on children. You might spend time telling stories today.",
    "Others, particularly family members, might be rather quiet today. It could seem as if everyone is running around like crazy but not sharing what's on their minds.",
    "Communication, particularly with family members and romantic partners, could take place more subtly than verbally today.",
    "Today you should be feeling especially intuitive, particularly where family members are concerned. It certainly won't be easy for anyone to lie to you.",
    "A group you're affiliated with could meet or have a virtual/group chat today. You should focus more on listening to what they have to say than on actively participating in discussions.",
    "Your communications could bring up the subject of the world economy and what it's going to mean to individuals today. You could be contemplating and maybe even discussing your financial future."
];

//Store the message in a string
let message = "";

function messageCompiler(arr1, arr2, arr3) {
    // Generate random indices
    const dayIndex = randomNumberGenerator(arr1.length);
    const signIndex = randomNumberGenerator(arr2.length);
    const forecastIndex = randomNumberGenerator(arr3.length);

    // Compile the message using the stored indices
    message = `It's ${arr1[dayIndex]} and your, ${arr2[signIndex]}, horoscope for today is: "${arr3[forecastIndex]}"`;

    console.log(message);
}

messageCompiler(weekDay, signArray, forecast);