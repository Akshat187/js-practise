body {
    display: flex;
    justify - content: center;
    align - items: center;
    height: 100 vh;
    margin: 0;
    font - family: Arial,
    sans - serif;
}

#
building {
    display: flex;
    flex - direction: column - reverse;
    position: relative;
    width: 200 px;
}

.floor {
    position: relative;
    height: 100 px;
    border - top: 1 px solid #333;



    display: flex;



    justify-content: flex-end;



    align-items: center;



    padding: 10px;



}







.call-button {



    padding: 5px 10px;



    cursor: pointer;



}







# lifts {
            position: absolute;
            left: 50 % ;
            transform: translateX(-50 % );
            top: 0;
            display: flex;
            flex - direction: column;
            justify - content: space - between;
            height: 100 % ;
        }

        .lift {
            width: 50 px;
            height: 50 px;
            background - color: #333;



    margin: 0 10px;



    transition: transform 1s ease;



}
