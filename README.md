# fullstack-template-clojure

A robust full-stack template for Clojure web applications, featuring a Clojure Web API backend and a re-frame (ClojureScript) frontend.

---

## 🚀 Features

* **Frontend:** Built with ClojureScript using **re-frame** for clean state management.
* **Ring Handlers & Coercion:** Configured with Ring and **Muuntaja** for fast HTTP format negotiation (JSON, EDN, Transit).
* **Cassandra Integration:** Ready-to-use NoSQL connection driven by **qbits.alia**.
* **PostgreSQL Integration:** Relational database support powered by the standard Clojure **next.jdbc** (or `clojure.java.jdbc`) driver.

---

## 🛠️ Requirements

* Leiningen or Clojure CLI
* Java Development Kit (JDK) 17+
* Node.js & npm (for frontend dependencies and Shadow-cljs)
