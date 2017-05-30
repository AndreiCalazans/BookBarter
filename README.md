    BookBarter , A book trading club.

    git clone or fork and npm install then run npm start .

        to run dev use npm dev
        for production npm build

    This app uses

    Node , Express , MongoDB , React and Redux




   *API ROUTES
    For Users:
        /signup   
            need to send = email , name , password , address ,city , state and country
        /signin 
            needs to send = email and password
        /signout
            needs to send token
        /update 
            must send authorization header with token and fields to update( name , city and etc , !except password and email 


    For Handling The Books: (all must have authorization header with token)
        /add
            needs to send = name , img_url , rating 
        /deleteBook 
            needs to send = id of book
        /requestTrade 
            needs to send = object of book  
        /acceptTrade 
            needs to send = id of book involved in trade.
        /getBooksOnTrade 
            returns all books currently on trade in json.
        /deleteTrade 
            needs to send = id of book involved in trade.

    