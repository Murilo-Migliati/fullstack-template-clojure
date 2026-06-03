(ns main
  (:require [ring.adapter.jetty :as jetty]
            [reitit.ring :as ring]
            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :as muuntaja-mw]
            [db.pg.pg :as pg]
            [db.cassandra.cassandra :as cassandra])
  (:gen-class))

(def app
  (ring/ring-handler
   (ring/router
    ["/api"
     ["/ping" (fn [_] {:status 200 :body {:message "pong"}})]]

    {:data {:muuntaja m/instance
            :middleware [muuntaja-mw/format-middleware]}})
   (ring/create-default-handler)))

(defn -main [& args]
  (let [port (if (first args) (Integer/parseInt (first args)) 3000)]
    (pg/start!)
    (pg/migrate!)
    (cassandra/start!)
    (println (str "Servidor rodando na porta: " port))
    (jetty/run-jetty app {:port port :join? false})))