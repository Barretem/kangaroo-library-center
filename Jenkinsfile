pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:6-alpine'
    }

  }
  stages {
    stage('build') {
      agent {
        docker {
          image 'node:6-alpine'
          args '-p 3000:3000'
        }

      }
      steps {
        sh 'npm install'
      }
    }

  }
}