sequenceDiagram
    participant browser
    participant server

    browser->>server: POST /new_note_spa (JSON)
    Note right of browser: Request URL: https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br/>Header: Content-Type: application/json<br/>Payload: {"content":"I will try again","date":"2025-10-30T17:14:05.671Z"}

    activate server
    Note left of server: Server processes JSON because Content-Type is application/json
    server-->>browser: 201 Created
    Note left of server: Response body: {"message":"note created"}
    Note left of server: Also some magic happens, that updates html without requests to the server 
    deactivate server
