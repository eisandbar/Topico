# Topico
Chat application

In this app I implement a React frontend with a JS backend to create a multiroom chat application.
This git should be a solo project, but I'll use it to track how much work I do each day for motivation.

General Idea:
  - Front:
    - Welcome/ login page -> (register, user)
    - Register page -> (login)
    - Chat -> (login)
    
  - Back:
    - express/sockets for chat
    - passport for auth
    - sql or mongo DB
    
Next Steps:
  - Session store (redis/mongo/SQL)
  - Styling
  - Comments for new code
  - New functionalities:
    - Create rooms/ join rooms (Public room page?)
    - Room invites? Notifications? 
  - Images
  - Deploying to a VPS

Progress:
  - Pages for register and login
  - Pages for rooms and chat
  - Socket connection to server
  - Fetching rooms from server
  - Posting formInputs to server
  - Auth on client (context, redirects, login functions)
  - Commented all code above ^
  - Proper SQL functions, move to new D
  - Proper route handling
  - Auth on server: 
    - sessions
    - encryption
    - passport
