import schema from "./schema";



export const validation = (newInfo) => {
    const required = schema.question.required;
    const title    = schema.question.title;

    console.log(title);

    const nullData = required.filter(it => { return (newInfo[it] === null || newInfo[it] === "")});

    return  nullData.map(it=> title[it]);;

}

