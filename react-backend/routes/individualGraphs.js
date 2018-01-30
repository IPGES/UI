var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

	res.json([{
		chart : {
			caption: "IPGES Power Flow",
			numberSuffix: "W",
			"yaxisname": "Power",
			"xaxisname": "Time",
			"yaxisminValue": "0",
			"yaxismaxValue": "1500",
			"forceAxisLimits" : "1",
			"pixelsPerPoint": "1",
			"pixelsPerLabel": "24",
			"lineThickness": "1",

			"compactdatamode" : "1",
			"dataseparator" : "|",

			"showBorder" : "1",
			"borderThickness" : "3",
			"borderColor" : "#cc5500",
			"borderAlpha" : "100",

			"showCanvasBorder" : "1",
			"canvasBorderThickness" : "3",
			"canvasBorderColor" : "#cc5500",
			"canvasBorderAlpha" : "100",

			"color" : "#100",

		},
		categories : [{
			category:  "Jan 01|Jan 02|Jan 03|Jan 04|Jan 05|Jan 06|Jan 07|Jan 08|Jan 09|Jan 10|Jan 11|Jan 12|Jan 13|Jan 14|Jan 15|Jan 16|Jan 17|Jan 18|Jan 19|Jan 20|Jan 21|Jan 22|Jan 23|Jan 24|Jan 25|Jan 26|Jan 27|Jan 28|Jan 29|Jan 30|Jan 31|Feb 01|Feb 02|Feb 03|Feb 04|Feb 05|Feb 06|Feb 07|Feb 08|Feb 09|Feb 10|Feb 11|Feb 12|Feb 13|Feb 14|Feb 15|Feb 16|Feb 17|Feb 18|Feb 19|Feb 20|Feb 21|Feb 22|Feb 23|Feb 24|Feb 25|Feb 26|Feb 27|Feb 28|Mar 01|Mar 02|Mar 03|Mar 04|Mar 05|Mar 06|Mar 07|Mar 08|Mar 09|Mar 10|Mar 11|Mar 12|Mar 13|Mar 14|Mar 15|Mar 16|Mar 17|Mar 18|Mar 19|Mar 20|Mar 21|Mar 22|Mar 23|Mar 24|Mar 25|Mar 26|Mar 27|Mar 28|Mar 29|Mar 30|Mar 31|Apr 01|Apr 02|Apr 03|Apr 04|Apr 05|Apr 06|Apr 07|Apr 08|Apr 09|Apr 10|Apr 11|Apr 12|Apr 13|Apr 14|Apr 15|Apr 16|Apr 17|Apr 18|Apr 19|Apr 20|Apr 21|Apr 22|Apr 23|Apr 24|Apr 25|Apr 26|Apr 27|Apr 28|Apr 29|Apr 30|May 01|May 02|May 03|May 04|May 05|May 06|May 07|May 08|May 09|May 10|May 11|May 12|May 13|May 14|May 15|May 16|May 17|May 18|May 19|May 20|May 21|May 22|May 23|May 24|May 25|May 26|May 27|May 28|May 29|May 30|May 31|Jun 01|Jun 02|Jun 03|Jun 04|Jun 05|Jun 06|Jun 07|Jun 08|Jun 09|Jun 10|Jun 11|Jun 12|Jun 13|Jun 14|Jun 15|Jun 16|Jun 17|Jun 18|Jun 19|Jun 20|Jun 21|Jun 22|Jun 23|Jun 24|Jun 25|Jun 26|Jun 27|Jun 28|Jun 29|Jun 30|Jul 01|Jul 02|Jul 03|Jul 04|Jul 05|Jul 06|Jul 07|Jul 08|Jul 09|Jul 10|Jul 11|Jul 12|Jul 13|Jul 14|Jul 15|Jul 16|Jul 17|Jul 18|Jul 19|Jul 20|Jul 21|Jul 22|Jul 23|Jul 24|Jul 25|Jul 26|Jul 27|Jul 28|Jul 29|Jul 30|Jul 31|Aug 01|Aug 02|Aug 03|Aug 04|Aug 05|Aug 06|Aug 07|Aug 08|Aug 09|Aug 10|Aug 11|Aug 12|Aug 13|Aug 14|Aug 15|Aug 16|Aug 17|Aug 18|Aug 19|Aug 20|Aug 21|Aug 22|Aug 23|Aug 24|Aug 25|Aug 26|Aug 27|Aug 28|Aug 29|Aug 30|Aug 31|Sep 01|Sep 02|Sep 03|Sep 04|Sep 05|Sep 06|Sep 07|Sep 08|Sep 09|Sep 10|Sep 11|Sep 12|Sep 13|Sep 14|Sep 15|Sep 16|Sep 17|Sep 18|Sep 19|Sep 20|Sep 21|Sep 22|Sep 23|Sep 24|Sep 25|Sep 26|Sep 27|Sep 28|Sep 29|Sep 30|Oct 01|Oct 02|Oct 03|Oct 04|Oct 05|Oct 06|Oct 07|Oct 08|Oct 09|Oct 10|Oct 11|Oct 12|Oct 13|Oct 14|Oct 15|Oct 16|Oct 17|Oct 18|Oct 19|Oct 20|Oct 21|Oct 22|Oct 23|Oct 24|Oct 25|Oct 26|Oct 27|Oct 28|Oct 29|Oct 30|Oct 31|Nov 01|Nov 02|Nov 03|Nov 04|Nov 05|Nov 06|Nov 07|Nov 08|Nov 09|Nov 10|Nov 11|Nov 12|Nov 13|Nov 14|Nov 15|Nov 16|Nov 17|Nov 18|Nov 19|Nov 20|Nov 21|Nov 22|Nov 23|Nov 24|Nov 25|Nov 26|Nov 27|Nov 28|Nov 29|Nov 30|Dec 01|Dec 02|Dec 03|Dec 04|Dec 05|Dec 06|Dec 07|Dec 08|Dec 09|Dec 10|Dec 11|Dec 12|Dec 13|Dec 14|Dec 15|Dec 16|Dec 17|Dec 18|Dec 19|Dec 20|Dec 21|Dec 22|Dec 23|Dec 24|Dec 25|Dec 26|Dec 27|Dec 28|Dec 29|Dec 30|Dec 31"
		}],
		dataset : [
			{
				seriesname : "PV",
				data: "978|976|955|981|992|964|973|949|985|962|977|955|988|959|985|965|991|985|966|989|960|944|976|980|940|941|945|952|973|946|951|983|942|964|937|942|963|971|969|967|934|935|956|974|930|936|935|973|979|990|994|992|994|984|991|986|963|985|1006|965|958|976|993|974|995|989|966|965|1011|995|1007|978|985|1012|997|985|1004|987|986|981|991|982|992|983|1018|994|976|989|1022|989|1002|983|1015|1006|1005|1003|1017|1014|995|1007|1001|1019|1012|1005|1027|1011|1013|1035|1010|1011|1011|1036|1041|1005|1005|997|1012|1032|1025|1020|998|1018|1000|1009|1005|1004|1042|1047|1021|1032|1019|1038|1050|1037|1019|1018|1035|1055|1028|1049|1013|1028|1023|1054|1041|1051|1069|1051|1072|1049|1054|1035|1072|1042|1048|1083|1054|1048|1065|1046|1055|1056|1085|1046|1048|1048|1068|1089|1074|1078|1046|1052|1082|1052|1067|1058|1051|1052|1082|1060|1076|1077|1059|1070|1082|1093|1100|1089|1079|1075|1087|1089|1088|1106|1107|1067|1076|1101|1094|1078|1097|1094|1083|1066|1079|1111|1100|1085|1091|1095|1081|1091|1077|1095|1107|1083|1116|1118|1101|1111|1096|1077|1086|1117|1087|1105|1107|1094|1112|1101|1084|1094|1125|1099|1108|1084|1099|1120|1122|1092|1120|1121|1094|1114|1099|1129|1095|1125|1127|1121|1129|1110|1097|1136|1110|1098|1131|1125|1144|1104|1117|1105|1105|1145|1102|1143|1115|1147|1149|1129|1108|1109|1130|1153|1121|1127|1133|1120|1155|1120|1147|1118|1117|1145|1152|1145|1130|1157|1135|1115|1156|1163|1131|1123|1137|1151|1160|1152|1166|1144|1137|1124|1151|1129|1133|1143|1139|1171|1135|1132|1174|1170|1163|1175|1152|1142|1160|1148|1173|1158|1160|1151|1142|1168|1153|1143|1157|1142|1172|1186|1176|1185|1175|1178|1184|1166|1148|1166|1186|1187|1180|1179|1161|1174|1155|1172|1173|1179|1149|1170|1175|1162|1151|1152|1163|1155|1197|1174|1199|1180|1160|1174|1159|1168|1160"
			}, 
			{
				seriesname : "Inverter",
				data: "1053|1057|1084|1082|1098|1055|1068|1067|1074|1056|1067|1078|1079|1084|1041|1052|1066|1080|1049|1051|1049|1044|1083|1053|1038|1077|1046|1067|1053|1033|1047|1055|1031|1074|1031|1041|1071|1057|1035|1070|1050|1069|1054|1049|1022|1044|1049|1058|1064|1088|1093|1103|1085|1072|1104|1106|1078|1061|1078|1105|1105|1062|1076|1074|1114|1069|1091|1086|1094|1072|1079|1088|1082|1075|1110|1120|1108|1102|1090|1088|1092|1102|1110|1111|1085|1113|1110|1116|1095|1105|1105|1122|1133|1132|1093|1097|1120|1105|1135|1106|1108|1135|1098|1136|1122|1113|1113|1145|1103|1127|1104|1126|1147|1120|1119|1120|1132|1107|1149|1147|1149|1141|1145|1152|1117|1144|1157|1134|1157|1120|1125|1153|1141|1132|1158|1134|1166|1167|1170|1163|1139|1171|1145|1156|1158|1154|1196|1196|1169|1174|1174|1195|1161|1201|1208|1188|1182|1188|1162|1174|1174|1211|1189|1211|1172|1211|1179|1199|1216|1184|1209|1181|1186|1174|1185|1220|1206|1190|1206|1201|1190|1209|1208|1189|1195|1188|1193|1206|1214|1205|1215|1200|1194|1210|1205|1236|1226|1208|1228|1235|1197|1197|1198|1224|1220|1210|1226|1244|1228|1241|1237|1201|1208|1238|1213|1222|1213|1249|1222|1221|1230|1223|1214|1251|1234|1220|1240|1213|1252|1224|1222|1234|1262|1255|1225|1226|1242|1240|1250|1265|1235|1228|1261|1221|1230|1235|1260|1273|1253|1268|1258|1233|1258|1248|1230|1270|1246|1242|1246|1253|1253|1257|1253|1266|1248|1247|1257|1245|1281|1271|1272|1248|1292|1251|1253|1257|1259|1288|1252|1297|1290|1268|1291|1258|1263|1254|1302|1279|1272|1271|1281|1261|1263|1289|1294|1272|1296|1264|1282|1268|1296|1280|1281|1277|1277|1292|1266|1310|1288|1312|1308|1300|1289|1273|1282|1300|1322|1301|1314|1296|1305|1305|1327|1323|1295|1314|1298|1312|1330|1293|1309|1286|1309|1332|1300|1295|1325|1322|1305|1323|1300|1308|1299|1324|1338|1313|1329|1331|1299|1329|1344|1335|1342|1307|1314|1326|1331|1328|1328|1311|1352|1328|1309|1311|1312"
			},
			{
				seriesname : "Wind",
				data: "878|876|855|881|882|864|873|848|885|862|877|855|888|858|885|865|881|885|866|888|860|844|876|880|840|841|845|852|873|846|851|883|842|864|837|842|863|871|868|867|834|835|856|874|830|836|835|873|878|880|884|882|884|884|881|886|863|885|806|865|858|876|883|874|885|888|866|865|888|885|807|878|885|812|887|885|804|887|886|881|881|882|882|883|818|884|876|888|822|888|802|883|815|806|805|803|817|814|885|807|801|818|812|805|827|88|813|835|88|88|88|836|841|805|805|887|812|832|825|820|888|818|800|808|805|804|842|847|821|832|818|838|850|837|818|818|835|855|828|848|813|828|823|854|841|851|868|851|872|848|854|835|872|842|848|883|854|848|865|846|855|856|885|846|848|848|868|888|874|878|846|852|882|852|867|858|851|852|882|860|876|877|858|870|882|883|800|888|878|875|887|888|888|806|807|867|876|801|884|878|887|884|883|866|878|88|800|885|881|885|881|881|877|885|807|883|816|818|801|88|886|877|886|817|887|805|807|884|812|801|884|884|825|888|808|884|888|820|822|882|820|821|884|814|888|828|885|825|827|821|828|88|887|836|888|888|831|825|844|804|817|805|805|845|802|843|815|847|848|828|808|808|830|853|821|827|833|820|855|820|847|818|817|845|852|845|830|857|835|815|856|863|831|823|837|851|860|852|866|844|837|824|851|828|833|843|838|871|835|832|874|870|863|875|852|842|860|848|873|858|860|851|842|868|853|843|857|842|872|886|876|885|875|878|884|866|848|866|886|887|880|878|861|874|855|872|873|878|848|870|875|862|851|852|863|855|887|874|888|880|860|874|858|868|860"			
			},
			{
				seriesname : "Grid",
				data: "778|776|755|781|772|764|773|747|785|762|777|755|788|757|785|765|771|785|766|787|760|744|776|780|740|741|745|752|773|746|751|783|742|764|737|742|763|771|767|767|734|735|756|774|730|736|735|773|777|770|774|772|774|784|771|786|763|785|706|765|758|776|773|774|775|787|766|765|777|775|707|778|785|712|777|785|704|787|786|781|771|782|772|783|718|774|776|787|722|787|702|783|715|706|705|703|717|714|775|707|701|717|712|705|727|77|713|735|77|77|77|736|741|705|705|777|712|732|725|720|778|718|700|707|705|704|742|747|721|732|717|738|750|737|717|718|735|755|728|747|713|728|723|754|741|751|767|751|772|747|754|735|772|742|748|783|754|748|765|746|755|756|785|746|748|748|768|787|774|778|746|752|782|752|767|758|751|752|782|760|776|777|757|770|782|773|700|787|777|775|787|787|788|706|707|767|776|701|774|778|777|774|783|766|777|77|700|785|771|775|781|771|777|775|707|783|716|718|701|77|776|777|786|717|787|705|707|774|712|701|784|774|725|777|708|784|777|720|722|772|720|721|774|714|777|727|775|725|727|721|727|77|777|736|777|778|731|725|744|704|717|705|705|745|702|743|715|747|747|727|708|707|730|753|721|727|733|720|755|720|747|718|717|745|752|745|730|757|735|715|756|763|731|723|737|751|760|752|766|744|737|724|751|727|733|743|737|771|735|732|774|770|763|775|752|742|760|748|773|758|760|751|742|768|753|743|757|742|772|786|776|785|775|778|784|766|748|766|786|787|780|777|761|774|755|772|773|777|747|770|775|762|751|752|763|755|777|774|777|780|760|774|757|768|760"			
			},
			{	
				seriesname : "Load",
				data: "678|676|655|681|662|664|673|646|685|662|677|655|688|656|685|665|661|685|666|686|660|644|676|680|640|641|645|652|673|646|651|683|642|664|637|642|663|671|666|667|634|635|656|674|630|636|635|673|676|660|664|662|664|684|661|686|663|685|606|665|658|676|663|674|665|686|666|665|666|665|607|678|685|612|667|685|604|687|686|681|661|682|762|683|618|664|676|686|622|686|602|683|615|606|605|603|617|614|665|607|601|616|612|605|627|66|613|635|66|66|66|636|641|605|605|667|612|632|625|620|668|618|600|606|605|604|642|647|621|632|616|638|650|637|616|618|635|655|628|646|613|628|623|654|641|651|666|651|672|646|654|635|672|642|648|683|654|648|665|646|655|656|685|646|648|648|668|686|674|678|646|652|682|652|667|658|651|652|682|660|676|677|656|670|682|663|600|686|676|675|687|686|688|606|607|667|676|601|664|678|667|664|683|666|676|66|600|685|661|665|681|661|677|665|607|683|616|618|601|66|666|677|686|617|687|605|607|664|612|601|684|664|625|666|608|684|666|620|622|662|620|621|664|614|666|626|665|625|627|621|626|66|667|636|666|668|631|625|644|604|617|605|605|645|602|643|615|647|646|626|608|606|630|653|621|627|633|620|655|620|647|618|617|645|652|645|630|657|635|615|656|663|631|623|637|651|660|652|666|644|637|624|651|626|633|643|636|671|635|632|674|670|663|675|652|642|660|648|673|658|660|651|642|668|653|643|657|642|672|686|676|685|675|678|684|666|648|666|686|687|680|676|661|674|655|672|673|676|646|670|675|662|651|652|663|655|667|674|666|680|660|674|656|668|660"			
			}		
		]
	}]);
});

module.exports = router;
