// This shows a simple example of how to archive the build output artifacts.
pipeline {
    agent any
    stages {
        stage ('Starting the webpage') {
            steps {
                sh "node /src/routes/callpy.js"
                sh "cat /src/routes/Versiones.json"
                sh "npm run dev"        

            }
        }

    }
}