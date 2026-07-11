# Backend Roadmap

```text
                            BACKEND ROADMAP

┌───────────────────────────────────────────────────────────────────────────────┐
│                               CLIENT (Browser/App)                           │
└───────────────────────────────┬───────────────────────────────────────────────┘
                                │
                                ▼
                        HTTP REQUEST
                     (GET / POST / PUT / DELETE)
                                │
                                ▼
                     ┌────────────────────┐
                     │   Web Server       │
                     │ (Express / Nginx)  │
                     └─────────┬──────────┘
                               │
                               ▼
                     ┌────────────────────┐
                     │    Middleware      │
                     └─────────┬──────────┘
                               │
         ┌─────────────────────┼─────────────────────────┐
         │                     │                         │
         ▼                     ▼                         ▼
 Logging Middleware     Rate Limiter            CORS Middleware
         │                     │                         │
         └─────────────────────┴─────────────────────────┘
                               │
                               ▼
                       Authentication
                     (Who are you?)
                               │
                    Verify JWT / Session
                               │
                   ┌───────────┴────────────┐
                   │                        │
                 Invalid                 Valid
                   │                        │
           401 Unauthorized                ▼
                              Authorization
                           (Can you do this?)
                               │
                   Role / Permission Check
                               │
                  ┌────────────┴────────────┐
                  │                         │
              Forbidden                 Allowed
              403 Error                    ▼
                           Input Validation
                     (Is incoming data correct?)
                               │
                  Email? Password? Types?
                               │
                   ┌───────────┴───────────┐
                   │                       │
                 Invalid                Valid
                   │                       │
            400 Bad Request               ▼
                    Business Logic (Controller)
                               │
       Login | Register | Order | Payment | Booking
                               │
                               ▼
                         Service Layer
                 (Actual application logic)
                               │
       ┌───────────────────────┼───────────────────────┐
       │                       │                       │
       ▼                       ▼                       ▼
 Hash Password           Generate JWT          Calculate Price
       │
       ▼
                 Repository / Database Layer
                               │
         SQL / MongoDB / Redis / External APIs
                               │
                               ▼
                           Database
                               │
                               ▼
                        Return Result
                               │
                               ▼
                    Format JSON Response
                               │
                               ▼
                         HTTP RESPONSE
```

---

# Request Flow Summary

1. **Client** (Browser / Mobile App) sends an HTTP request.
2. **Web Server** (Express, Nginx) receives the request.
3. Request passes through **Middleware**:
   - Logging
   - Rate Limiting
   - CORS

4. **Authentication**
   - Verify JWT or Session
   - If invalid → **401 Unauthorized**

5. **Authorization**
   - Check Roles & Permissions
   - If not allowed → **403 Forbidden**

6. **Input Validation**
   - Validate request body, query, params
   - If invalid → **400 Bad Request**

7. **Controller**
   - Handles the incoming request
   - Calls the appropriate service

8. **Service Layer**
   - Contains business logic
   - Examples:
     - Hash Password
     - Generate JWT
     - Calculate Price

9. **Repository / Database Layer**
   - Communicates with:
     - SQL
     - MongoDB
     - Redis
     - External APIs

10. **Database** processes the query.
11. Result returns back through the layers.
12. Backend formats a JSON response.
13. Server sends the **HTTP Response** back to the client.
