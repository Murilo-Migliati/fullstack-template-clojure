(ns db.cassandra.cassandra
  (:require [qbits.alia :as alia]))

(defonce session (atom nil))
(defonce cluster (atom nil))

(defn connect! []
  (reset! cluster (alia/cluster {:contact-points ["cassandra"]
                                 :port 9042}))
  (reset! session (alia/connect @cluster))
  (println "Cassandra conectado com sucesso!"))

(defn start! []
  (loop [attempt 1]
    (if (> attempt 10)
      (println "Cassandra indisponível após 10 tentativas.")
      (let [result (try
                     (connect!)
                     :ok
                     (catch Exception e
                       (println (str "Tentativa " attempt "/10 falhou: " (.getMessage e)))
                       :error))]
        (when (= result :error)
          (Thread/sleep 5000)
          (recur (inc attempt)))))))

(defn stop! []
  (when @session (alia/shutdown @session))
  (when @cluster (alia/shutdown @cluster))
  (println "Cassandra desconectado."))

(defn execute!
  ([query]
   (execute! query {}))
  ([query params]
   (if-let [s @session]
     (alia/execute s query {:values params})
     (do
       (println "Erro: sem conexão com o Cassandra.")
       nil))))

(defn execute-async!
  ([query]
   (execute-async! query {}))
  ([query params]
   (if-let [s @session]
     (alia/execute-async s query {:values params})
     (println "Erro: sem conexão com o Cassandra."))))

(defn prepare!
  [query]
  (when-let [s @session]
    (alia/prepare s query)))