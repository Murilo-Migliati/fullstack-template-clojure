(ns db.pg.pg
  (:require [next.jdbc :as jdbc]
            [next.jdbc.result-set :as rs]
            [migratus.core :as migratus]))

(defonce ds (atom nil))

(def config
  {:store :database
   :migration-dir "src/db/pg/migracoes"
   :db {:jdbcUrl (System/getenv "DATABASE_URL")}})

(defn migrate! []
  (migratus/migrate config))

(defn rollback! []
  (migratus/rollback config))

(defn start! []
  (let [db-url (System/getenv "DATABASE_URL")]
    (if db-url
      (do
        (reset! ds (jdbc/get-datasource db-url))
        (println "Postgres conectado com sucesso via Docker Network!"))
      (println "DATABASE_URL não encontrada. O banco não foi iniciado."))))

(defn execute!
  [sql-vec]
  (if-let [datasource @ds]
    (jdbc/execute! datasource sql-vec {:builder-fn rs/as-unqualified-kebab-maps})
    (do
      (println "Erro: Tentativa de query sem conexão com o banco.")
      nil)))