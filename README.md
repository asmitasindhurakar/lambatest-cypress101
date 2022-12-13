# Cypress 101 Lamdatest Certification

# Run Locally

## Open Cypress Development Interface

npx cypress open

## Run cypress using CLI

To run the test inside the Integration folder you can run following command from the terminal.

- npx cypress run

# Run in Lamdatest Cloud

lambdatest-cypress run

Note:- Before running the test spec in lamdatest we first need to setup/configure our lamdatest-config.json with all the dependencies and other requirements.

# Run in Gitpod

Currently the .gitpod.yml file is configured to run in the lambdatest cloud. If you want to run in gitpod then configure the .gitpod.yml file.

tasks:

- before: npm install -g lambdatest-cypress-cli
- init: echo "lambda cypress cli added"
- command: lambdatest-cypress run
