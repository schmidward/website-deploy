import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/.DS_Store","images/2018-03_ES_VIVETT-DUKES.jpeg","images/2018-05-23_UNSHELTERED.png","images/2018-09-11_SG_TERRY-SHERIDAN.jpeg","images/2019-10-14_CH_REGINALD-PETTY.jpeg","images/2019-10-30_ES_HOME-RESTORATION.jpeg","images/2019-11-21_ES_EMPLOYERS-MARIJUANA-PRESENTATION.jpeg","images/2020-02-26_ES_BROOKLYN-AME-CHAPLE.png","images/2020_DK_EVICTION-ILLO.png","images/2020_NT_CENSUS-ILLO.png","images/2021-02-01_DH_POWER-PLANT-DEMOLITION.jpeg","images/2021-03-20_ES_DEWANDA-CROCHRELL-CAMPAIGNING.jpeg","images/2021-11-10_BM_OFALLON.jpeg","images/2021-11-15_BM_LATINO-FEATURE.jpeg","images/2021-12-22_BM_EDVL-WAREHOUSE.jpeg","images/2022-02-11_ES_Alicia-Steele.jpeg","images/2022-04-22_BM_ZRYBNIAKS.jpeg","images/2022-06-09_ES_AIR-FORCE-FITNESS-TEST.jpeg","images/2022-08-09_USAF_UKRAINE-TRANSPORT.jpg","images/2022-08-14_ES_Underground-Cave.jpeg","images/2022-10-18-BM-LITTON-ILLO.jpeg","images/2022-11-16_LK_HOUSING-IN-COLORADO-SPRINGS.jpeg","images/2023-02-06_BM_RIVER-26.jpeg","images/2023-04-19_ES_SWIC-2.jpg","images/2023-05-24_ES_Mike Sertle_Lower-End-2.jpg","images/headshot-crop.jpg","images/home-image-bikes.jpeg","images/nascar-crop.jpg","images/nascar.jpeg","images/night-sky.jpeg","images/ranch-sunset-crop.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.22dbfe22.js","app":"_app/immutable/entry/app.27b05729.js","imports":["_app/immutable/entry/start.22dbfe22.js","_app/immutable/chunks/index.f779f945.js","_app/immutable/chunks/singletons.b0ad1f74.js","_app/immutable/entry/app.27b05729.js","_app/immutable/chunks/index.f779f945.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/mywork",
				pattern: /^\/mywork\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/mywork/2023/riverfront-developments",
				pattern: /^\/mywork\/2023\/riverfront-developments\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
