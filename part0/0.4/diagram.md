sequenceDiagram
autonumber
participant B as Browser
participant S as Server

    B->>S: POST /exampleapp/new_note
    Note right of B: payload: content=...
    activate S
    S-->>B: 302 Found<br/>Location: /exampleapp/notes
    Note left of S: Post-Redirect-Get (PRG)
    deactivate S

    B->>S: GET /exampleapp/notes
    Note right of B: then we have a diagram from our lesson, don't think i need to write it out
    activate S
    