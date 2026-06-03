(defproject minha-api "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [metosin/reitit "0.5.18"]
                 [metosin/reitit-malli "0.5.18"]
                 [metosin/muuntaja "0.6.8"]
                 [ring/ring-jetty-adapter "1.9.5"]
                 [ring/ring-mock "0.4.0"]
                 [com.github.seancorfield/next.jdbc "1.3.883"]
                 [migratus "1.5.3"]
                 [cc.qbits/alia "4.3.3"] 
                 [org.postgresql/postgresql "42.6.0"]
                 [pjstadig/humane-test-output "0.11.0"]]

  :injections [(require 'pjstadig.humane-test-output)
               (pjstadig.humane-test-output/activate!)]

  :jvm-opts ["-Dleiningen.test-color=true"
             "-Dclojure.test.color=true"
             "-Dterminal.ansi=true"
             "-Dfile.encoding=UTF-8"
             "-Dsun.stdout.encoding=UTF-8"
             "-Dsun.stderr.encoding=UTF-8"]

  :main ^:skip-aot main
  :test-paths ["test"]
  :profiles {:uberjar {:aot :all}})