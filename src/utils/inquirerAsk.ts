import inquirer from "inquirer";

async function inquirerAsk(type: string, message: string) {
  const question = [
    {
      type,
      name: "option",
      message
    }
  ]
  const answer = await inquirer.prompt(question)
  return answer;
}

export default inquirerAsk;