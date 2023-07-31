export default class PasswordGenerator {

    static async create() {

        console.log("Creating Password")

        let generatedPassword = ""

        // Get 3 Random Dictionairy Words
        const response = await fetch("https://random-word-api.vercel.app/api?words=3&length=9");
        const jsonData = await response.json();
        jsonData.forEach(element => {
            const capitalized =
                element.charAt(0).toUpperCase()
                + element.slice(1)
            generatedPassword += capitalized
        });

        // Get 3 Random Digits
        let i = 0;
        while (i < 3) {
            generatedPassword += Math.floor(Math.random() * 10)
            i++;
        }

        // Get 1 Random Symbol
        const characters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
        const charactersLength = characters.length;
        generatedPassword += characters.charAt(Math.floor(Math.random() * charactersLength));

        // Put them all together and return
        console.log("Generating Password")
        console.log(generatedPassword)
        return generatedPassword

    }

}