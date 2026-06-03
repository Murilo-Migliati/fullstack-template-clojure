(ns main-test
  (:require [clojure.test :as t :refer [deftest is testing]]
            [clojure.data :refer [diff]] ;; Nativo do Clojure
            [main :refer [app]]
            [ring.mock.request :as mock]
            [pjstadig.humane-test-output :as humane]))

(defmethod t/report :fail [m]
  (t/with-test-out
    (println "\n\u001b[31mFAIL in" (t/testing-vars-str m) "\u001b[0m")
    (when (seq t/*testing-contexts*) (println (t/testing-contexts-str)))
    (println "\u001b[32m[+] Esperado:\u001b[0m" (:expected m))
    (println "\u001b[31m[-] Atual:   \u001b[0m" (:actual m))
    (let [[only-exp only-act] (clojure.data/diff (:expected m) (:actual m))]
      (when (or only-exp only-act)
        (println "\n\u001b[33mDiff Detalhado:\u001b[0m")
        (println " Faltando no esperado:" only-exp)
        (println " Extra no atual:   " only-act)))))

(deftest api-ping-test
  (testing "[Ok!] Rota de ping -> retorna pong"
    (let [response (app (mock/request :get "/api/ping"))
          body-string (slurp (:body response))]
      (is (= 200 (:status response)))
      (is (= "{\"meswsage\":\"pong\"}" body-string)))))