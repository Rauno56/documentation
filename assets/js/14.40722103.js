(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{226:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[e._v("#")]),e._v(" Keys")]),e._v(" "),s("p",[e._v("To communicate with MeiliSearch's "),s("code",[e._v("RESTfull API")]),e._v(" most of the routes require an "),s("code",[e._v("API key")]),e._v(".")]),e._v(" "),s("p",[e._v("The following information defines a key:")]),e._v(" "),s("ul",[s("li",[e._v("A "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#key"}},[e._v("Key")])],1),e._v(" generated by MeiliSearch")]),e._v(" "),s("li",[e._v("A "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#description"}},[e._v("Description")])],1)]),e._v(" "),s("li",[e._v("An "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#acl"}},[e._v("ACL:")])],1),e._v(" list of permissions")]),e._v(" "),s("li",[e._v("An "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#indexes"}},[e._v("Indexes list")])],1),e._v("  with wildcard on which the ACL's are applied")]),e._v(" "),s("li",[e._v("A "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#revoked"}},[e._v("Revoked")])],1),e._v(" updatable boolean to revoke a key "),s("Badge",{attrs:{text:"soon",type:"warn"}})],1),e._v(" "),s("li",[e._v("An "),s("strong",[s("router-link",{attrs:{to:"/advanced_guides/keys.html#expires-at"}},[e._v("Expires_at")])],1),e._v(" timestamp that indicated the expire date of the token")])]),e._v(" "),s("p",[e._v("A key is passed to MeiliSearch using the header\n"),s("code",[e._v("X-Meili-Api-Key: myApiKey")])]),e._v(" "),s("h2",{attrs:{id:"master-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-key"}},[e._v("#")]),e._v(" Master key")]),e._v(" "),s("p",[e._v("This is the only key that is not created by the API but is "),s("strong",[e._v("set as environement variable or as a binary flag")]),e._v(" when "),s("a",{attrs:{href:"/advanced_guides/binary"}},[e._v("launching the MeiliSearch binary")]),e._v(".")]),e._v(" "),s("p",[e._v("This key gives access to every route of the API.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("When no master key is set on binary launch, no API key is needed on any route.\n"),s("strong",[e._v("Giving full access to the API")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# with the flag")]),e._v("\n./meilisearch --api-key myMasterKey\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# with the environement variable")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("MEILI_API_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myMasterKey ./meilisearch\n")])])]),s("p",[e._v("This header "),s("code",[e._v("X-Meili-Api-Key: myMasterKey")]),e._v(" gives access to the whole API.")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./meilisearch\n")])])]),s("p",[e._v("The header "),s("code",[e._v("X-Meili-Api-Key")]),e._v(" is "),s("strong",[e._v("not required")]),e._v(" on any API requests. Creating "),s("strong",[e._v("an important security breach")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"creating-a-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-key"}},[e._v("#")]),e._v(" Creating a key")]),e._v(" "),s("p",[e._v("Depending on the environment from which you use the MeiliSearch API, you only use a certain action set. It is possible to "),s("router-link",{attrs:{to:"/references/keys.html#create-key"}},[e._v("create an API key")]),e._v(" that only gives access to this set of actions.")],1),e._v(" "),s("p",[e._v("You can create as many keys as you want.")]),e._v(" "),s("h2",{attrs:{id:"key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" Key")]),e._v(" "),s("p",[s("strong",[e._v("MeiliSearch generates the key")]),e._v(".")]),e._v(" "),s("p",[e._v("The key is returned on "),s("router-link",{attrs:{to:"/references/keys.html#create-key"}},[e._v("key creation")]),e._v(". This key is your "),s("code",[e._v("API KEY")]),e._v(".")],1),e._v(" "),s("p",[e._v("In the header, the API key is set in the "),s("code",[e._v("X-Meili-Api-Key")]),e._v(" attribute.")]),e._v(" "),s("p",[e._v("This way:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://localhost:7700/indexes'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("' X-Meili-Api-Key: myApiKey'")]),e._v("\n")])])]),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("The description expects a summary on the "),s("code",[e._v("API KEY")]),e._v(" and the ACL it contains.")]),e._v(" "),s("p",[e._v("It should help you track your keys.")]),e._v(" "),s("h2",{attrs:{id:"acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[e._v("#")]),e._v(" ACL")]),e._v(" "),s("p",[s("code",[e._v("ACL")]),e._v(" or Access-Control List is the list of permissions an "),s("code",[e._v("API KEY")]),e._v(" can have.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("IndexesRead")]),e._v(": read access on "),s("router-link",{attrs:{to:"/references/indexes.html"}},[e._v("indexes")])],1),e._v(" "),s("li",[s("code",[e._v("IndexesWrite")]),e._v(": write access on "),s("router-link",{attrs:{to:"/references/indexes.html"}},[e._v("indexes")])],1),e._v(" "),s("li",[s("code",[e._v("DocumentsRead")]),e._v(": read access on "),s("router-link",{attrs:{to:"/references/documents.html"}},[e._v("documents")])],1),e._v(" "),s("li",[s("code",[e._v("DocumentsWrite")]),e._v(": write access on "),s("router-link",{attrs:{to:"/references/documents.html"}},[e._v("documents")])],1),e._v(" "),s("li",[s("code",[e._v("SettingsRead")]),e._v(": read access on "),s("router-link",{attrs:{to:"/references/settings.html"}},[e._v("settings")])],1),e._v(" "),s("li",[s("code",[e._v("SettingsWrite")]),e._v(": write access on "),s("router-link",{attrs:{to:"/references/settings.html"}},[e._v("settings")])],1),e._v(" "),s("li",[s("code",[e._v("Admin")]),e._v(": full permission on "),s("router-link",{attrs:{to:"/references/keys.html"}},[e._v("keys")]),e._v(" and "),s("router-link",{attrs:{to:"/references/stats.html"}},[e._v("stats")])],1),e._v(" "),s("li",[s("code",[e._v("All")]),e._v(": all of the above")])]),e._v(" "),s("p",[s("strong",[e._v("Read")]),e._v(" gives access to all "),s("code",[e._v("GET")]),e._v(" methods of the given route.")]),e._v(" "),s("p",[s("strong",[e._v("Write")]),e._v(" gives access to all "),s("code",[e._v("POST")]),e._v(", "),s("code",[e._v("PUT")]),e._v(", "),s("code",[e._v("PATCH")]),e._v(", "),s("code",[e._v("DELETE")]),e._v(" methods of the given route.")]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("p",[e._v("If you use the API on "),s("strong",[e._v("the browser side to only make search queries")]),e._v(", you do not need this same API key to be able to do anything else.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://localhost:7700/keys'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{\n      "expiresAt": 1574332928,\n      "description": "search key",\n      "acl": ["documentsRead"],\n      "indexes": ["movies"]\n  }\'')]),e._v("\n")])])]),s("p",[e._v("This will return an "),s("code",[e._v("API key")]),e._v(" that you can safely use on your browser side.")]),e._v(" "),s("h2",{attrs:{id:"indexes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[e._v("#")]),e._v(" Indexes")]),e._v(" "),s("p",[s("code",[e._v("Indexes")]),e._v(" attribute contains a list of indexes to which the key is applied.")]),e._v(" "),s("p",[e._v("Wildcards are also acceptable inputs. Wildcards work as follows")]),e._v(" "),s("ul",[s("li",[s("code",[e._v('"name_of_index"')]),e._v(" exact name of index")]),e._v(" "),s("li",[s("code",[e._v('"*suffix"')]),e._v(" every index with this suffix")]),e._v(" "),s("li",[s("code",[e._v('"prefix*"')]),e._v("every index with this prefix")]),e._v(" "),s("li",[s("code",[e._v('"*"')]),e._v(" all indexes.")])]),e._v(" "),s("h4",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("p",[e._v("Given a set of indexes: "),s("code",[e._v("english_movies")]),e._v(", "),s("code",[e._v("chinese_movies")]),e._v(", "),s("code",[e._v("french_books")])]),e._v(" "),s("p",[e._v("The indexes list: "),s("code",[e._v('["*_movies"]')]),e._v(" will "),s("strong",[e._v("give access")]),e._v(" to "),s("code",[e._v("english_movies")]),e._v(" and "),s("code",[e._v("chinese_movies")]),e._v(" but not "),s("code",[e._v("french_books")]),e._v(".")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Given a set of indexes: "),s("code",[e._v("english_movies")]),e._v(", "),s("code",[e._v("chinese_movies")]),e._v(", "),s("code",[e._v("english_books")]),e._v(", "),s("code",[e._v("french_books")])]),e._v(" "),s("p",[e._v("The indexes list: "),s("code",[e._v('["english_*"]')]),e._v(" will "),s("strong",[e._v("give access")]),e._v(" to "),s("code",[e._v("english_movies")]),e._v(" and "),s("code",[e._v("english_books")]),e._v(" but not "),s("code",[e._v("french_books")]),e._v(" and "),s("code",[e._v("chinese_movies")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"revoked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#revoked"}},[e._v("#")]),e._v(" Revoked")]),e._v(" "),s("p",[e._v("Boolean set to "),s("code",[e._v("false")]),e._v(" on "),s("router-link",{attrs:{to:"/references/keys.html#create-key"}},[e._v("key creation")]),e._v(". It is updatable on "),s("router-link",{attrs:{to:"/references/keys.html#update-key"}},[e._v("key update")]),e._v(".")],1),e._v(" "),s("p",[e._v("Once it is set to "),s("code",[e._v("true")]),e._v(" the "),s("code",[e._v("API key")]),e._v(" "),s("strong",[e._v("loses all his accesses")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The revoked status can be toggled back at any time "),s("router-link",{attrs:{to:"/advanced_guides/keys.html#acl"}},[e._v("by an admin")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"expires-at"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires-at"}},[e._v("#")]),e._v(" Expires at")]),e._v(" "),s("p",[e._v("This attribute takes a "),s("code",[e._v("timestamp")]),e._v(" as input. This timestamp is the expire date after which the "),s("code",[e._v("API KEY")]),e._v(" will lose all his accesses.")])])}),[],!1,null,null,null);t.default=r.exports}}]);