pipeline {

    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/*.cy.js", description: "Enter the script path that you want to execute")
        choice(name: "BROWSER", choices: ["chrome", "edge", "electron"],description: "Choice the browser where you want to execute your script")
    }

    options { 
        ansiColor('xterm')
    }


        stages {
            stage("Source Code Management") {
                steps {
                    script {
                        git branch: "master", 
                        credentialsId: "b413be9d-4e2f-4d3b-9bff-0823d21b3292", 
                        url: "git@bitbucket.org:tanproject/tan.git"
                    }
                }
            }
        
        
            stage("Build and Run .NET Core MVC") {
                steps {
                    script {
                        bat "dotnet restore"
                        bat "dotnet build"
                        def runStatus = bat script: "start /b dotnet run", returnStatus: true
                        echo "dotnet run exit code: ${runStatus}"
                        if (runStatus == 0) {
                            echo "dotnet run completed successfully. Skipping Testing stage."
                            currentBuild.result = 'SUCCESS'
                        } else {
                            error "dotnet run failed. Proceeding to Testing stage."
                        }
                    }
                }
            }

            stage("Testing") {
                steps{
                    bat "npm i"
                    bat 'set NO_COLOR=1'
                    bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                }
           }
        }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'HTML_20Report.html', reportName: 'HTML_20Report', reportTitles: 'HTML_20Report', useWrapperFileDirectly: true])
        }
    }
}
