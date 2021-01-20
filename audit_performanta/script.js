import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - https://proiectae-550b9.web.app/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/",
			"params": {
				"headers": {
					"cache-control": "max-age=0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"referer": "https://github.com/raulvidis/proicet_ae",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7",
					"if-none-match": "\"bdf33167caa97a9fa129dee284dcf652f89ca5d58b443f1a8b2c8a18966214a0-br\"",
					"if-modified-since": "Wed, 20 Jan 2021 01:52:15 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/static/js/2.fd35f610.chunk.js",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/static/js/main.1ef123d6.chunk.js",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
			"params": {
				"headers": {
					"Origin": "https://proiectae-550b9.web.app",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2",
			"params": {
				"headers": {
					"Origin": "https://proiectae-550b9.web.app",
					"Referer": "https://fonts.googleapis.com/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/manifest.json",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/favicon.ico",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://proiectae-550b9.web.app/logo192.png",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(11.06);
		req = [{
			"method": "post",
			"url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
			"body": "{\"email\":\"email@gmail.com\",\"password\":\"parola123\",\"returnSecureToken\":true}",
			"params": {
				"headers": {
					"x-client-version": "Chrome/JsCore/8.0.1/FirebaseCore-web",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"content-type": "application/json",
					"accept": "*/*",
					"origin": "https://proiectae-550b9.web.app",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "options",
			"url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
			"params": {
				"headers": {
					"accept": "*/*",
					"access-control-request-method": "POST",
					"access-control-request-headers": "content-type,x-client-version",
					"origin": "https://proiectae-550b9.web.app",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "cross-site",
					"sec-fetch-dest": "empty",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "post",
			"url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
			"body": "{\"idToken\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvaWVjdGFlLTU1MGI5IiwiYXVkIjoicHJvaWVjdGFlLTU1MGI5IiwiYXV0aF90aW1lIjoxNjExMTYzNjc1LCJ1c2VyX2lkIjoiYkJNRVZJNGRVWVpZQ0IyZGgxa2lUVktMT1VmMSIsInN1YiI6ImJCTUVWSTRkVVlaWUNCMmRoMWtpVFZLTE9VZjEiLCJpYXQiOjE2MTExNjM2NzUsImV4cCI6MTYxMTE2NzI3NSwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZW1haWxAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.t_-0oyiz3_DXyuxRchA7ABN5kBy-hP-FVF741yAlWii6kSWg2TIL1gDX_0iFkMZfCc0Ya3TnTPeEUsyEXX4MdJvnY3dG2BtJLmQQ53FN7s_OSwUBoYp6iKfJ7xSUW3f832MgS3GahuudlaoXZfHrzCTdhzDrFx-rdY2c5M019vMCQJGvc11hp7hTaxwb7yeY4rl-yZPj4Kpd35DiGrUieYkeSy2axiVSK8kpm6d3dQLIIyPbFA8aDjaAx0l9k5lL1svx1yIVpbgXjm8ORn6cZYVzlKeHdPcWRuHZpj-0c3rpfFnTNuKg7PYbwgdhTOujtUQ6eT1ZYXX9lsO18O-2-w\"}",
			"params": {
				"headers": {
					"x-client-version": "Chrome/JsCore/8.0.1/FirebaseCore-web",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"content-type": "application/json",
					"accept": "*/*",
					"origin": "https://proiectae-550b9.web.app",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-white-mug-vector-3d-realistic-ceramic-coffee-tea-cup-isolated-on-png-image_1888425.jpg",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://atlas-content-cdn.pixelsquid.com/stock-images/large-vase-n1PDa4C-600.jpg",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7",
					"if-none-match": "\"2056fb95c0c96f444ba1a50ce13b4d26\"",
					"if-modified-since": "Thu, 05 Jul 2018 22:19:23 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://lh3.googleusercontent.com/proxy/fUzC_RUI3SBm8XDqZYj32PWF2jBndWeAI5lP7VjXBIZyh-yYzBoe27lqB5kkUAXS3gjP3t4hLwQt037kLElpa0s9aSsoZYAXkAab45IocZGC5gFcePCTIgU8cFaP",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
			"params": {
				"headers": {
					"Referer": "https://proiectae-550b9.web.app/",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(14.15);
		req = [{
			"method": "post",
			"url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
			"body": "{\"email\":\"email@email.com\",\"password\":\"parola123\",\"returnSecureToken\":true}",
			"params": {
				"headers": {
					"x-client-version": "Chrome/JsCore/8.0.1/FirebaseCore-web",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"content-type": "application/json",
					"accept": "*/*",
					"origin": "https://proiectae-550b9.web.app",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "post",
			"url": "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
			"body": "{\"idToken\":\"eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyYjkxODJiMWI0NmNiN2ZjN2MzMTFlZTgwMjFhZDY1MmVlMjc2MjIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvaWVjdGFlLTU1MGI5IiwiYXVkIjoicHJvaWVjdGFlLTU1MGI5IiwiYXV0aF90aW1lIjoxNjExMTYzNjkwLCJ1c2VyX2lkIjoid3VyT0U4OHBwR2g5SWg4cGlLRDlJektkUHlqMiIsInN1YiI6Ind1ck9FODhwcEdoOUloOHBpS0Q5SXpLZFB5ajIiLCJpYXQiOjE2MTExNjM2OTAsImV4cCI6MTYxMTE2NzI5MCwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZW1haWxAZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AXVqt9aZ4SebqyJ4GjRy7krSejNhYJCwJ5-dMfS3aLOn5NI_73sbUkN4qagH-R_OvoWo5MVU6H6fPrqwqDvspBloPCoIZLVlpV_Vy-QB8VVsDmzE2T6Z8rYyTHMmWXeaJiJjrEKJovNwYRbk7GJ6xZc5geR_PdxtYWrrUCe5s3FewfA4FajVa83s4BcayiuTPTAfzdTnBfmJZKmmpmuBDbFgGmRJkMvQCzDjT0uVzonx4phHkErbPAqyESFy9Qb9HzXfVm5pM9zB4tDVgNxSK16P5suNcExf0OHFa5-ApX4jkFygluvsExPHr_DrkKRZLAJHcG1lBSqUVMb4jq3I5w\"}",
			"params": {
				"headers": {
					"x-client-version": "Chrome/JsCore/8.0.1/FirebaseCore-web",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"content-type": "application/json",
					"accept": "*/*",
					"origin": "https://proiectae-550b9.web.app",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://lh3.googleusercontent.com/proxy/fUzC_RUI3SBm8XDqZYj32PWF2jBndWeAI5lP7VjXBIZyh-yYzBoe27lqB5kkUAXS3gjP3t4hLwQt037kLElpa0s9aSsoZYAXkAab45IocZGC5gFcePCTIgU8cFaP",
			"params": {
				"headers": {
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
					"x-client-data": "CLO1yQEIjbbJAQimtskBCMG2yQEIqZ3KAQjHwsoBCKzHygEItMvKAQikzcoBCNzVygEIlJrLAQjVnMsBCKidywEIq53LARj6uMoB",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://proiectae-550b9.web.app/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "ro-RO,ro;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
