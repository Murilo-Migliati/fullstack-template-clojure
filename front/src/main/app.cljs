(ns main.app
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]))

(defn app []
  [:div "BOOA"])

(defn ^:dev/after-load reload! []        ; ← essa anotação é importante
  (rdom/render [app] (.getElementById js/document "app")))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [app] (.getElementById js/document "app")))