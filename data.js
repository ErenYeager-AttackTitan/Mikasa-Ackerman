window.__initialState__ = {
	"account": {
		"billingInfo": {
			"loaded": false,
			"isPending": false,
			"upsellPending": false,
			"upsellNextAction": {},
			"receivable": {},
			"descriptor": {},
			"processor": {},
			"localCurrency": {},
			"provider": {},
			"shouldDisplayTaxesAndFees": false,
			"taxrate": {},
			"feerate": {},
			"creditReminderAmount": 0,
			"isPrebillRequired": false,
			"is_migrating": false
		},
		"closeAccount": {
			"isClosed": false,
			"isRejected": false
		},
		"dailyLimit": {
			"availableAmount": 0,
			"dailyLimit": 0,
			"limitOptions": [],
			"localCurrency": "USD",
			"maximumLimit": 0,
			"isPending": false,
			"fulfilled": false,
			"isRejected": false,
			"usedAmount": 0
		},
		"discountsAndCredits": {
			"isPending": false,
			"isRejected": false,
			"discounts": [],
			"totalsByCurrency": []
		},
		"fanClub": {
			"isPending": false,
			"isRejected": false,
			"subscriptions": [],
			"isPerformerPlansPending": false,
			"isPerformerPlansRejected": false,
			"performerPlans": []
		},
		"outstandingBalance": {
			"billingInfo": null,
			"outstandingBalance": null,
			"localCurrency": "USD",
			"outstandingBalanceLoadPending": false,
			"outstandingBalanceLoadComplete": false,
			"payoffPending": false,
			"payoffRejected": false,
			"payoffComplete": false
		},
		"paymentInfo": {
			"getInfoError": false,
			"getInfoPending": true,
			"integrationType": "",
			"method": "",
			"parameters": {
				"browsePath": "\u002F"
			},
			"paymentProvider": null,
			"success": false,
			"url": "",
			"availablePayMethods": [],
			"selected": 0,
			"selectedPrepayAmount": null,
			"updatePaymentButtonClick": false,
			"oneClickInfoError": false,
			"oneClickInfoPending": true,
			"oneClickLocalAmount": null,
			"collectEventId": null,
			"prepareUpsellTransactionError": false
		},
		"paymentResponse": {
			"isPending": true,
			"errors": [],
			"retryCount": 0,
			"responseTextTitleKey": ""
		},
		"prepaidBalance": {
			"displayBalanceAmount": 0,
			"displayCurrencyCode": "USD",
			"eventid": null,
			"incentives": {},
			"reloadOptions": [],
			"integrationType": "",
			"isPending": true,
			"localizedAmount": "$0.00",
			"maximumReloadAmount": null,
			"method": null,
			"minimumReloadAmount": null,
			"parameters": null,
			"prepaidBalanceError": null,
			"prethrustid": null,
			"purchaseCurrencyCode": "USD",
			"url": null,
			"returnUrl": null,
			"returnPath": null,
			"feeAmount": 0,
			"taxAmount": 0,
			"totalAddToStashInLocalCurrency": 0,
			"usdEquivalent": 0,
			"newAccountBalanceUSD": 0,
			"newAccountBalanceLocal": 0,
			"bonusCredit": 0,
			"dataForTryAgainFromUpdateStashBalance": null
		},
		"profileForm": {
			"formData": {
				"languageShownToPerformers": "",
				"nickname": ""
			},
			"languageShownToPerformersSubmissionFailed": undefined,
			"nicknameSubmissionFailed": undefined,
			"isSubmitting": false,
			"error": null
		},
		"purchaseHistory": {
			"statement": {
				"account": {},
				"transactions": []
			},
			"isLoadingPerformerDetail": false,
			"isPending": false,
			"isLoaded": false,
			"hasLoadError": false
		},
		"receivable": {
			"isPending": false,
			"fulfilled": false,
			"isRejected": false,
			"userIsBillable": true
		},
		"receivedMedia": {
			"listSortType": "online",
			"isRejected": false,
			"isPending": false,
			"videoList": [],
			"photoList": [],
			"isMediaDisplayOpen": false,
			"isFullscreen": false,
			"selectedMedia": undefined
		},
		"receivedVideos": {
			"activeVideoId": null,
			"listSortType": "recentlyAdded",
			"isRejected": false,
			"isPending": true,
			"videoList": []
		}
	},
	"application": {
		"environment": "production",
		"config": {
			"joinClient": {
				"userVerificationEndpoint": "https:\u002F\u002Fverify.emblem-staging.devspace.lsea3.generflow.com\u002Fapi\u002Ftrust-requestor-notification\u002Fv1\u002Fconfig"
			},
			"hybridClient": {
				"fastManifestTemplate": "https:\u002F\u002Fmanifest-server.naiadsystems.com\u002Flive\u002Fs:{performerNickname}.json",
				"liveServicesHostTemplate": "wss:\u002F\u002F{host}-ls.naiadsystems.com\u002F{host}-hub-api\u002F8101",
				"server": "https:\u002F\u002Fhybridclient.naiadsystems.com",
				"assetPath": "https:\u002F\u002Fcdn.hybridclient.naiadsystems.com\u002Fstatic\u002Fvendor\u002Faiw"
			},
			"messenger": {
				"pollIntervalConversation": 30,
				"pollIntervalPerformerStatus": 15,
				"conversationListPageSize": 20,
				"conversationPageSize": 20
			},
			"membership": {
				"termsUrl": "https:\u002F\u002F\u003C%= domain %\u003E\u002Fdocs\u002Fterms-and-conditions",
				"updatePaymentReturnUrl": "https:\u002F\u002F\u003C%= domain %\u003E\u002Faccount\u002Fupdate-payment-info\u002Fprocessor-response",
				"streamatemodelsRedirectUrl": "https:\u002F\u002Fstreamatemodels.com\u002F"
			},
			"memberserver": {
				"https": "https:\u002F\u002Fmember.naiadsystems.com",
				"websocket": "wss:\u002F\u002Fmember.naiadsystems.com"
			},
			"imageBucket": {
				"snapshotUrl": "https:\u002F\u002Fobject-cdn.icfsys.com\u002Fsmconnect-snapshots",
				"biopicUrl": "https:\u002F\u002Fimagetransform.icfcdn.com"
			},
			"federatedModules": {
				"helloWorldScope": "",
				"legal_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Flegal\u002FremoteEntry.js",
				"search_client": "https:\u002F\u002Fstreamate.icfcdn.com\u002Fsearch\u002FremoteEntry.js",
				"join_client": "https:\u002F\u002Fstreamate.icfcdn.com\u002Fjoin\u002FremoteEntry.js",
				"hybrid_client": "https:\u002F\u002Fcdn.hybridclient.naiadsystems.com\u002Fdist\u002Fhybrid\u002Fhc.js",
				"messenger_client": "https:\u002F\u002Fstreamate.icfcdn.com\u002Fmessenger\u002FremoteEntry.js",
				"contentcomplaint_client": "https:\u002F\u002Fstreamate.icfcdn.com\u002Fcontentcomplaint\u002FremoteEntry.js",
				"accountmanagement_client": "https:\u002F\u002Fstreamate.icfcdn.com\u002Faccountmanagement\u002FremoteEntry.js",
				"notificationpreferences_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fnotificationpreferences\u002FremoteEntry.js",
				"customersupport_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fcustomersupport\u002FremoteEntry.js",
				"userverification_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fuserverification\u002FremoteEntry.js",
				"userpolicy_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fuserpolicy\u002FremoteEntry.js",
				"authentication": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fauthentication\u002FremoteEntry.js",
				"media_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fmedia\u002FremoteEntry.js",
				"privacyright_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fprivacyright\u002FremoteEntry.js",
				"pushnotifications_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fpushnotifications\u002FremoteEntry.js",
				"creatorprofile": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fcreatorprofile\u002FremoteEntry.js",
				"performerbio_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fperformerbio\u002FremoteEntry.js",
				"billingmanagement_client": "https:\u002F\u002Ffederatedmodules.icfcdn.com\u002Fbillingmanagement\u002FremoteEntry.js"
			},
			"senderella": {
				"marketingOffersCategory": 5
			},
			"mode": "production",
			"gateways": {
				"b6dc499e-1730-4f5c-968c-fede0c1f9b94": "accountmanagement.apigateway",
				"f77ed12b-eacc-4231-9f4b-2cf02c45e1f0": "messenger.apigateway",
				"3e249344-701c-4585-a6c1-b77ec6c1ac85": "notifications.apigateway",
				"0ca06d43-6796-4772-953d-e8eb3e46cc56": "legal.apigateway",
				"53dac94e-8f86-43fe-bb2f-74f53df963f4": "authentication.apigateway",
				"da48cfde-b78e-4dca-bd12-d6660fcccf2d": "search.apigateway",
				"c64f0e7e-b201-4fd8-9074-b9742d2217e2": "usermedia.apigateway",
				"096f0add-8d07-446c-8140-e3ccd3c27bea": "userverification.apigateway",
				"bf869150-1b5b-4cd0-b805-a742b9cf4a0d": "userpolicy.apigateway",
				"29614fdd-c3a0-4f21-b470-d7c33a7b400b": "privacyright.apigateway",
				"bf4311b0-d9dd-49eb-ae83-4bb51602c349": "pushnotifications.apigateway",
				"0419817f-cf3e-4200-9d3e-64a0df5df077": "creatorprofile.apigateway",
				"4bc14b38-b289-4872-9b86-798f14f84749": "performerbio.apigateway",
				"7fea2871-a0e6-458a-9fcd-e2fe9360a10c": "billingmanagement.apigateway"
			},
			"captchaWebservicePublicSiteKey": "6Lc9BfchAAAAANYwu5VVs-rttx8PW_gHKG847ksD",
			"cdn": {
				"federatedModules": {
					"fallbackMappings": [{
						"primary": "https:\u002F\u002Ffederatedmodules.icfcdn.com",
						"fallbacks": ["https:\u002F\u002Ffederatedmodules-origin-fb.icfcdn.com"]
					}, {
						"primary": "https:\u002F\u002Fstreamate.icfcdn.com",
						"fallbacks": ["https:\u002F\u002Fstreamate-origin-fb.icfcdn.com"]
					}, {
						"primary": "https:\u002F\u002Fcdn.hybridclient.naiadsystems.com",
						"fallbacks": ["https:\u002F\u002Fhybridclient.naiadsystems.com"]
					}]
				}
			},
			"oauthProviders": ["google", "kwiky"],
			"paymentGatewayUrl": "https:\u002F\u002Fpay.echst.net",
			"paypalClientId": "AbJT43JwZLsTpZc3Vq7QRc2NCSRSKhrkiHun9bUx-lAHlR4oxljGQASp5ITbufbhGRLzoq0FaCfMHKIV"
		},
		"activeSliderIndex": 0,
		"activityTrackingClient": {
			"sendEvent": function sendEvent() {}
		},
		"breakpoint": "small",
		"isLandscape": false,
		"clientReady": false,
		"searchReady": false,
		"fingerprint": "",
		"height": 480,
		"hybridClientCam2Cam": false,
		"hybridClientLogging": false,
		"hybridClientSourceOverride": "",
		"hybridClientOpenPayModal": false,
		"hybridClientVisible": false,
		"hybridClientPipState": "DEFAULT",
		"performerNickname": "",
		"performerId": 0,
		"rawSearchString": undefined,
		"joinLink": "\u002Fsignup\u002Fregister",
		"supportSheetOpen": false,
		"width": 320,
		"snackbarQueue": [],
		"xsrfToken": "1749915759494.a4355b4cf291b3529816513592325ca663d16e4844a28324cffb6f81aa98d778"
	},
	"autocomplete": {
		"isPending": false,
		"results": {
			"tags": [],
			"categories": [],
			"performers": []
		},
		"query": ""
	},
	"badge": {
		"badges": {},
		"loadState": "initial"
	},
	"categories": {
		"groupIndex": 0,
		"loaded": false,
		"isPending": false,
		"results": []
	},
	"contest": {
		"activeContests": [],
		"contestFilter": "available"
	},
	"featured": {
		"loaded": false,
		"isPending": false,
		"results": []
	},
	"feedback": {
		"formData": {
			"bugs": false,
			"features": false,
			"design": false
		},
		"isSubmitted": false,
		"isSubmitting": false
	},
	"filters": {
		"advanced": [{
			"title": "search.filters.region_filter",
			"name": "region",
			"isExpanded": true,
			"isVisible": true,
			"options": [{
				"label": "search.filters.region_filter_options.na_uk_au",
				"value": "na_uk_au",
				"isChecked": false
			}, {
				"label": "search.filters.region_filter_options.west_eu",
				"value": "west_eu",
				"isChecked": false
			}, {
				"label": "search.filters.region_filter_options.cent_east_eu",
				"value": "cent_east_eu",
				"isChecked": false
			}, {
				"label": "search.filters.region_filter_options.cent_south_am",
				"value": "cent_south_am",
				"isChecked": false
			}, {
				"label": "search.filters.region_filter_options.asia",
				"value": "asia",
				"isChecked": false
			}, {
				"label": "search.filters.region_filter_options.africa",
				"value": "africa",
				"isChecked": false
			}]
		}, {
			"title": "search.filters.age_filter",
			"name": "age",
			"isExpanded": false,
			"isVisible": true,
			"options": [{
				"label": "search.filters.age_filter_options.teen",
				"value": "18-19",
				"isChecked": false
			}, {
				"label": "search.filters.age_filter_options.20s",
				"value": "20-29",
				"isChecked": false
			}, {
				"label": "search.filters.age_filter_options.30s",
				"value": "30-39",
				"isChecked": false
			}, {
				"label": "search.filters.age_filter_options.40s",
				"value": "40-49",
				"isChecked": false
			}, {
				"label": "search.filters.age_filter_options.mature",
				"value": "50-99",
				"isChecked": false
			}]
		}, {
			"title": "search.filters.feature_filter",
			"name": "feature",
			"isExpanded": false,
			"isVisible": true,
			"options": [{
				"label": "search.filters.feature_filter_options.partychat",
				"tip": "search.filters.feature_filter_tips.partychat",
				"value": "partychat",
				"isChecked": false
			}, {
				"label": "search.filters.feature_filter_options.video",
				"tip": "search.filters.feature_filter_tips.video",
				"value": "video",
				"isChecked": false
			}, {
				"label": "search.filters.feature_filter_options.fanclub",
				"tip": "search.filters.feature_filter_tips.fanclub",
				"value": "fanclub",
				"isChecked": false
			}]
		}, {
			"title": "search.filters.ethnicity_filter",
			"name": "ethnicity",
			"isExpanded": false,
			"isVisible": false,
			"options": [{
				"label": "search.filters.ethnicity_filter_options.asian",
				"value": "asian",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.black",
				"value": "black",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.east_indian",
				"value": "east_indian",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.european",
				"value": "european",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.hispanic",
				"value": "hispanic",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.mediterranean",
				"value": "mediterranean",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.middle_eastern",
				"value": "middle_eastern",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.native_american",
				"value": "native_american",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.pacific_islander",
				"value": "pacific_islander",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.roma",
				"value": "roma",
				"isChecked": false
			}, {
				"label": "search.filters.ethnicity_filter_options.white",
				"value": "white",
				"isChecked": false
			}]
		}, {
			"title": "search.filters.fetishes_filter",
			"name": "fetishes",
			"isExpanded": false,
			"isVisible": false,
			"options": [{
				"label": "search.filters.fetishes_filter_options.anal",
				"value": "anal",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.bdsm",
				"value": "bdsm",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.creampie",
				"value": "creampie",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.cuckold",
				"value": "cuckold",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.deepthroat",
				"value": "deepthroat",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.dominant",
				"value": "dominant",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.facials",
				"value": "facials",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.feet",
				"value": "feet",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.femdom",
				"value": "femdom",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.gagging",
				"value": "gagging",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.lactation",
				"value": "lactation",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.leather",
				"value": "leather",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.roleplay",
				"value": "roleplay",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.rubber\u002Flatex",
				"value": "rubber\u002Flatex",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.shaving",
				"value": "shaving",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.smoking",
				"value": "smoking",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.spanking\u002Fpaddling",
				"value": "spanking\u002Fpaddling",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.stockings\u002Fnylons",
				"value": "stockings\u002Fnylons",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.submissive",
				"value": "submissive",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.underwear",
				"value": "underwear",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.voyeur",
				"value": "voyeur",
				"isChecked": false
			}, {
				"label": "search.filters.fetishes_filter_options.whips",
				"value": "whips",
				"isChecked": false
			}]
		}, {
			"title": "search.filters.language_filter",
			"name": "languages",
			"isExpanded": false,
			"isVisible": false,
			"options": [{
				"label": "user_site_language.de",
				"value": "de",
				"isChecked": false
			}, {
				"label": "user_site_language.en",
				"value": "en",
				"isChecked": false
			}, {
				"label": "user_site_language.es",
				"value": "es",
				"isChecked": false
			}, {
				"label": "user_site_language.fr",
				"value": "fr",
				"isChecked": false
			}, {
				"label": "user_site_language.it",
				"value": "it",
				"isChecked": false
			}, {
				"label": "user_site_language.sv",
				"value": "sv",
				"isChecked": false
			}, {
				"label": "user_site_language.pt",
				"value": "pt",
				"isChecked": false
			}, {
				"label": "user_site_language.nl",
				"value": "nl",
				"isChecked": false
			}, {
				"label": "user_site_language.no",
				"value": "no",
				"isChecked": false
			}]
		}],
		"isFiltersModalOpen": false,
		"isShowMore": false,
		"onlineOfflineMode": "online"
	},
	"dialog": {
		"isDialogOpen": false
	},
	"event": {},
	"hero": {
		"performers": [],
		"shouldDisplayOnCurrentRoute": true,
		"activeHeroSlideIndex": null,
		"isIncentiveOfferDismissed": false
	},
	"history": [],
	"login": {
		"isLoginSuccessVisible": false,
		"retryForgotPassword": undefined,
		"twoFactorAuthenticationEmailSubmitting": undefined,
		"twoFactorAuthenticationForm": {
			"submitted": false,
			"submitting": false
		},
		"oneclickTokenLoginWaiting": false
	},
	"megaMenu": {
		"isMegaMenuOpen": false,
		"hasPrepaidBalance": false
	},
	"messenger": {
		"pwaInstaller": null
	},
	"modal": {
		"Component": "",
		"initialModalContentHeight": 412,
		"isModalOpen": false,
		"lockModal": false,
		"path": "",
		"size": "medium",
		"zIndexOverride": undefined
	},
	"performer": {
		"performerStatuses": {}
	},
	"router": {
		"location": {
			"pathname": "\u002F",
			"search": "",
			"hash": "",
			"state": undefined,
			"key": "m3l6e7",
			"query": {}
		},
		"action": "POP"
	},
	"search": {
		"hasUserInteracted": false,
		"isCategoriesSideMenuOpen": true,
		"isGoldOnlyMode": false,
		"isInteractionListenerReady": false,
		"isTrendingTagTrackingQueued": false,
		"navigatedFromTrending": false,
		"searchOpen": false,
		"thumbnailSize": "medium",
		"totalPerformers": undefined,
		"useCambuilderOverrides": false
	},
	"signup": {
		"email": undefined,
		"nickname": undefined,
		"password": undefined,
		"signupPerformer": "",
		"signupPerformerId": undefined,
		"signupId": undefined,
		"clientUserId": undefined,
		"returnUrl": undefined,
		"isBlacklabelSignup": false
	},
	"skin": {
		"global": {
			"join_video_disabled": true,
			"allowed_languages": "de,en,es,fr,it,nl,no,pt,sv",
			"allow_login_redirection": true,
			"become_a_model_link": "http:\u002F\u002Fwww.streamatemodels.com",
			"bgcolor_header": "#ffffff",
			"bgcolor": "#ffffff",
			"browse_config_version": "30_girls",
			"company_name": "pornlive.com",
			"complaint_email": "complaint@icftechnology.com",
			"creativejoin_xment_percent": 100,
			"default_language": "en",
			"default_search_kids": "0",
			"default_search_not_exact": 0,
			"disallow_robots": false,
			"disallow_sitemap": true,
			"dmca_address": "reganaM thgirypoC\u003Cbr \u002F\u003E .cnI ,ygolonhceT FCI\u003Cbr \u002F\u003E teertS trawetS 008\u003Cbr \u002F\u003E 10189 AW ,elttaeS\u003Cbr \u002F\u003E 2097-414-602 :(SU) enohP\u003Cbr \u002F\u003E moc.ygolonhcetfci@thgirypoc :liamE",
			"domain": "pornlive.com",
			"email_uniqueness": 0,
			"euro_terms_address": ".V.B UE hceT FCI\u003Cbr\u003ERB 1011 ,57 gewgrebskaaH\u003Cbr\u003EsdnalrehteN ,madretsmA",
			"gold_only_mode": "disabled",
			"jointype_nonbillable_enabled": false,
			"jurisdiction_location": "Amsterdam, Netherlands",
			"legal_addresses_by_location": {
				"legal_address_default": []
			},
			"name": "PornLive",
			"niche": "Girls - All Girl Cams",
			"pagetitle_prefix": "PornLive: Video Porn and Live Sex Cams, Porn Chat with Local Live Cam Girls -",
			"privacy_addresses": [".cnI ,ygolonhceT FCI\u003Cbr \u002F\u003E 80512 xoB OP\u003Cbr \u002F\u003E 11189 AW ,elttaeS\u003Cbr \u002F\u003E ASU"],
			"real_support_email": "supportteam@echst.com",
			"redirect_external_traffic_dest": "",
			"referrerid": 582,
			"search_boosted_filters": "",
			"search_boosted_whitelists": "country=fr:71;language=fr:71",
			"site": 4077,
			"support_email": "support@echst.com",
			"support_numbers": {
				"AU": "1800 972 031",
				"CA": "(866) 941-3982",
				"CH": "0800 896 441",
				"DE": "0800 1810993",
				"DE_Mobile": "0800 1825274",
				"FR": "0 800 90 32 92",
				"GB": "0800 098 8202",
				"IT": "800 875 206",
				"UK": "0800 098 8202",
				"US": "(866) 941-3982",
				"outside_us": "+1 206-438-0241"
			},
			"terms_address": ".cnI ,ygolonhceT FCI \u003Cbr\u003E80512 xoB OP\u003Cbr\u003E11189 AW ,elttaeS\u003Cbr\u003EASU",
			"traffic_volume_limits": {
				"\u002Fcam\u002Famouranth": {
					"loggedIn": 2000,
					"loggedOut": 1000
				}
			},
			"nicheGender": "girls",
			"active_performer": undefined
		},
		"skin_misc": {
			"feature_toggles": {
				"activity_tracking": true,
				"advanced_filters_enabled": true,
				"chat_messenger": false,
				"combined_gdpr_consent_enabled": true,
				"complaint_recaptcha_enabled": true,
				"complaint_report_bio_pic": true,
				"complaint_report_live_stream": true,
				"complaint_report_photo": true,
				"content_removal_link_enabled": true,
				"contentfeed_enabled": true,
				"desktop_optout_enabled": false,
				"enable_oauth": true,
				"feature_select": true,
				"forgot_password_recaptcha_enabled": true,
				"freemium_upgrade_in_join_client": true,
				"hero_video_enabled": true,
				"join_modal_enabled": true,
				"join_recaptcha_enabled": true,
				"kron_killa_enabled": true,
				"leaderboard_enabled": true,
				"login_recaptcha_enabled": true,
				"messenger_file_attachments_enabled": true,
				"my_media": true,
				"paypal_agegate_enabled": true,
				"performer_wishlist_enabled": true,
				"performer_wishlist_enabled_mobile": true,
				"prebill_form_sale_enabled_provider_list": "ACHB",
				"reactivation_recaptcha_enabled": false,
				"reward_arch_two": true,
				"rewards_achievements_enabled": true,
				"social_chat_splash_page": false,
				"support_recaptcha_enabled": true,
				"theme_toggle_enabled": false,
				"two_factor_authentication_blacklabel_session": "on",
				"two_factor_authentication_mode": "on",
				"use_federated_hybrid_client": true,
				"use_media_client_bio_media_components": true,
				"use_v2_media_store": true,
				"video_store": true
			},
			"activitytracking_rust_percent": 100,
			"blocked_country_url": "http:\u002F\u002Fwww.mandycam.com",
			"credit_reminder_frequency": 10,
			"desktop_optout_cutoff_timestamp": 1633107600000,
			"google_analytics_id": "UA-18495433-15",
			"google_recaptcha_site_key": "6LeljBoUAAAAAAgoCKzr4NX70PxsJKgTrTAM_dH5",
			"google_invisible_recaptcha_site_key": "6LdxJ7sUAAAAAN4OOv85dC4bPg4EaxTdg4L4Y5TY",
			"google_tag_manager_id": "GTM-KVC8W4C",
			"enable_social_login": true,
			"hybrid_client_enable_privcalls": "true",
			"react_webapp_xment_name": "mobile-react-app-usertour-111016",
			"react_webapp_mobile_c2c": true,
			"paypal_flowid": "ICF_V2V3F3LJE2LZ6_PYMNT",
			"xment_active_list": [],
			"report_media_enabled": true
		},
		"skin_theme": {
			"theme_type": "dark",
			"custom_header_background_color": "#0a0909",
			"custom_header_link": "https:\u002F\u002Fsexbook.com\u002Fgo\u002Fpage\u002Flanding_page_518_cp?pid=p268042.subporncams",
			"custom_header_text": "Local Sex Dating",
			"favicon_path": "\u002F\u002Fcdn.nsimg.net\u002F3.0\u002Fauto\u002Fskin\u002Fpl\u002Fassets\u002Feb3d1-1551727814-favicon.png",
			"logo_on_dark": "\u002F\u002Fcdn.nsimg.net\u002F3.0\u002Fauto\u002Fskin\u002Fpl\u002Fassets\u002F1b6a8-1573835632-5dced3709b808.png",
			"logo_on_light": "\u002F\u002Fcdn.nsimg.net\u002F3.0\u002Fauto\u002Fskin\u002Fpl\u002Fassets\u002F1b6a8-1573835632-5dced3709b808.png",
			"logo_path": "\u002F\u002Fcdn.nsimg.net\u002F3.0\u002Fauto\u002Fskin\u002Fpl\u002Fassets\u002F1b6a8-1573835632-5dced3709b808.png",
			"primary_color": "#da7922",
			"sploosh_page": true
		},
		"css_sm3_sass": {
			"$body-bg": "#000000",
			"$header-template": "masthead",
			"$masthead-bg": "#000000",
			"$primary-color": "#da7922"
		}
	},
	"videostore": {
		"legacyPerformerStore": {
			"currencyCode": "USD",
			"selectedVideos": []
		},
		"modals": {
			"isFullscreen": false,
			"isVideoPlayerModalOpen": false,
			"isVideoPurchaseModalOpen": false,
			"selectedVideo": null
		},
		"purchase": {
			"isPurchasingWithRewardsPoints": false,
			"isPurchasing": false,
			"result": null
		},
		"purchaseMedia": {
			"isPurchasingWithRewardsPoints": false,
			"isPurchasing": false,
			"result": null
		},
		"purchaseMediaModal": {
			"isMediaPurchaseModalOpen": false,
			"selectedPurchaseMedia": null
		}
	},
	"user": {
		"accountAgeSegment": null,
		"accountStatus": null,
		"consent": {
			"language": {
				"userConsent": "pending"
			},
			"marketing": {
				"userConsent": "pending"
			},
			"recommender": {
				"userConsent": "pending"
			},
			"xment": {
				"userConsent": "pending"
			}
		},
		"country": "US",
		"subdivision": "",
		"isEUCountry": false,
		"dateCreated": null,
		"referrerId": null,
		"referrerKey": null,
		"trackingId": null,
		"email": "",
		"forcedBillingInfoUpdate": false,
		"hasClickedForgotPasswordEmail": false,
		"nicknameUpdateDrawerTimesSeen": 0,
		"nicknameUpdateDrawerSeenAtTimestamp": null,
		"creditOfferModalTimesSeen": 0,
		"creditOfferModalSeenAtTimestamp": null,
		"isAuthenticated": false,
		"language": "en",
		"languageShownToPerformers": "",
		"nickname": "",
		"oneClick": false,
		"recentPerformers": [],
		"sakey": "",
		"sakeyTimestamp": null,
		"shouldShowCCPACheckbox": false,
		"siteId": null,
		"status": null,
		"tracking": {
			"partnerPerformerNickName": undefined
		},
		"twoFactorAuthentication": {
			"allowed": false,
			"emailRequestToken": "",
			"required": false,
			"email": undefined
		},
		"userid": 0,
		"hasDeletionRequest": null,
		"isDeletionRequestPastGracePeriod": null,
		"userOffers": {},
		"verifyPending": false,
		"videoStartupXmentSelection": null,
		"geodata": {
			"continent": {
				"code": "NA",
				"geoname_id": 6255149,
				"names": {
					"de": "Nordamerika",
					"en": "North America",
					"es": "Norteamérica",
					"fr": "Amérique du Nord",
					"ja": "北アメリカ",
					"pt-BR": "América do Norte",
					"ru": "Северная Америка",
					"zh-CN": "北美洲"
				}
			},
			"country": {
				"geoname_id": 6252001,
				"iso_code": "US",
				"names": {
					"de": "USA",
					"en": "United States",
					"es": "Estados Unidos",
					"fr": "États Unis",
					"ja": "アメリカ",
					"pt-BR": "EUA",
					"ru": "США",
					"zh-CN": "美国"
				}
			},
			"location": {
				"accuracy_radius": 1000,
				"latitude": 37.751,
				"longitude": -97.822,
				"time_zone": "America\u002FChicago"
			},
			"registered_country": {
				"geoname_id": 6252001,
				"iso_code": "US",
				"names": {
					"de": "USA",
					"en": "United States",
					"es": "Estados Unidos",
					"fr": "États Unis",
					"ja": "アメリカ",
					"pt-BR": "EUA",
					"ru": "США",
					"zh-CN": "美国"
				}
			}
		},
		"isHighRiskRedirect": false,
		"requiresAgeConfirmation": false,
		"userType": undefined
	},
	"rewards": {
		"rewardsTierId": 0,
		"rewardsPointBalance": 0,
		"rewardsLifetimePointsTotal": 0,
		"isRedeemPointsFulfilled": false,
		"isRedeemPointsPending": false,
		"isRedeemPointsRejected": false,
		"isRewardsSummaryPending": false,
		"isRewardsSummaryRejected": false,
		"isRewardsAchievementsPending": false,
		"isRewardsAchievementsRejected": false,
		"isRewardsProgramV2User": true
	},
	"wishlist": {
		"wishlist": undefined,
		"isWishlistPending": false,
		"isWishlistRejected": false,
		"isWishlistItemPurchasePending": false,
		"isWishlistItemPurchaseRejected": false,
		"isWishlistItemPurchaseFulfilled": false,
		"isWishlistItemContributionPending": false,
		"isWishlistItemContributionRejected": false,
		"isWishlistItemContributionFulfilled": false
	},
	"contentfeed": {
		"posts": undefined,
		"isContentFeedPending": false,
		"isContentFeedRejected": false,
		"isContentFeedFulfilled": false,
		"userActionOnPostId": undefined,
		"isContentFeedPostSendGoldPending": false,
		"isContentFeedPostSendGoldRejected": false,
		"isContentFeedPostSendGoldFulfilled": false,
		"contentFeedPostSendGoldError": undefined,
		"isContentFeedPostLikePending": false,
		"isContentFeedPostLikeRejected": false,
		"isContentFeedPostLikeFulfilled": false,
		"isContentFeedPostPurchasePending": false,
		"isContentFeedPostPurchaseRejected": false,
		"isContentFeedPostPurchaseFulfilled": false,
		"contentFeedPostPurchaseMedia": undefined
	},
	"xment": {
		"searchLoggedInRec": -1,
		"searchLoggedOutRec": -1,
		"search_trending_tags_removed_mobile": "OFF",
		"search_trending_tags_removed_desktop": "OFF",
		"searchTranslateTopFrenchSearches": "OFF",
		"useSearchSnapshot": "ON",
		"searchLocalBoostActualCountrySpain": "OFF",
		"searchFreeAccountSignUpTile": "OFF",
		"searchReplaceLegacyBaseScore": "OFF",
		"searchShowOnlineCount": "OFF",
		"searchSmartlinks": "OFF",
		"searchV4RegionalBoost": "OFF",
		"searchHideMobileFilterButton": "OFF",
		"saturateContrastThumbnailsMobile": "A",
		"saturateContrastThumbnailsDesktop": "A",
		"searchTransTabMobile": "OFF",
		"extend_session": "OFF",
		"categoriesTestConfig": "OFF",
		"gender_tabs_logged_in_mobile": "A",
		"cam2CamUIModernization": "A",
		"join_cta_go_to_join_page_mobile": "A",
		"join_cta_go_to_join_page_desktop": "A",
		"login_modal_redesign_mobile": "A",
		"login_modal_redesign_desktop": "A",
		"chatJoinPromptDesktop": "1",
		"chatJoinPromptMobile": "0",
		"removeEnableAudioButton": "A",
		"display_header": "A",
		"new_private_modal": "OFF",
		"header_join_and_login_not_translated_mobile": "A",
		"header_join_and_login_not_translated_desktop": "A",
		"xment_baseline_anon": 0,
		"xment_baseline_1": "a1",
		"xment_baseline_2": "a1"
	},
	"contentreview": {
		"externalServiceIds": []
	},
	"emailCampaign": {
		"redeemOfferStatus": null,
		"redeemOffer": null,
		"isOfferLoading": false,
		"seenIt": false,
		"isOfferFetched": false
	},
	"ageGateDetails": {
		"showExplicitContent": false,
		"ageVerifier": "CONSENTING_FULL_PAGE_BLOCK"
	}
};
window.__initialLanguageResources__ = {
	"en": {
		"common": {
			"account": {
				"3ds_auth_required": {
					"go_to_portal": "Please proceed to the Secure Verification Portal below.",
					"portal_button": "Secure Verification Portal",
					"verify_cc_generic": "Your Credit Card Bank has requested that we verify your identity for a pending charge of \u003C0\u003E{{balance}}\u003C\u002F0\u003E.",
					"verify_cc_specific": "Your Bank has requested that we verify your use of the Credit Card ending in {{last4digits}} for a pending charge of \u003C0\u003E{{balance}}\u003C\u002F0\u003E."
				},
				"address": "Street Address",
				"back_to_browsing": "Back to the action!",
				"bad_response_title": "Something Went Wrong",
				"basic_member": "Basic Member",
				"billing_fee": "Service charge",
				"billing_fee_paypal": "An additional {{percentage}}% PayPal service charge will be added to your final purchase.",
				"billing_fee_paypal_included": "Pricing includes {{percentage}}% PayPal service charge.",
				"billing_statements": "Billing Statements",
				"billing_statements_note": "When you access any of our clearly marked paid services, billing will display on your statement as one of the following:",
				"billing_tax_sales": "An additional {{percentage}}% sales tax will be added to your final purchase.",
				"billing_tax_sales_included": "Sales tax of {{percentage}}% included.",
				"billing_tax_sales_paypal_included": "Pricing includes {{paypal}}% PayPal service charge and {{tax}}% sales tax.",
				"billing_tax_vat": "An additional {{percentage}}% VAT will be added to your final purchase.",
				"billing_tax_vat_included": "Pricing includes {{percentage}}% VAT.",
				"billing_tax_vat_paypal_included": "Pricing includes {{paypal}}% PayPal service charge and {{tax}}% VAT.",
				"bisexual": "$t(categories.bi)",
				"city": "City",
				"close_account_note": "If you choose to close your account, you can always reactivate it at any time.",
				"contact_information": "My Profile",
				"contact_information_footnote": "Most of this information is collected when you sign up and is required as a means of limiting fraudulent activity on our site. We do not resell or redistribute this information",
				"contact_information_headnote": "To update this information, please visit the desktop version of this site.",
				"contact_information_legal": "Read our {{ppLink}} and {{tacLink}} here.",
				"contact_information_subhead": "Your Personal Information",
				"contact_us": "$t(dailylimit.contactUs)",
				"contacting_customer_service": "contacting customer service",
				"continue_as": "or continue as a",
				"country": "Country",
				"display_name": "$t(forms.nickname_label)",
				"female": "Female",
				"first_name": "$t(forms.fname_label)",
				"free_premium_account": "Free Premium Account",
				"gay": "$t(categories.gay)",
				"gender": "Gender",
				"gmt": "$t(forms.gmt)",
				"last_name": "$t(forms.lname_label)",
				"male": "Male",
				"nickname_requirements": "Nicknames must be 4-32 characters, alphanumeric characters only, no spaces.",
				"oneclick": {
					"authorize_gold": "Authorize GOLD",
					"error": "$t(consent_settings.error)",
					"legal": "$t(account.prepaid_balance.legal)",
					"one_time_fee": "A one time activation fee of \u003C0\u003E{{amount}}\u003C\u002F0\u003E is required to give GOLD.  This amount will be credited back to you once you use it.",
					"send_performer_gold": "Send {{performerNickname}} GOLD",
					"forced_migration_upsell_origin_site": "{{originSiteName}}",
					"forced_migration_upsell_destination_site": "is now {{destinationSiteName}}",
					"verify_cvv": "Just verify the CVV of your card on file, and let the fun begin!",
					"continue": "CONTINUE"
				},
				"outstanding_balance_amount_label": "Outstanding balance due: ",
				"outstanding_balance_due_text": "This balance must be paid in full before we can restore full site access.",
				"outstanding_balance_payoff_button_text": "Submit Payment",
				"outstanding_balance_payoff_failed_or_incomplete": "We were unable to process your payment completely. Please update your payment information below or \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E for assistance.",
				"outstanding_balance_payoff_form_submitting": "Processing payment...",
				"outstanding_balance_payoff_success_toast": "Thank you! Enjoy the site.",
				"outstanding_balance_text": "Your account has an outstanding balance.",
				"outstanding_balance_title": "Outstanding Balance",
				"outstanding_balance_update_payment_text": "Once your credit card information is successfully updated, we will attempt to collect the entire outstanding balance.",
				"outstanding_balance_zero_balance_fbiu": "To access paid services, please update your payment information below or \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E for assistance.",
				"payment_information": "Update Payment Information",
				"payment_information_explanation_freemium": "Membership is always 100% FREE! A form of payment simply allows you to turn up the heat at any time.",
				"payment_information_explanation_multi": "Select your method of payment to be redirected to our secure payment processor.",
				"payment_information_explanation_single": "Click the button below to be redirected to our secure payment processor.",
				"payment_information_explanation_upgrade_multi": "Upgrade your account simply by adding a form of payment. Unlock every site feature and access fully explicit cams and videos. Membership is always 100% free.",
				"payment_information_explanation_upgrade_single": "Unlock every site feature and access fully explicit cams and videos simply by adding a form of payment. You'll have the power to spend and membership is always 100% free.",
				"payment_information_howto": "You may update your payment information or close your account by \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E 24 hours a day, 7 days a week.",
				"payment_information_next": "Next",
				"payment_information_stash_notice": "If card is updated to not be a prepaid card, any remaining prepaid balance will be converted to a site credit and show under 'Discounts and Credits'.",
				"payment_update_help": "Our payment processing partners are safe, secure, and completely discreet. If you have any additional questions, or if you wish to update your payment information by phone, you can do that by \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E.",
				"paypal_account_information": "PayPal Account Information",
				"phone": "Phone Number (optional)",
				"phone_invalid": "Numerals and - + ( ) only.",
				"premium_access_upgrade": "Premium Access Upgrade",
				"upsell_billing_description": "Verify Your Payment Details",
				"prepaid_balance": {
					"add_funds": "Add Funds",
					"amount_minimum_label": "Minimum",
					"bad_response_link": "Contact Customer Support",
					"could_not_get_balance": "Unable to retrieve prepaid balance.",
					"could_not_update": "Unable to update prepaid balance.",
					"current_balance": "Your current prepaid account balance",
					"error_over_maximum": "Please enter a smaller amount",
					"error_under_minimum": "Please enter a larger amount",
					"general_error_title": "Error",
					"legal": "{{billedAs}} will appear on your cardholder statement.",
					"new_account_balance": "Your new account balance will be:",
					"payment_amount": "Payment Amount:",
					"prepaid_incentive_bonus": "get {{incentiveBonus}} FREE!",
					"prepaid_incentive_bonus_credit": "Bonus Credit:",
					"prepaid_incentive_current_balance": "Your current account balance is ",
					"prepaid_incentive_select_package": "Select Package",
					"prepaid_incentive_title": "Credit Package",
					"reload_options_add_funds": "Add {{localAmount}}",
					"reload_options_add_funds_custom": "Enter Custom Amount",
					"reload_options_add_funds_with_incentive": "Add {{localAmount}} + {{incentiveAmount}} Bonus Credit",
					"sales_tax": "Sales Tax",
					"title": "Prepaid Balance",
					"total": "Total:",
					"try_again": "Try Again",
					"update_stash_balance_button": "Add Funds",
					"update_success": "Funds successfully added.",
					"usd_equivalent": "Approximate USD equivalent:",
					"VAT": "VAT",
					"error": {
						"inactive_payment_instrument": "Your last transaction is still pending. Please try again once it has cleared.",
						"transaction_not_completed": "You have a pending transaction. In order to top up your balance, please update your payment information and select a different payment method.",
						"transaction_not_completed_with_date": "You have a pending transaction. You can use the ACH \u002F Bank Draft payment option after {{clearDate}}. To top up your balance now, please update your payment information and select a different payment method.",
						"verification_required": "Please contact Customer Service to verify your payment method."
					}
				},
				"purchase_history": {
					"balance": "Your current account balance is: ",
					"no_history": "You do not have any recent purchase history. Stay inside and have some fun today!",
					"page_description": "Thank you for choosing {{sitename}}. A summary of your latest purchases is listed below, limited to the most recent 100 items from the past 60 days.",
					"page_description_discounts_info": "Discounts applied at collection will not be reflected in pricing or taxes and fees.  In those instances, amount collected will be less than displayed.",
					"page_description_load_failure": "We could not find any recent purchases for your account.",
					"page_description_load_limit": "Purchase history is limited to the most recent 100 items from the past 60 days.",
					"page_description_tax_fee_info": "*All tax and fee estimates are based on latest percentages.  Older purchases may not reflect correctly but collected amounts do.",
					"page_header": "Purchase History",
					"spend_attribute_labels": {
						"CONTENT_FEED": "Activity Feed GOLD",
						"GOLD_MENU": "GOLD Menu",
						"MEDIA_BUNDLE": "Media Bundle",
						"MESSENGER": "Messenger GOLD",
						"MOVIE": "Video",
						"PHOTO": "Photo",
						"QUICK_TIP": "Quick GOLD",
						"SPIN": "Spin GOLD"
					},
					"spend_type_labels": {
						"BLOCK": "Block Session",
						"GOLD": "GOLD",
						"GOLD_AFTER_SHOW": "GOLD",
						"GOLD_MENU": "GOLD Menu",
						"GOLD_ONLY_GOLD": "GOLD",
						"GOLD_ONLY_GOLD_MENU": "GOLD Menu",
						"GOLD_ONLY_QUICK_TIP": "Quick GOLD",
						"GOLDSHOW": "GOLD Show",
						"MESSENGER": "Messenger",
						"MOVIE": "Movie",
						"PARTNER": "Partner",
						"PARTNER_SUBSCRIPTION": "Partner Subscription",
						"PURCHASE": "Purchase",
						"QUICK_TIP": "Quick GOLD",
						"STREAM": "Show",
						"SUBSCRIPTION": "Subscription"
					},
					"transaction_line_date_label": "Date: ",
					"transaction_line_discount_applied_label": "DISCOUNT Applied: ",
					"transaction_line_discount_included_label": "Includes discount ",
					"transaction_line_discount_label": "Discount ",
					"transaction_line_duration_label": "Duration: ",
					"transaction_line_fee_included_label": "Includes estimated fee ",
					"transaction_line_fee_label": "Estimated fee ",
					"transaction_line_rate_label": "Rate: ",
					"transaction_line_spend_type_label": "Purchase: ",
					"transaction_line_subtotal_label": "Subtotal: ",
					"transaction_line_tax_included_label": "Includes estimated tax ",
					"transaction_line_tax_included_split_label": "Includes estimated {{taxType}} ",
					"transaction_line_tax_label": "Estimated tax ",
					"transaction_line_total_collected_label": "TOTAL Collected: ",
					"transaction_line_total_label": "Total: ",
					"transaction_type": {
						"FREECREDIT": "Free Credit",
						"SPEND": "Purchase"
					}
				},
				"reactivation_button": "Reactivate My Account",
				"reactivation_customer_support_link": "customer support",
				"reactivation_email_instructions": "We'll send a reactivation email to the address below to get you back in the game:",
				"reactivation_help_text": "Oops! It looks like your current account needs to be reactivated.",
				"reactivation_start_failed": "An error has occurred with your reactivation request. Please contact \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E for assistance.",
				"reactivation_start_success": "Thank you! You should receive your reactivation email shortly.",
				"reactivation_start_success_help_text": "Contact \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E if you did not receive your email or have further questions.",
				"reactivation_title": "Account Reactivation",
				"required": "$t(forms.required)",
				"reset_form": "$t(forms.reset_form)",
				"response_error": "Shoot! That didn't work.",
				"response_success": "Success!",
				"response_success_message": "Your payment information has been updated.",
				"response_waiting": "It's gettin' hot in here...",
				"save_contact_info": "$t(forms.submit)",
				"save_profile": "Save Profile",
				"saving": "Saving",
				"set_nickname_error": "That nickname does not match our requirements.",
				"set_nickname_help": "Set the nickname performers will see when you chat with them.",
				"settings": "Account Settings",
				"sexual_preference": "Sexual Preference",
				"state_prov": "State\u002FProvince",
				"state_prov_invalid": "Select a State or Province",
				"straight": "$t(categories.straight)",
				"support": "For immediate assistance, please {{contactUs}}.",
				"terms_and_conditions": "$t(page_titles.terms_and_conditions)",
				"time_zone": "Time Zone",
				"trans_female": "Trans Female",
				"trans_male": "Trans Male",
				"update": {
					"content": "If you would like instant access please select an alternate payment option below:",
					"footer": "If your pending payment gets approved after you have selected a new payment option, your account will be credited.",
					"header": "Unlock Premium Access",
					"subheader": "Your payment is pending"
				},
				"update_button": "Update Billing Info",
				"zip": "Zip\u002FPostal Code",
				"zip_invalid": "$t(zip_invalid)",
				"create_nickname": "Create your nickname?",
				"accept": "Ok"
			},
			"age_gate": {
				"adult_content": "Adult Content",
				"agree": "I Agree",
				"cookie": "Cookie",
				"cookie_policy": "Cookie Policy",
				"enter": "Enter",
				"exit": "Exit",
				"heading": "This site contains sexually explicit material.",
				"message": " Enter ONLY if you are over 18. By using the site I accept the \u003C0\u003E{{CookieLink}}\u003C\u002F0\u003E, \u003C1\u003E{{PPLink}}\u003C\u002F1\u003E, and \u003C2\u003E{{TACLink}}\u003C\u002F2\u003E.",
				"policy": "By using this site I accept the \u003C0\u003E{{CookieLink}}\u003C\u002F0\u003E, \u003C1\u003E{{PPLink}}\u003C\u002F1\u003E, and \u003C2\u003E{{TACLink}}\u003C\u002F2\u003E.",
				"reject": "No, I'll leave",
				"sexually_explicit_content": "Sexually Explicit Material - You Must Be 18+"
			},
			"age_id_redirection": {
				"heading": "UK law requires you to verify your age before proceeding.",
				"message": "Redirecting you to the Age ID verification page."
			},
			"back": "Back",
			"become_a_model": {
				"get_started": "Get Started Now",
				"income": "Make up to $10k a week!",
				"join": "Join the largest and most popular live cam model community in the world. It's time to be your own boss and start making money from the comfort of your own home.",
				"learn_more": "Learn More",
				"needs": "All you need is a computer, a webcam and an internet connection to start making money today!",
				"page_title": "Become a Model",
				"schedule": "Set your own schedule",
				"testimonial": "The best money I've ever made. I wish I had started doing this YEARS ago!",
				"tools_and_support": "World-class tools & support",
				"visitors": "Millions of daily visitors",
				"work_from_home": "Work from home"
			},
			"browse_live_models": "Browse Live Models",
			"cams": "Cams",
			"cancel": "Cancel",
			"categories": {
				"all_az": "Categories A-Z",
				"allcams": "All Live Cams",
				"allgirls": "All Girls Cams",
				"allgirls_label": "All",
				"allguys": "All Guys Cams",
				"allguys_label": "All",
				"alltrans": "All Trans Cams",
				"alltrans_label": "All",
				"allgirls_short": "All Girls",
				"allguys_short": "All Guys",
				"alltrans_short": "All Trans",
				"alternadudes": "Alternative",
				"anal": "Anal",
				"analguy": "Anal Sex",
				"asian": "Asian",
				"asianguy": "Asian",
				"athleticguy": "Athletic",
				"babes": "Babes",
				"bbw": "BBW",
				"bdsm": "BDSM",
				"bear": "Bears",
				"bi": "Bisexual",
				"bigcock": "Big Cock",
				"bigtits": "Big Tits",
				"blackguy": "Black",
				"blonde": "Blonde",
				"bondage": "BDSM",
				"brunette": "Brunette",
				"coeds": "Co-Eds",
				"collegeguy": "College",
				"couples": "Couples",
				"couplesguy": "Couples",
				"curvy": "Curvy",
				"daddy": "Daddy",
				"ebony": "Ebony",
				"favorites": "My Favorites",
				"feet": "Feet",
				"fratboys": "Frat Boys",
				"gay": "Gay",
				"girlfriends": "Non-Nude",
				"gold": "GOLD Shows",
				"granny": "Granny",
				"group_title": "{{categoryGroup}} Categories",
				"groups": {
					"friendsnonnude": "Friends",
					"guycams": "Guys",
					"livesex": "Girls",
					"specialtycams": "Specialty",
					"title": "Category Pages",
					"transcams": "Trans"
				},
				"groupsex": "Group Sex",
				"guycams": "Guys",
				"guyfriends": "Non-Nude",
				"guynextdoor": "Guy Next Door",
				"hairy": "Hairy",
				"housewives": "Housewives",
				"hugetits": "Huge Tits",
				"ladyboy": "Ladyboy",
				"latina": "Latina",
				"latino": "Latino",
				"leather": "Leather",
				"lesbian": "Lesbian",
				"mature": "Mature",
				"matureguy": "Mature",
				"mediumtits": "Medium Tits",
				"milf": "MILF",
				"muscle": "Muscle",
				"muscule": "Muscle",
				"new": "New Models",
				"newfem": "New Models",
				"newmasc": "New Models",
				"petite": "Petite",
				"pornstar": "Pornstar",
				"pregnant": "Pregnant",
				"pregoldshow": "GOLD Shows",
				"pregoldshow_subtitle": "Flat rate interactive group shows",
				"recents": "Recently Viewed",
				"redhead": "Redhead",
				"shaved": "Shaved Pussy",
				"smalltits": "Small Tits",
				"smokingcigars": "Smoking",
				"specialtycams": "Specialty Cams",
				"straight": "Straight",
				"teen": "Teen 18+",
				"teen_label": "Teen 18+",
				"title": "Categories",
				"toys": "Toys",
				"transcams": "Trans",
				"transgirl": "Transgirl",
				"transguy": "Transguy",
				"trimmed": "Trimmed",
				"tsasian": "Asian",
				"tsbdsm": "BDSM",
				"tsbigcock": "Big Cock",
				"tsbigtits": "Big Tits",
				"tsblackguy": "Black",
				"tsbrunette": "Brunette",
				"tshugetits": "Huge Tits",
				"tslatino": "Latino",
				"tsmature": "Mature",
				"tsmediumtits": "Medium Tits",
				"tssmalltits": "Small Tits",
				"tsteen": "Teen 18+",
				"tsuncut": "Uncut",
				"twink": "Twink",
				"uncut": "Uncut",
				"white": "White Girls"
			},
			"ccpa": {
				"checkbox": "Do not sell my personal information"
			},
			"click_here": "GO",
			"consent_settings": {
				"accept": "Accept",
				"description": "In order to provide the best user experience to our customers, we would like your permission for the following. Leaving these unchecked will not block your access.",
				"error": "A system error has occurred. Please try again, or \u003C0\u003E{{contactCustomerSupportLink}}\u003C\u002F0\u003E.",
				"intro": "In order to provide the best user experience to our customers, we would like your permission for the following. Leaving these unchecked will not block your access.",
				"language_description": "This site may display my site language preference to performers.",
				"language_sharing": {
					"accept": "Yes",
					"decline": "No",
					"none": "None",
					"preferred_language": "Preferred Language",
					"select_preferred_language": "Select the language you would like performers to see when you chat with them.",
					"terms": "We've detected your language as English. Would you like to share this with models?"
				},
				"language_title": "Spoken Language",
				"marketing": "The site may use the email address I gave in order to send me promotional content and offers.",
				"marketing_description": "This site may use my email address in order to send me promotional content and offers.",
				"marketing_title": "Marketing",
				"noThanks": "No Thanks",
				"recommender_description1": "We will learn from how you use our site, including ",
				"recommender_description2": "special categories of data",
				"recommender_description3": ", to offer a more personalized experience.",
				"recommender_title": "Recommendations",
				"save_button": "Save",
				"special_categories": "Special Categories of data may include personal data revealing racial or ethnic origin, sex life and sexual orientation.",
				"title": "Privacy Settings",
				"xment": "The site may track my activities in order to determine the success of early access \u002F beta features.",
				"xment_description1": "We will learn from how you use our site, including ",
				"xment_description2": "special categories of data",
				"xment_description3": ", to determine the success of new features.",
				"xment_title": "Testing"
			},
			"contact_support": "Please contact our customer support.",
			"content_feed": {
				"end_of_feed": "You're all caught up.",
				"error_loading": "Sorry, we couldn't load your activity feed. Please try again.",
				"gold_modal": {
					"account_alert": "An issue has been detected with your account.",
					"account_payment_cta": "Please update your payment information or contact one of our customer service representatives.",
					"contact_support": "Contact Support",
					"error_oops": "Oops!",
					"header": "Send GOLD",
					"resend": "Resend",
					"send": "Send",
					"sending_gold": "Sending {{gold}} GOLD...",
					"sending_gold_limit_exceeded": "${{gold}} not sent. It exceeds your daily limit",
					"sending_gold_failed": "Your amount of {{gold}} GOLD failed to send",
					"success": "Success!",
					"update_info_button": "Update Info"
				},
				"icon_labels": {
					"diamond": "gem",
					"eggplant": "hard",
					"fire": "hot",
					"heart_eyes": "love",
					"hundred": "100",
					"peach": "juicy",
					"sweat_drops": "wet",
					"thumbs_up": "thumbs up"
				},
				"no_posts": "No posts in your feed, you should favorite some performers",
				"performer": {
					"offline_cta": "View Profile",
					"online_cta": "LIVE Now!"
				},
				"purchase_image": "Buy Now {{price}}"
			},
			"contest": {
				"available": "Available",
				"ends_in": "This contest ends in:",
				"error_message_1": "There are no live contests at this time.",
				"error_message_2": "Keep an eye out for future events!",
				"error_title": "Oops!",
				"filter": "Filter",
				"full_ranking": "Full Ranking",
				"refresh": "Refresh"
			},
			"continue": "Continue",
			"create_free_account": "Create Free Account",
			"credit_reminder": {
				"credit_available": "You have a credit of {{creditAmount}}",
				"dismiss_btn": "Dismiss"
			},
			"dailylimit": {
				"available": "Available:",
				"contactUs": "contact our support team",
				"current": "Change Your Daily Limit",
				"details": "All users have an adjustable daily limit of their funds available to spend. Once the chosen limit for the time period has been reached, the chat you are in will close and you won't be able to enter any paid services until the time period resets.",
				"failure": "We were unable to update your daily limit. Please make sure to close all open chat windows and try again. If issues persist, please contact \u003C0\u003E{{supportLink}}\u003C\u002F0\u003E.",
				"increments": "You may raise the spending limit in increments of {{formattedCurrency}}, if eligible.",
				"intro": "Raising and Lowering your Daily Limit",
				"maximum": "Maximum allowable limit:",
				"money": "{{sign}}{{amount}} {{currency}}",
				"option": "{{string}} $t(dailylimit.money)",
				"return_to_performer": "Return to your chat with {{performerNickname}}",
				"success": "Spending Limit Updated",
				"support": "support",
				"support_raise_limit": "To raise your limit beyond the maximum allowed (\u003C0\u003E{{maximumAllowed}}\u003C\u002F0\u003E), please \u003C1\u003E{{contactUs}}\u003C\u002F1\u003E.",
				"title": "Daily Spending Limit",
				"unknownerror": "An unknown error has occurred, please try again.",
				"update_spending_limit": "Update Spending Limit",
				"updatesuccess": "Your Daily Spending Limit has been updated.",
				"used": "Used:",
				"exceeds_daily_limit": "This item exceeds your daily spending limit."
			},
			"desktop_optout_button": "Switch to Previous Version",
			"desktop_optout_feedback": {
				"cutoff_notice": "Your ability to switch to a previous version of the site will be turned off on {{date}}. Please {{contactCustomerSupportLink}} with any questions.",
				"form_title": "Tell us why you're leaving",
				"q1": {
					"checkbox_label": "My favorite features are missing",
					"input_placeholder": "What is missing"
				},
				"q2": {
					"checkbox_label": "Something didn't work",
					"input_placeholder": "What didn't work"
				},
				"q3": {
					"checkbox_label": "I don't like the new look",
					"input_placeholder": "What didn't you like"
				},
				"submit_button": "Use Previous Version"
			},
			"dialogs": {
				"account_issue_detected": "Account Issue Detected",
				"account_unavailable": "An error has occurred. This account is unavailable.",
				"contact_us": "$t(support.title)",
				"dismiss": "Dismiss",
				"ok": "$t(ok)",
				"solve_problem": "To quickly solve this problem, please contact a customer support representative."
			},
			"discounts_and_credits": {
				"balance": "Balance",
				"cs_credit": "Customer Service Credit",
				"date": "Date",
				"generic_error": "Oh no! Something went wrong. Please try again later.",
				"misc": "Miscellaneous",
				"no_discounts": "You do not have any discount or credit history available.",
				"prepaid_credit": "Prepaid Credit",
				"promotion": "Promotion",
				"reward": "Reward",
				"type": "Type",
				"used": "Credit Used"
			},
			"discover": "Discover",
			"error_message": "Oops! You caught us with our pants down...",
			"error_pages": {
				"not_found": "Page not found.",
				"return_home": "Return home."
			},
			"fanclub": {
				"browse_models": "Browse Models",
				"byline": "Fan Clubs are monthly subscriptions to individual models, each with unique benefits. To explore,",
				"cannot_load": "Fan Clubs could not be loaded at this time.",
				"labels": {
					"actions": "Plan Actions",
					"next_bill_date": "Next Bill Date",
					"performer": "Performer",
					"plan_type": "Plan Type",
					"status": "Status"
				},
				"no_fanclubs": "Fan Clubs are monthly subscriptions to individual models, each with unique benefits. To explore,",
				"plan": {
					"actions": {
						"cancel": "Unsubscribe",
						"renew": "Renew",
						"view_plans": "View Plans"
					},
					"benefits": {
						"continue_to_enjoy": "Continue to enjoy the Fan Club benefits until",
						"discount_applied": "Enjoy your Fan Club discount.",
						"no_live_show_discount": "This plan does NOT have a live show discount",
						"percent_exclusive_show_discount": "{{discountPercentage}} discount on all Exclusive Shows",
						"percent_private_show_discount": "{{discountPercentage}} discount on all Private Shows",
						"special_icon": "Special icon next to your name in chat",
						"video_all_access": {
							"description": "View all videos available in my store for FREE. Never miss a single new video!",
							"headline": "Video Store Access"
						},
						"video_all_access_private": {
							"description": "Gain FREE access to all my secret videos that aren't available in my store. Don't miss this special content!",
							"headline": "Secret Video Access"
						},
						"video_collection": "View your Fan Club videos in your",
						"video_collection_link": "Video Collection",
						"video_selected_access": "FREE Access to select videos in my video store",
						"video_upsell": "Fan Club members get FREE access to my videos!",
						"will_end_on": "Benefits will end on"
					},
					"billing": {
						"next_date": "Next Billing Date"
					},
					"cancel": {
						"cancel_fanclub_subscription": "Cancel Fan Club Subscription",
						"confirm_message": "Are you sure you want to cancel your Fan Club subscription for {{performerNickname}}?",
						"dont_cancel": "Don't Cancel",
						"end_subscription": "Unsubscribe"
					},
					"list": {
						"cannot_load": "Couldn't load {{performerNickname}}'s Fan Club Plans",
						"fanclub_plans": "{{performerNickname}}'s Fan Club Plans"
					},
					"recurringtype": {
						"daily": "Daily",
						"monthly": "Monthly"
					},
					"renew": {
						"cancel": "Cancel",
						"confirm_message": "Are you sure you want to renew your Fan Club subscription for {{performerNickname}}?",
						"renew_fanclub_subscription": "Renew Fan Club Subscription",
						"renew_subscription": "Renew"
					},
					"status": {
						"active": "Active",
						"cancelled": "Cancelled",
						"onhold": "On Hold"
					}
				},
				"title": "Fan Club Management"
			},
			"federated_module": {
				"disable_adblock": "You might be seeing this error because you are using an adblocker. Please allow {{domain}} in any ad blocking software you are running, update the block lists, and refresh the page."
			},
			"feedback": {
				"cancel": "Cancel",
				"error_message": "Please provide an explanation for your selection.",
				"footer_link": "Send Us Your Feedback",
				"form_title": "I would like to",
				"free_text": {
					"input_placeholder": "Be as specific as possible",
					"label": "Any other feedback you want to share with us?"
				},
				"q1": {
					"checkbox_label": "Request a feature",
					"input_placeholder": "What would you like to see implemented?"
				},
				"q2": {
					"checkbox_label": "Report a bug",
					"input_placeholder": "What didn't work?"
				},
				"q3": {
					"checkbox_label": "Comment on the way site looks",
					"input_placeholder": "What have you noticed?"
				},
				"submit_button": "Send Feedback",
				"success_message": "Your insights are incredibly valuable to us. Check back soon as we continue to roll out new features and improvements.",
				"success_title": "Thank You!"
			},
			"footer": {
				"18_plus": "All models appearing on this website are 18 years or older.",
				"copyright": "© 2003 - {{currentYear}} {{domain}}. All rights reserved.",
				"dmca": "$t(page_titles.dmca)",
				"rc2257": "$t(page_titles.rc2257)",
				"site_language": "$t(mega_menu.site_language)",
				"support": "Support",
				"terms_and_conditions": "$t(page_titles.terms_and_conditions)",
				"theme_toggle_header": "Theme Color",
				"theme_types": "Light\u002FDark",
				"content_removal": "$t(page_titles.content_removal)",
				"content_removal_footer": "Content Removal",
				"affiliates": "Affiliates",
				"dsa": "$t(page_titles.dsa)",
				"legal": "Legal",
				"visit_main_site": "Visit our main site ",
				"terms_conditions": "Terms & Conditions",
				"privacy_policy": "$t(page_titles.privacy_policy)",
				"billing": {
					"access_paid_services": "If you choose to access clearly marked paid services, charges will show up as '{{descriptor}}'"
				}
			},
			"forms": {
				"bad_response": "Sorry, an error has occurred. Please try again.",
				"email_label": "Email",
				"fname_label": "First Name",
				"gmt": "GMT",
				"invalid_email": "Invalid Email Address",
				"lname_label": "Last Name",
				"nickname_label": "Nickname",
				"required": "This field is required.",
				"reset_form": "Reset Form",
				"submit": "Submit"
			},
			"freemium": {
				"pre_spend_check_dialog_message": "You do not have any payment method on file. Click OK to add a payment method.",
				"pre_spend_check_dialog_title": "Upgrade to Premium"
			},
			"gdpr_combined_consent": {
				"accept": "Accept",
				"decline": "No Thanks",
				"learn": "Learn More",
				"subtitle": "We'll provide you the best possible user experience by learning from how you use our site.",
				"title": "Want an optimized experience?"
			},
			"gdpr_marketing_consent": {
				"accept": "Accept",
				"decline": "No Thanks",
				"terms": "The site may use my email address to send me promotional content and offers."
			},
			"gdpr_recommender_consent": {
				"accept": "Accept",
				"decline": "No Thanks",
				"subtitle": "We'll provide you the best possible user experience by learning from how you use our site.",
				"title": "Want an optimized experience?"
			},
			"gdpr_tracking_consent": {
				"accept": "Accept",
				"decline": "No Thanks",
				"terms": "By accepting, you agree to the analysis of your site activities to measure site enhancements."
			},
			"google_recaptcha": {
				"and": "and",
				"apply": "apply.",
				"privacy_policy": "Privacy Policy",
				"protected": "This site is protected by reCAPTCHA and the Google",
				"terms": "Terms of Service"
			},
			"hero_modal": {
				"user_offer_button": "Redeem My Credit",
				"user_offer_consumed": "Your FREE {{localCurrencyAmount}} credit has been applied. Enjoy!",
				"user_offer_consumed_error": "Unfortunately the offer has expired.",
				"user_offer_message_text": "Have some fun on us!",
				"user_offer_welcome_back_text": "Welcome Back!"
			},
			"hero_slider": {
				"free_account": "Free Account",
				"gold_show_label": "Gold Show",
				"gold_show_started": "Show is starting now...",
				"gold_show_starting": "Starts in ",
				"new_show_label": "New Model",
				"trending_show_label": "Trending",
				"join_free": "Join Free"
			},
			"landing_page": {
				"about": "About",
				"recently_active": "Recently Active",
				"meet_people": "Meet exciting people & chat live",
				"quote_01": "Always fun and friendly people",
				"quote_02": "You never know who you will meet",
				"community_connections": "A live community built for connections",
				"members": "10M+ Members",
				"online": "2K+ Online",
				"countries": "150+ Countries",
				"browse_members": "Browse Members",
				"say_hello": "Drop by and say hello",
				"secure_fun": "Join thousands of people live now.  It's simple, secure, and fun!",
				"connect": "Connect",
				"join_rooms": "Join group or 1 on 1 chat rooms",
				"search": "Search",
				"find_people": "Tools to find like minded people",
				"chat_live": "Chat Live",
				"full_hd": "Full HD video chat from any device",
				"age_restriction": "Must be 18+ to join",
				"chat_live_now": "Chat Live Now",
				"foundation_text": "Founded in 2003 {{sitename}} has been a pioneer in live video chat experiences with a singular goal of bringing people together online for a fun, vibrant and exciting exchanges. Having grown to over 10 million registered users around the globe {{sitename}} is sure to find a connection fo you. We are always free to join and you can start chatting immediately.",
				"stream_text": "With true HD video streams, crystal clear audio and real time chat {{sitename}} rivals being being there in person. Enjoy text chat or start a video chat as simple as a click. Optimized to work seamlessly on any device and live 24\u002F7 don't miss your chance to catch every smile, laugh, and wink without leaving the comfort of your own home.",
				"go_ahead_text": "Go ahead, expand your horizons and take a chance. You never know who you may meet!",
				"free_join": "Join For Free",
				"about_site": "About {{sitename}}",
				"legal_note": "You must be 18 or older to access this site.",
				"login_button_label": "$t(login.login)",
				"signup_button_label": "Sign Up",
				"title": "Members Only"
			},
			"livechat_help": "Live Chat Help",
			"loading_payment_info": "Retrieving payment information...",
			"login": {
				"account_error": "Something went wrong, please try again.",
				"auth_error": "We're sorry. Either the email address or password provided is incorrect.",
				"performer_login_error": {
					"text": "For security reasons login through {{siteName}} for performers is no longer available. You are required to login through \u003C0\u003EStreamate Models Platform\u003C\u002F0\u003E.",
					"default_site_name": "this site"
				},
				"bad_response": "$t(forms.bad_response)",
				"email_label": "$t(forms.email_label)",
				"email_reset": "Reset Password link has been sent to your inbox.",
				"forgot_expire": "This link will expire in 1 hour.",
				"forgot_help": "Enter your email address below. We will send you an email with a link that will allow you to select a new password.",
				"forgot_label": "Send",
				"forgot_password": "Forgot password?",
				"forgot_password_failed": "$t(login.forgot_password_success)",
				"forgot_password_success": "To access your account, check your email at {{email}}.",
				"free_account": "Free Account",
				"goauth_generic_error": "We're sorry. There was a problem with your login. Please navigate back to the Free Account page and try again, or recover your account using \"Forgot Password\" below.",
				"goauth_signin": "Sign in with Google",
				"login": "Log In",
				"not_member": "Not a member yet?",
				"or": "or",
				"password_label": "Password",
				"reset_password": "Reset Password",
				"site_language": "$t(mega_menu.site_language)",
				"support": "$t(mega_menu.support)",
				"title": "Member Login",
				"two_factor_authentication": {
					"title": "Check Your Email",
					"subtitle": "We've sent a log in link. If you don't see it, check your spam folder. Still need help?",
					"contact_support": "Contact Support"
				},
				"welcome_back": "Welcome back"
			},
			"media_categories": {
				"all_az": "Categories A-Z",
				"all": "All",
				"allcams": "All Live Performer Videos",
				"allgirls": "All Girls Videos",
				"allguys": "All Guys Videos",
				"alltrans": "All Trans Videos",
				"alternadudes": "Alternative",
				"anal": "Anal Sex",
				"analguy": "Anal Sex",
				"asian": "Asian",
				"asianguy": "Asian",
				"athleticguy": "Athletic",
				"babes": "Babes",
				"bbw": "BBW",
				"bdsm": "BDSM",
				"bear": "Bears",
				"bi": "Bisexual",
				"bigcock": "Big Cock",
				"bigtits": "Big Tits",
				"blackguy": "Black",
				"blonde": "Blonde",
				"bondage": "Bondage",
				"brunette": "Brunette",
				"coeds": "Co-Eds",
				"collegeguy": "College",
				"couples": "Couples",
				"couplesguy": "Couples",
				"curvy": "Curvy",
				"daddy": "Daddy",
				"ebony": "Ebony",
				"favorites": "My Favorites",
				"feet": "Feet Fetish",
				"fratboys": "Frat Boys",
				"gay": "Gay",
				"girlfriends": "Non-Nude",
				"gold": "GOLD Shows",
				"granny": "Granny",
				"group_title": "{{categoryGroup}} Categories",
				"groups": {
					"friendsnonnude": "Friends",
					"guycams": "Guys",
					"livesex": "Girls",
					"specialtycams": "Specialty",
					"title": "Category Pages",
					"transcams": "Trans"
				},
				"groupsex": "Group Sex",
				"guycams": "Guys",
				"guyfriends": "Non-Nude",
				"guynextdoor": "Guy Next Door",
				"hairy": "Hairy Pussy",
				"housewives": "Housewives",
				"hugetits": "Huge Tits",
				"ladyboy": "Ladyboy",
				"latina": "Latina",
				"latino": "Latino",
				"leather": "Leather",
				"lesbian": "Lesbian",
				"mature": "Mature",
				"matureguy": "Mature",
				"mediumtits": "Medium Tits",
				"muscle": "Muscle",
				"muscule": "Muscle",
				"new": "New Models",
				"newfem": "New Models",
				"newmasc": "New Models",
				"petite": "Petite Body",
				"pornstar": "Pornstar",
				"pregnant": "Pregnant",
				"pregoldshow": "GOLD Shows",
				"pregoldshow_subtitle": "Flat rate interactive group shows",
				"recents": "Recently Viewed",
				"redhead": "Redhead",
				"shaved": "Shaved Pussy",
				"smalltits": "Small Tits",
				"smokingcigars": "Smoking",
				"specialtycams": "Specialty Cams",
				"straight": "Straight",
				"teen": "Teen 18+",
				"title": "Categories",
				"toys": "Toys",
				"transcams": "Trans",
				"transgirl": "Transgirl",
				"transguy": "Transguy",
				"trimmed": "Trimmed",
				"tsasian": "Asian",
				"tsbdsm": "BDSM",
				"tsbigcock": "Big Cock",
				"tsbigtits": "Big Tits",
				"tsblackguy": "Black",
				"tsbrunette": "Brunette",
				"tshugetits": "Huge Tits",
				"tslatino": "Latino",
				"tsmature": "Mature",
				"tsmediumtits": "Medium Tits",
				"tssmalltits": "Small Tits",
				"tsteen": "Teen 18+",
				"tsuncut": "Uncut",
				"twink": "Twinks",
				"uncut": "Uncut",
				"white": "White Girls"
			},
			"media_reporting": {
				"cancel_report": "Cancel",
				"error_report": "Error reporting media.",
				"reasons": {
					"TosViolation": "Violates the site's Terms of Service",
					"RightsInfringement": "Infringes on my rights or other legal concern",
					"CopyrightConcern": "Stolen or infringing material (copyright concerns)",
					"ContentViolation": "Abusive, violent, harmful, or hateful",
					"ConcernForMinors": "Potentially includes a minor"
				},
				"report_blurb": "Tell us why you're reporting this media:",
				"report_title": "Report Media",
				"submit_report": "Report Media",
				"success_report": "Media has been reported and is under review."
			},
			"media_store": {
				"add": "Add",
				"fan_club": {
					"media_access": {
						"FAN_CLUB_PAID": {
							"tooltip": "You got this video by joining {{performerName}}'s Fan Club"
						},
						"FAN_CLUB_PRIVATE": {
							"tooltip": "You got this secret video by joining {{performerName}}'s Fan Club"
						}
					}
				},
				"media": "Media",
				"media_collection": "My Media Collection",
				"number_of_photos": "Showing {{currentRange}} of {{numberOfPhotos}}",
				"number_of_photos_you_have": "You have {{numberOfPhotos}} photos",
				"number_of_videos": "Showing {{currentRange}} of {{numberOfVideos}}",
				"number_of_videos_you_have": "You have {{numberOfVideos}} videos",
				"purchase_media": "Purchase Media",
				"purchase_photo": "Purchase Photo",
				"purchase_video": "Purchase Video",
				"remove": "Remove",
				"to_view_and_purchase": "to view and purchase media",
				"uploaded": "Uploaded {{date}}",
				"video_duration": "Video Length"
			},
			"mega_menu": {
				"account": "My Account",
				"back_to_menu": "Back to Menu",
				"change_password": "Change Password",
				"consent": "Privacy Preferences",
				"customer_support": "Support",
				"daily_spending_limit": "Daily Spending Limit",
				"discounts_and_credits": "Discounts \u002F Credits",
				"home": "Home",
				"inbox": "Inbox",
				"language": "Language",
				"logout": "Log Out",
				"logout_tooltip": "Log Out {{nickname}}",
				"messages": "Messages",
				"messenger": "Messenger",
				"my_mailbox": "My Mailbox",
				"my_media": "My Media Collection",
				"my_messages": "My Messages",
				"my_messenger": "My Messenger",
				"my_videos": "My Videos",
				"notification_settings": "Notification Settings",
				"payment_information": "Update Payment Information",
				"premium_access": "Premium Access",
				"premium_upgrade": "Premium Upgrade",
				"prepaid_balance": "Prepaid Balance",
				"profile": "Profile",
				"purchase_history": "Purchase History",
				"rewards": "My Rewards",
				"site_language": "Site Language",
				"site_settings": "Site Settings",
				"support": "Support",
				"welcome": "Welcome, \u003C0\u003E{{nickname}}\u003C\u002F0\u003E"
			},
			"messenger": {
				"attachment_browse": "Browse",
				"attachment_file_size": "2 MB maximum file size",
				"attachment_modal_heading": "Select Attachment",
				"attachment_size_error": "Your file is too big",
				"attachment_type_error": "Your file is not an image",
				"compose_new": "Create New Message",
				"compose_new_cta_subtext": "Please select Create New Message to start a conversation with one of your favorite models.",
				"compose_to": "To",
				"did_you_know": "Did you know?",
				"end_of_conversations": "End of Conversations",
				"gdpr_accept": "I accept",
				"gdpr_data_privacy": "Data Privacy",
				"gdpr_message": "In order to enable safe and secure online communication, we store these messages. Please check the box if you understand and approve.",
				"get_started_now": "Don't be shy, get started now!",
				"gold_failed": " Your amount of ${{gold}} GOLD failed to send",
				"issue_action": "Please update your payment information or contact one of our customer service representatives.",
				"issue_alert": "An issue has been detected with your account.",
				"join_show_link": "Join my Show",
				"just_now": "Just Now",
				"loading_image": "Loading image...",
				"loading_image_error": "Error loading image...",
				"message_failed": "Message Failed: ",
				"message_placeholder": "Say Something!",
				"modal_heading": "Send GOLD",
				"next": "Next",
				"no_messages": "You have no messages.",
				"offline": "Offline",
				"online": "Online",
				"oops": "Oops!",
				"optout_feedback": {
					"q2_checkbox_label": "Some of my messages are missing",
					"submit_button": "Use Classic Mode"
				},
				"performer_online": "I'm performing live. Join the show!",
				"pwa_desktop": "You can add Streamate Messenger to your desktop!",
				"pwa_desktop_error": "Unfortunately your desktop isn't supported by Streamate Messenger at this time. Please continue enjoying Messenger in the browser.",
				"pwa_ios": "You can add Streamate Messenger to your home screen! All you have to do is tap the share icon, scroll down to find the \"Add to Home Screen\" option and tap it.",
				"pwa_mobile": "You can add Streamate Messenger to your home screen!",
				"pwa_mobile_error": "Unfortunately your device\u002Fbrowser isn't supported by Streamate Messenger at this time. Please continue enjoying Messenger in the browser.",
				"resend": "Resend",
				"search_perf_name": "Search Performer Name",
				"send": "Send",
				"send_or_give": "Send a message, or give GOLD.",
				"sending_gold": "Sending ${{gold}} GOLD...",
				"sent": "sent",
				"success": "Success!",
				"update": "Update Info",
				"view_profile_link": "View my Profile",
				"welcome": "Welcome to Messenger!",
				"welcome_connect": "Connect with performers 1-on-1.",
				"welcome_get_started": "Send messages, GOLD, and receive explicit content privately and securely.",
				"you": "You",
				"you_sent": "You sent"
			},
			"model_online": "{{performerName}} is now available",
			"my_media": {
				"error_message": "There was a problem retrieving your media. Please try again later.",
				"join_chat_now": "Join Live Chat",
				"live": "LIVE",
				"loading_data": "Loading Media List...",
				"media_description": "Media Description",
				"my_media_collection": "My Media Collection",
				"no_description": "No description",
				"no_photos": "You have no photos. Photos shared with you or purchased from a model will appear here.",
				"no_videos": "You have no videos. Videos shared with you or purchased from a model will appear here.",
				"sort_options": {
					"longest": "Longest",
					"modelAZ": "Model A-Z",
					"newest": "Newest",
					"oldest": "Oldest",
					"online": "Online",
					"priceHighest": "Highest Price",
					"priceLowest": "Lowest Price",
					"recentlyAdded": "Recently Added",
					"recentPurchases": "Trending",
					"searchScore": "Relevance",
					"shortest": "Shortest",
					"titleAZ": "Title A-Z"
				},
				"title": "$t(mega_menu.my_media)",
				"untitled": "Untitled",
				"watch_live_btn": "View Profile",
				"watch_now": "Watch now"
			},
			"my_videos": {
				"error_message": "There was a problem retrieving your videos. Please try again later.",
				"join_chat_now": "Join Live Chat",
				"live": "LIVE",
				"loading_data": "Loading Video List...",
				"my_video_collection": "My Video Collection",
				"no_description": "No description",
				"no_videos": "You have no videos. Videos shared with you or purchased from a model will appear here.",
				"sort_options": {
					"longest": "Longest",
					"modelAZ": "Model A-Z",
					"newest": "Newest",
					"oldest": "Oldest",
					"priceHighest": "Highest Price",
					"priceLowest": "Lowest Price",
					"recentlyAdded": "Recently Added",
					"recentPurchases": "Trending",
					"searchScore": "Relevance",
					"shortest": "Shortest",
					"titleAZ": "Title A-Z"
				},
				"title": "$t(mega_menu.my_videos)",
				"untitled": "Untitled",
				"video_description": "Video Description",
				"watch_live_btn": "View Profile",
				"watch_now": "Watch now"
			},
			"noscript": "You must enable javascript in your browser in order to use this site. You can click the link below for instructions.",
			"notificationsettings": {
				"title": "Notification Settings"
			},
			"offline": "Offline",
			"ok": "OK",
			"online": "Online",
			"page_titles": {
				"account_closed": "Account Closed",
				"account_issue": "Account Issue Detected",
				"account_reactivation": "Account Reactivation",
				"account_reactivation_success": "Account Reactivation Complete",
				"account_settings": "My Account",
				"call_us": "Call Us",
				"change_password": "Change Password",
				"consent_settings": "Privacy Settings",
				"contact_support": "Email Us",
				"content_feed": "Activity Feed",
				"daily_limit": "Daily Spending Limit",
				"discounts_and_credits": "Discounts and Credits",
				"dmca": "DMCA Notice of Copyright Infringement",
				"email_settings": "Email Preferences",
				"email_unsubscribe": "Email Unsubscribe",
				"fan_clubs": "Fan Club Management",
				"faq": "Frequently Asked Questions",
				"forgot_password": "Forgot Password",
				"leaderboard": "Leaderboard",
				"live_chat_support": "Live Chat Support",
				"login": "Member Login",
				"messenger": "Messenger",
				"notification_settings": "Notification Settings",
				"payment_info": "Payment Information",
				"prepaid_balance": "Prepaid Balance",
				"privacy_policy": "Privacy Policy",
				"profile": "User Profile",
				"purchase_history": "Purchase History",
				"rc2257": "18 U.S.C. 2257 and 2257A Record-Keeping Requirements Compliance Statement",
				"received_media": "My Media",
				"received_videos": "My Videos",
				"rewards": "Rewards",
				"signup": "Join",
				"support": "Support",
				"terms_and_conditions": "Terms and Conditions",
				"two_factor_authentication": "Two-Factor Authentication Required",
				"update_billing_info": "Update Billing Information",
				"update_payment_info": "Update Payment Information",
				"video_collection": "My Video Collection",
				"videostore": "Video Store",
				"content_removal": "Content Removal Request",
				"dsa": "EU DSA",
				"dsa_complaint_form": "EU DSA Complaint Form",
				"manual_user_verification": "Verification"
			},
			"pager": {
				"next": "Next",
				"previous": "Previous"
			},
			"refresh_page": "Refresh Page",
			"rewards": {
				"account_menu_desktop": "Rewards Dashboard",
				"achievement_name_big_spender": "Big Spender",
				"achievement_name_cam_show_lover": "Join 5 Private or Exclusive Shows",
				"achievement_name_fan_boy": "Join a Performer Fan Club",
				"achievement_name_favoritism": "Favoritism",
				"achievement_name_join_gold_show": "Join GOLD Show",
				"achievement_name_join_site": "Create a Premium Account",
				"achievement_name_make_a_wish": "Purchase a Wishlist Item",
				"achievement_name_mock_01": "Mock Achievement 01",
				"achievement_name_mock_02": "Mock Achievement 02",
				"achievement_name_mock_03": "Mock Achievement 03",
				"achievement_name_mock_04": "Mock Achievement 04",
				"achievement_name_mock_05": "Mock Achievement 05",
				"achievement_name_mock_06": "Mock Achievement 06",
				"achievement_name_mock_07": "Mock Achievement 07",
				"achievement_name_mock_08": "Mock Achievement 08",
				"achievement_name_mock_09": "Mock Achievement 09",
				"achievement_name_mock_10": "Mock Achievement 10",
				"achievement_name_notify_me": "Enable Notifications for a Performer",
				"achievement_name_spend_50_in_30": "Spend $50 Within 30 Days",
				"achievement_name_stream_time": "Stream Time",
				"achievement_name_use_cam2cam": "Use Cam2Cam in a Private or Exclusive Show",
				"achievement_name_video_collector": "Buy 3 Videos",
				"achievement_name_you_are_my_favorite": "Favorite a Performer",
				"achievement_unlocked": "Achievement Unlocked!",
				"achievements_info": "Localized Achievements description that perfectly conveys they benefits of this feature.",
				"achievements_modal_title": "Congratulations!",
				"achievements_title": "Achievements",
				"achievements_unlocked": "Achievements Unlocked!",
				"available_points": "available points",
				"complete": "complete",
				"current_tier_title": "My Rewards Level",
				"earned_points": "lifetime points earned",
				"error_message_achievements_summary": "There was an error loading your Achievements. Please refresh the page and try again.",
				"error_message_rewards_summary": "Sorry, we couldn't get your rewards summary. Please try again!",
				"load_more_achievements": "Load More",
				"max_tier_earning": "You are earning the maximum reward of {{currentTierMultiplier}}x points!",
				"minimum_redemption_requirement": "You need at least {{points}} available points to redeem for site credit.",
				"multiplier_info": "You are earning {{currentTierMultiplier}}x points",
				"new_member_greeting": "Welcome new member!",
				"next_tier": "Next Level",
				"points": "points",
				"points_to_site_credit": "Turn your available points into site credit.",
				"program_info": "My Rewards is a program that gives back to active members like you! Earn points and redeem across our site for special purchases or site credit.",
				"redeem": "redeem",
				"redeem_for_credit": "Redeem Points for Credit",
				"redeem_points": "Redeem Points",
				"redemption_pending_title": "Processing Redemption",
				"redemption_points_info": "Select how many points you would like to redeem in {{increment}} point increments.",
				"redemption_success_subtitle": "You have credit!",
				"redemption_success_title": "Congratulations!",
				"redemption_title": "Redeem For Credit",
				"reward_tiers": "Reward Levels",
				"reward_tiers_info": "Progress through levels to gain greater rewards across purchases.",
				"rewards_points_reminder": "You have {{rewardsPoints}} Rewards Points!",
				"site_credit_info": "Just keep spending - Credits are automatically applied before any additional charges.",
				"tier_multiplier": "Earn {{multiplier}}x points on qualifying spending",
				"tier_name_bronze": "bronze",
				"tier_name_gold": "gold",
				"tier_name_platinum": "platinum",
				"tier_name_silver": "silver",
				"tier_title_bronze": "Bronze Level",
				"tier_title_gold": "Gold Level",
				"tier_title_newbie": "New Member",
				"tier_title_platinum": "Platinum Level",
				"tier_title_silver": "Silver Level",
				"title": "My Rewards"
			},
			"ribbon": {
				"new": "New!"
			},
			"search": {
				"autocomplete": {
					"performer": "Performers",
					"tag": "Tags"
				},
				"added_favorite": "{{nickname}} was added to your favorites",
				"back_soon": "I'll be back soon.",
				"back_to_allcams": "Back to All Live Cams",
				"back_to_online": "Back to Online",
				"be_right_back": "I'll be right back.",
				"browse_allcams": "All Live Cams",
				"browse_allgirls": "Browse All Girls Cams",
				"browse_allguys": "Browse All Guys Cams",
				"browse_alltrans": "Browse All Trans Cams",
				"close": "Close",
				"contest": "Contest",
				"contest_login": {
					"description": "Contests are for members only. Please log in or create a free account",
					"title": "Log In to view Contest"
				},
				"done": "Done",
				"error_message": "We're working to fix the problem now. Please try again.",
				"error_title": "Oops! You caught us with our pants down...",
				"exclusive": "I'm performing an exclusive show.",
				"fallback_suggestions": "Here are some performers you might like:",
				"feature": "All Features",
				"feature_hd": "HD",
				"feature_party": "Party Chat",
				"feature_phone": "Phone",
				"filters": {
					"age_filter": "Age",
					"age_filter_options": {
						"20s": "20s (20-29)",
						"30s": "30s (30-39)",
						"40s": "40s (40-49)",
						"mature": "Mature 50+",
						"teen": "Teen 18+"
					},
					"body_hair_filter": "Body Hair",
					"body_hair_filter_options": {
						"furry": "Furry",
						"hairy": "Hairy",
						"moderatehair": "Moderately Hairy",
						"shavedtrimmed": "Shaved\u002FTrimmed",
						"smooth": "Smooth"
					},
					"body_type_filter": "Body Type",
					"body_type_filter_options": {
						"a_few_extra_pounds": "A few extra pounds",
						"athletic": "Athletic",
						"average": "Average",
						"bbw": "BBW",
						"compact": "Compact",
						"curvaceous": "Curvy",
						"curvy": "Curvy",
						"husky": "Husky",
						"muscular": "Muscular",
						"muscular_athletic": "Muscular\u002FAthletic",
						"one_big_boy": "One big boy",
						"petite": "Petite",
						"slender": "Slender"
					},
					"circumcised_filter": "Circumcised",
					"circumcised_filter_options": {
						"cut": "Cut",
						"uncut": "Uncut"
					},
					"clear_filters": "Clear Filters",
					"clear_filters_mobile": "Clear",
					"cocksize_filter": "Cock Size",
					"cocksize_filter_options": {
						"average": "Average",
						"big": "Big",
						"pocket_size": "Pocket Size",
						"whoa": "Whoa"
					},
					"language_filter": "Language",
					"cup_size_filter": "Cup Size",
					"cup_size_filter_options": {
						"average": "Average (B\u002FC)",
						"huge": "Huge (F+)",
						"large": "Large (C\u002FD\u002FE\u002FF)",
						"small": "Small (A\u002FB)"
					},
					"ethnicity_filter": "Ethnicity",
					"ethnicity_filter_options": {
						"asian": "Asian",
						"black": "Black",
						"east_indian": "East Indian",
						"european": "European",
						"hispanic": "Hispanic",
						"mediterranean": "Mediterranean",
						"middle_eastern": "Middle Eastern",
						"native_american": "Native American",
						"pacific_islander": "Pacific Islander",
						"roma": "Roma",
						"white": "White"
					},
					"eye_color_filter": "Eye Color",
					"eye_color_filter_options": {
						"blue": "Blue",
						"brown": "Brown",
						"gray": "Gray",
						"green": "Green",
						"hazel": "Hazel"
					},
					"feature_filter": "Features",
					"feature_filter_options": {
						"fanclub": "Fan Club",
						"interactivevibe": "Interactive Vibrator",
						"partychat": "Party Chat",
						"video": "Video",
						"voip": "Phone"
					},
					"feature_filter_tips": {
						"fanclub": "Join a Fan Club for exclusive rewards",
						"interactivevibe": "Activate vibrator by tipping",
						"partychat": "See all group chat",
						"video": "Purchase videos from your favorite performers",
						"voip": "Use your phone in an exclusive show"
					},
					"fetishes_filter": "Fetishes",
					"fetishes_filter_options": {
						"anal": "Anal",
						"bdsm": "BDSM",
						"creampie": "Creampie",
						"cuckold": "Cuckold",
						"deepthroat": "Deepthroat",
						"dominant": "Dominant",
						"facials": "Facials",
						"feet": "Feet",
						"femdom": "Femdom",
						"gagging": "Gagging",
						"lactation": "Lactation",
						"leather": "Leather",
						"roleplay": "Roleplay",
						"rubber\u002Flatex": "Rubber\u002FLatex",
						"shaving": "Shaving",
						"smoking": "Smoking",
						"spanking\u002Fpaddling": "Spanking\u002FPaddling",
						"stockings\u002Fnylons": "Stockings\u002FNylons",
						"submissive": "Submissive",
						"underwear": "Underwear",
						"voyeur": "Voyeur",
						"whips": "Whips"
					},
					"filter": "Filter",
					"filters": "Filters",
					"gender_filter": "Gender",
					"gender_filter_options": {
						"f": "Female",
						"ff": "Female\u002FFemale",
						"g": "Group",
						"m": "Male",
						"mf": "Couple",
						"mm": "Male\u002FMale",
						"tf2m": "Trans (Male)",
						"tm2f": "Trans (Female)"
					},
					"groups": {
						"appearance": "Appearance",
						"attributes": "Attributes",
						"body": "Body",
						"geography": "Geography"
					},
					"hair_color_filter": "Hair Color",
					"hair_color_filter_options": {
						"black": "Black",
						"blond": "Blonde",
						"brown": "Brown",
						"dyed": "Dyed",
						"gray": "Gray",
						"red": "Red",
						"salt_and_pepper": "Salt and Pepper",
						"silver": "Silver",
						"white": "White"
					},
					"orientation_filter": "Orientation",
					"orientation_filter_options": {
						"bisexual": "Bisexual",
						"gay": "Gay",
						"straight": "Straight"
					},
					"pubic_hair_filter": "Pubic Hair",
					"pubic_hair_filter_options": {
						"bald": "Bald",
						"hairy": "Hairy",
						"trimmed": "Trimmed"
					},
					"region_filter": "Regions",
					"region_filter_options": {
						"africa": "Africa",
						"asia": "Asia",
						"au": "Australia",
						"ca": "Canada",
						"cent_east_eu": "Eastern Europe",
						"cent_south_am": "Latin America",
						"na_uk_au": "US\u002FCA\u002FUK\u002FAustralia",
						"uk": "United Kingdom",
						"us": "United States",
						"west_eu": "Western Europe"
					},
					"special_filter": "Special Traits",
					"special_filter_options": {
						"bodymods|piercings": "Piercings",
						"bodymods|tattoos": "Tattoos",
						"theme|pregnancy": "Pregnancy"
					}
				},
				"goldshow": "Gold Show",
				"has_vibe": "Vibrator",
				"has_voip": "CPS",
				"hot_links_title": "Trending",
				"join_show": "Join my show",
				"live": "Live",
				"model_options": "Filters",
				"models_found": "Models Found",
				"new_model": "New Model",
				"no_favorites_header": "You don't have any favorites yet.",
				"no_favorites_subheader": "Add a model to your favorites by clicking the heart icon.",
				"no_results": "Sorry, we can't find any results for",
				"no_results_filter": "Sorry, we can't find any results that match your criteria.",
				"notify_availablity_set": "Availability Notification Set",
				"notify_when_back": "Notify me",
				"offline": "Offline",
				"offline_that_match": "Offline Performers that match",
				"online_performers_found": "Online Models",
				"on_break": "I'm taking a short break.",
				"performer_anonymous": "Performer chooses to be anonymous",
				"performing_live": "I'm performing live...",
				"plural_result_count": "{{count}} results for",
				"popular": "Popular",
				"region": "All Regions",
				"regions": {
					"africa": "Africa",
					"all": "All Regions",
					"asia": "Asia",
					"cent_east_eu": "Central\u002FEastern Europe",
					"cent_south_am": "Central\u002FSouth America",
					"na_uk_au": "US\u002FCA\u002FUK\u002FAustralia",
					"west_eu": "Western Europe"
				},
				"removed_favorite": "{{nickname}} was removed from your favorites",
				"reset_all": "Clear All",
				"search_girls": "Search all girls cams...",
				"search_guys": "Search all guys cams...",
				"search_hint": "Search anything...",
				"search_hint_basic": "Search",
				"search_results_for": "Search results for",
				"search_trans": "Search all trans cams...",
				"second_header": "Other performers you might like",
				"show_less": "Less",
				"show_models": "Show 10 Models",
				"show_more": "More",
				"show_offline_button": "Show Offline Models",
				"singular_result_count": "1 result for",
				"specialshow": "Special Show",
				"try_again": "Try Again",
				"view_more": "View more",
				"you_might_like": "You might also like these performers"
			},
			"secure_message": "Safe, Secure, Private",
			"snackbar_messages": {
				"account_verified_continue_update": "Your account has been verified. Please proceed with your update.",
				"cookies_used": "We use cookies to bring you the best experience possible",
				"email_login_failed": "Email login failed, please contact customer support!",
				"email_login_retry": "Your login token has expired, please try again!",
				"feedback_request": "Help us build a better experience. Send feedback at the bottom of the page.",
				"ok_btn": "$t(ok)",
				"update_now_btn": "Update Now",
				"message_sent": "Your message has been sent."
			},
			"support": {
				"billing_customer_services": "Billing Customer Services",
				"call_us": "Call Us",
				"change_password": "Change Password",
				"chat": "Live Chat Support",
				"chat_now": "Or chat now with a representative.",
				"close_account": "Close Account",
				"close_account_link": "visit our account closure page",
				"contact_support": "Contact Support",
				"country_by_code": {
					"AU": "Australia",
					"CA": "Canada",
					"CH": "Switzerland",
					"DE": "Germany",
					"DE_Mobile": "Germany (Mobile)",
					"FR": "France",
					"GB": "United Kingdom (GB)",
					"IT": "Italy",
					"outside_us": "All Other Countries",
					"US": "USA"
				},
				"discreet_billing": "We offer discreet billing for our customers. Should you decide to access any of the clearly marked paid services your billing statement will display one of the following:",
				"email": "Email",
				"email_us_title": "Email Us",
				"faq": "FAQ",
				"faq_intro_text": "Welcome to the {{sitename}} FAQ. Our team has assembled answers to some frequently asked questions. If you don't find your answer below, \u003C0\u003E{{contactSupportLink}}\u003C\u002F0\u003E to get an immediate response.",
				"faq_items": {
					"entry_1": {
						"answer": "At {{sitename}}, you can chat with amateur performers while watching them live on camera. We have performers of every type! Search for any keyword or browse through our categories to find what you're looking for. You can interact with performers and create a unique experience just for you. \u003C0\u002F\u003E\u003C0\u002F\u003E If you see a performer you like, tap on the image to visit their profile and read more about them. If they're online and available, you'll see their free, live video and can start a conversation! You won't be charged unless you join a paid chat session. The per-minute prices for paid chats are listed in your local currency before you enter the chat. Your {{sitename}} membership is free, and there is no monthly or recurring fee to view the site.",
						"question": "What is {{sitename}}?"
					},
					"entry_2": {
						"answer": "Tap the search icon and type in a performer's name, a physical trait, a special kink, or any other keyword. We'll show you the closest matches, starting with online performers at the top! You can also browse using the available categories.",
						"question": "How can I find a performer?"
					},
					"entry_3": {
						"answer": "The performer has a camera set up on their end. When you join their chat room, you can see what the performer is doing in real time. Type a message and say hello!",
						"question": "How does the video chat work?"
					},
					"entry_4": {
						"answer": "Performers often list what they will or won't do in their profile. \u003C0\u002F\u003E\u003C0\u002F\u003E Want more details? Chat is the perfect place to ask! If they aren't interested, you can look for another performer who is.",
						"question": "How do I get the performer to do what I ask?"
					},
					"entry_5_premium": {
						"answer": "Exclusive chat sessions are just between you and the performer. In Premium chat, other members can join in and watch too.",
						"question": "What is Private Chat vs. Exclusive Chat?"
					},
					"entry_6": {
						"answer": "GOLD is a site currency that you can send to a performer anytime! One GOLD is equal to one US dollar. If you like how a performer is interacting with you, giving GOLD is a great way to show your appreciation.",
						"question": "What is GOLD?"
					},
					"entry_7_premium": {
						"answer": "GOLD Shows are special group shows where several members chip in to watch. The performer will set up the length, goal, and pledge price of the GOLD show. If you're interested, pledge your GOLD during the countdown and you'll automatically join the show when it starts! If the performer cancels the show before it begins or while it's in progress, you will not be billed.",
						"question": "What is a GOLD Show?"
					},
					"entry_8_premium": {
						"answer": "Block sessions allow you to pay upfront for a length of time at a discounted rate. Performers may offer some or all of these options{{colon}} \u003C0\u002F\u003E\u003C0\u002F\u003E 15 minutes{{colon}} 5% off \u003C0\u002F\u003E 30 minutes{{colon}} 10% off \u003C0\u002F\u003E 45 minutes{{colon}} 15% off \u003C0\u002F\u003E 60 minutes{{colon}} 20% off \u003C0\u002F\u003E\u003C0\u002F\u003E It's a good idea to ask performers if they are available before booking a block session. If the performer agrees to the time block, your session will begin right away. The purchased time must be taken all at once. If the show continues past the amount you purchased, you'll continue to be charged at the discounted per-minute rate.",
						"question": "What Are Discounted Block Sessions?"
					},
					"entry_9_premium": {
						"answer": "Cam2Cam lets you share your video with the performer during private sessions. \u003C0\u002F\u003E\u003C0\u002F\u003EIf you are having trouble accessing your camera or microphone, the solution will depend on what you see when you click on the Cam2Cam button. \u003C0\u002F\u003E\u003C0\u002F\u003EIf you see your video appear but it disappears within 15 seconds of clicking the button, the performer either missed the Cam2Cam request or denied it. To prevent this in the future, you can ask the performer if they'll accept your Cam2Cam request before you send it. \u003C0\u002F\u003E\u003C0\u002F\u003EIf you don't see your own video and nothing happens when you click the button, your video settings may not be set up correctly.",
						"question": "How do I set up Cam2Cam?"
					},
					"entry_10_premium": {
						"answer": "To end the chat and stop billing, navigate to another page or tap the 'X' in the top right corner of the performer's video.",
						"question": "How do I end my video chat session?"
					},
					"entry_11": {
						"answer": "If you forget your password, go to the \u003C2\u003E{{loginLinkText}}\u003C\u002F2\u003E page and enter the email address you signed up with. Then tap the 'Forgot your password?' link under the Log In button. We'll send you an email with instructions for resetting your password.\u003C0\u002F\u003E\u003C0\u002F\u003E If you don't see the email shortly, check your spam or junk folder. (You can add '@{{sitename}} to your email account's approved senders to make sure you always receive messages from us.)",
						"question": "How do I get my password sent to me?"
					},
					"entry_12": {
						"answer": "To change your password, you will have to \u003C2\u003E{{loginLinkText}}\u003C\u002F2\u003E first and then go to \u003C1\u003E{{changePasswordLinkText}}\u003C\u002F1\u003E page.",
						"question": "How do I change my password?"
					},
					"entry_13": {
						"answer": "All members start with a daily limit to use on {{sitename}} video chats. Once you reach your daily limit, your current chat will close and you won't be able to spend again until the next day. \u003C0\u002F\u003E\u003C0\u002F\u003E You can lower your daily limit (as low as $25) if you want to limit your time spent in chat each day. The maximum daily limit available to you may increase over time, or you can contact Customer Support (supportteam@{{sitename}}.com) about setting a higher limit. They'll send you instructions for submitting a request. Our staff will review the request and get back to you.",
						"question": "How does the daily limit work?"
					},
					"entry_14": {
						"answer": "For any questions not answered here, please \u003C4\u003E{{contactSupportLinkText}}\u003C\u002F4\u003E.",
						"question": "Who do I contact if I need help?"
					},
					"entry_15": {
						"answer": "{{sitename}}'s basic services are free of charge, and we do not charge a monthly fee. However, if you would like to close your account anyway, you can \u003C3\u003E{{closeAccountLinkText}}\u003C\u002F3\u003E.",
						"question": "How do I close my account?"
					},
					"entry_16_premium": {
						"answer": "As soon as the chat closes, billing will stop. If there was a technical problem on your end, you can open your browser and log back into the chat. You may also be disconnected if the performer leaves the chat for any reason. \u003C0\u002F\u003E\u003C0\u002F\u003E Performers have the ability to permanently block users from their chat. If you are blocked, you won't be able to visit that performer again.",
						"question": "What happens if I am disconnected during a show?"
					},
					"entry_17": {
						"answer": "Our site uses SSL (Secure Sockets Layer) to encrypt your billing info any time you enter it on the site. Only {{sitename}}'s trained staff has access to your account information. \u003C0\u002F\u003E\u003C0\u002F\u003E Performers do not have access to your account or billing information, and we will not sell, trade, or give your information out to third parties. To better safeguard your privacy, we recommend that you do not use any part of your email address as your site nickname.  \u003C0\u002F\u003E\u003C0\u002F\u003E {{sitename}} staff will never ask for your account or credit card information in a chat room. If a performer or anyone else asks you for sensitive information by way of chat or email, please contact us immediately as this is against our policy. NEVER share private information with performers or other visitors. If there is a problem with your account, we will always have you contact us or the billing company personally. The billing company used to process your payments is listed when entering any paid area of the site.",
						"question": "Is my information safe with you?"
					},
					"entry_18": {
						"answer": "Your email address is your login name on the site. We will also use it to send you account information, such as account changes, receipts, special offers, or to help you recover your password. If you wish to stop receiving any newsletters or offers we send you, simply click the remove link included in the email. \u003C0\u002F\u003E\u003C0\u002F\u003E Your email address is not displayed on our site, and performers will never see it. Your email address will not be sold or given to third parties. We will only use your email to contact you regarding your {{sitename}} account.",
						"question": "What do you need my email address for?"
					},
					"entry_19": {
						"answer": "Many browsers have a private browsing mode that won't save your site history, cookies, passwords, or other personal data. Check with your browser for availability and details about this option. \u003C0\u002F\u003E\u003C0\u002F\u003E Before visiting {{sitename}}, enable your browser's private browsing mode for a more secure, private experience. Some convenience features (such as remembering your login information, language selection, or other custom options) will not be available while you are browsing privately.",
						"question": "How can I browse {{sitename}} without it appearing in my browser history?"
					},
					"entry_20": {
						"answer": "Members from the European Union may be charged a Value Added Tax (VAT), as required by law, for all {{sitename}} purchases. VAT is calculated at the time of billing, after the base charges are subtracted from your daily limit. VAT charges do not count towards your daily limit. \u003C0\u002F\u003E\u003C0\u002F\u003E You will be notified of the VAT percentage you will be charged before a taxable purchase is made. This percentage differs based on country. Please consult your local government for details on how VAT applies in your area.",
						"question": "Why does my bill include a VAT charge? (EU Members Only)"
					},
					"entry_21": {
						"answer": "If you pay for the Service using PayPal, due to the increased cost to us, an additional charge on the purchase amount will be added to your bill. \u003C0\u002F\u003E\u003C0\u002F\u003E You will be notified of the Service Charge percentage before a purchase is made.",
						"question": "Why does my bill include a Service Charge? (PayPal Users Only)"
					},
					"entry_22": {
						"answer": "To protect your account, your bank may request extra verification to help prevent fraud. If this happens, don't worry! You'll be able to quickly complete the verification from our Payment Information page. We'll connect you with your bank, and then bring you back to re-join the fun.",
						"question": "My Account was flagged for further verification. What is this?"
					},
					"entry_23": {
						"answer": "Members from Canada may be charged sales tax, as required by law, for all Streamate purchases. Sales tax is calculated at the time of billing, after the base charges are subtracted from your daily limit. Sales Tax does not count towards your daily limit. \u003C0\u002F\u003E\u003C0\u002F\u003E You will be notified of the sales tax percentage you will be charged before a taxable purchase is made. This percentage differs based on province. Please consult your local government for details on how sales tax applies in your area.",
						"question": "Why does my bill include a sales tax charge? (Canadian Members Only)"
					}
				},
				"faq_title": "Frequently Asked Questions",
				"get_help": "Get Help",
				"intro": "Need immediate assistance? Our support team is available 24 hours a day, 7 days a week, including holidays.",
				"intro_contact_support": "contact customer support",
				"login": "Log In",
				"login_help": "Login Help",
				"sms_text_support": "SMS: 1-855-968-1444",
				"title": "Support",
				"whats_app": "WhatsApp"
			},
			"close_account": {
				"title": "Are you sure you want to close your account?",
				"submit": "Submit",
				"close_account": "Close your account",
				"account_closed": "Your Account is Closed",
				"np_description_1": "Don't forget that your account gives you access to more performers and lets you interact with them in chat. If you become a Premium member, you'll gain even more access and be able to enter private shows. There are no membership fees, and you'll only pay for time you spend chatting.",
				"pre_charges_1": "There is currently an outstanding balance on your account. To discuss payment concerns or to update your payment information, please \u003C0\u003E{{supportLink}}\u003C\u002F0\u003E.",
				"pre_charges_1_support": "contact customer support",
				"pre_charges_2": "If you close your account, we will attempt to bill this amount using your current billing information. If we are unable to complete the billing, you will be required to settle your account by mail. We will send instructions to {{email}}.",
				"balance_date": "Outstanding Balance as of {{timestamp}}",
				"balance_reference": "{{sitename}} Reference Number: {{userid}}",
				"balance_total": "TOTAL",
				"balance_vat": "This total may not reflect the final charge to your account, which could include additional taxes or fees on applicable purchases.",
				"closed_request": "Your {{sitename}} account has been closed at your request.",
				"closed_email": "An email has been sent to {{email}} with instructions on settling your outstanding balance.",
				"closed_reactivate": "If you change your mind in the future, simply log in again and we'll guide you through the process of reactivating this account.",
				"closed_support": "Contact \u003C0\u003E{{supportLink}}\u003C\u002F0\u003E if you have any problems or questions.",
				"closed_support_link": "customer support",
				"generic_error": "Oh no! Something went wrong. Please try again later."
			},
			"delete_account": {
				"button": "Delete (Permanent)",
				"title": "Delete Account?",
				"confirm": "Delete",
				"cancel": "Cancel",
				"description": "Clicking the \"Delete\" button starts the process to delete your account and the deletion process takes 21 days. Once the deletion process begins, you'll be logged out. Please note that after your account is deleted, you won't be able to access the account and your purchased content will be lost. Changed your mind? Simply log in within the 21 days and your account will be automatically reactivated and the deletion process will be aborted.",
				"success": "Account Scheduled For Deletion",
				"error_title": "Issue Detected",
				"error_description": "Your account cannot be deleted. Please contact customer support.",
				"error_recent_transaction": "Due to fraud prevention, we are unable to process your deletion request until a 4-month period has passed since your last transaction. Please try to initiate the deletion process after the designated period of time.",
				"error_customer_support": "CUSTOMER SUPPORT",
				"error_exit": "EXIT"
			},
			"content_removal": {
				"title": "Content Removal Request",
				"p1": "If you have an issue with content on this website, please submit your issue via the form below using the following guidelines:",
				"p2": "We will review your issue as soon as possible. Thank you for taking the time to submit this issue for review.",
				"p3": "Is this issue related to a copyright or a privacy concern?",
				"p4": "Have you ever agreed to the distribution of this content?",
				"li1": "As much identifying information as possible about the content that you are reporting:",
				"li2": "Identifying information about the performer and\u002For user that generated the issue.",
				"li3": "A description of your issue with the content\u002Fperformer\u002Fuser.",
				"li4": "The date and time you encountered the content on the website.",
				"li5": "Any other information which you believe is relevant to your issue with the content on the website.",
				"input_name": "Name",
				"input_email": "Email",
				"input_urls": "Urls\u002Flinks of content you are reporting",
				"input_additional_information": "Provide any additional information that will help us understand the issue you are reporting",
				"report_success": "Your content removal request has been successfully sent.",
				"report_failure": "We were unable to process your request. Please try again or contact support.",
				"yes": "Yes",
				"no": "No",
				"email_invalid": "Email must be a valid email.",
				"copyright_or_privacy": "For copyright or privacy concerns please refer to our \u003C0\u003EDMCA Notice of Copyright Infringement\u003C\u002F0\u003E or \u003C1\u003EPrivacy Policy\u003C\u002F1\u003E pages respectively.",
				"warning_message": "This page is for requesting removal of harmful content. For all other issues such as account or email problems, please \u003C0\u003Econtact support\u003C\u002F0\u003E."
			},
			"support_form": {
				"bad_response": "$t(forms.bad_response)",
				"comments_field": "Comments",
				"email_field": "Your email address",
				"email_us_success": "Your message has been sent",
				"invalid_email": "$t(forms.invalid_email)",
				"name_field": "Your name",
				"required": "$t(forms.required)",
				"subject_field": "Subject",
				"subject_options": {
					"accounts": "Accounts",
					"billing": "Billing",
					"default": "Select",
					"feedback": "Feedback",
					"joining": "Joining",
					"other": "Other",
					"technical": "Technical"
				},
				"submit_button": "Send"
			},
			"support_message": "We're working to fix the problem now. Please check back later, or contact customer service via email at",
			"time": {
				"days_abbr": "days",
				"hours_abbr": "hrs",
				"minutes_abbr": "mins",
				"seconds_abbr": "secs"
			},
			"toggle_off": "OFF",
			"toggle_on": "ON",
			"upsell": {
				"hybrid_success_description": "Success! You're now ready to interact with the performer.",
				"title": "Card Activation"
			},
			"user_site_language": {
				"de": "Deutsch",
				"en": "English",
				"es": "Español",
				"fr": "Français",
				"he": "עִברִית",
				"it": "Italiano",
				"nl": "Nederlands",
				"no": "Norsk",
				"pt": "Português",
				"sv": "Svenska"
			},
			"videostore": {
				"add": "Add",
				"categories": "Video Categories",
				"checkout_subtitle": "Purchased videos will be available for viewing in your Video Library.",
				"checkout_title": "Confirm Purchase",
				"close": "Exit",
				"coming_soon": "Coming soon!",
				"continue_browsing_media": "Continue Browsing Media",
				"continue_browsing_videos": "Continue Browsing Videos",
				"empty_cart": "Your cart is empty",
				"error": {
					"ERROR_LOADING_PERFORMER_VIDEOS": "There was a problem loading this performer's videos.",
					"ERROR_PURCHASE_FAILED": "We're currently unable to process your request. Please try again later.",
					"ERROR_PURCHASE_WITH_POINTS_FAILED": "Sorry, we were unable to use points for your purchase.",
					"ERROR_VIDEO_MODIFIED": "Some information about the video(s) you selected has changed. Please update your selections and try again.",
					"GENERIC_ERROR": "Sorry, an error has occurred. Please try again.",
					"OVER_DAILY_LIMIT": "You have reached your daily spending limit.",
					"OVER_GOLDLIMIT": "New users are only allowed to spend {{maxAmount}} per day outside of paid chat."
				},
				"fanclub": {
					"video_access": {
						"FANCLUB_PAID": {
							"tooltip": "You got this video by joining {{performerName}}'s Fan Club"
						},
						"FANCLUB_PRIVATE": {
							"tooltip": "You got this secret video by joining {{performerName}}'s Fan Club"
						}
					}
				},
				"item_in_cart": "item in cart",
				"items": "Items",
				"items_in_cart": "items in cart",
				"last_performance": "Last Performance",
				"legal": "will appear on your cardholder statement.",
				"media_purchase_success": "Your purchased media is available in your media collection.",
				"my_cart": "My Cart",
				"number_of_videos": "{{numberOfVideos}} Videos",
				"number_of_videos_you_have": "You have {{numberOfVideos}} videos",
				"performer_offline": "Performer Offline",
				"performer_profile": "{{performerName}}'s Profile",
				"performer_videos": "{{performerName}}'s Videos",
				"purchase": "Purchase",
				"purchase_success": "Your purchased videos are available in your Video Collection.",
				"purchase_total": "Purchase Total",
				"purchase_video": "Purchase Video",
				"purchase_with_points": "Purchase with \u003C0\u003E{{pointAmount}}\u003C\u002F0\u003E Rewards Points",
				"purchased": "Purchased. Go to '{{myVideosLink}}' to view.",
				"remove": "Remove",
				"search_result_not_found": "Sorry, we could not find any results for your search",
				"section": {
					"CATEGORY": {
						"browse": "Browse More",
						"title": "Related Videos"
					},
					"FAVORITE_PERFORMERS": {
						"browse": "Browse More",
						"title": "Videos By Your Favorites"
					},
					"JOI": {
						"browse": "Browse More",
						"title": "JOI Videos"
					},
					"NEWEST": {
						"browse": "Browse More",
						"title": "New Videos"
					},
					"SEARCH": {
						"title": "Videos found for \"{{query}}\""
					},
					"TRENDING": {
						"browse": "Browse More",
						"title": "Trending Videos"
					}
				},
				"select_all": "Select All",
				"skin_video_store": "{{skinName}} Video Store",
				"thanks": "Thank You!",
				"to_view_and_purchase": "to view and purchase videos",
				"total": "Total",
				"uploaded": "Uploaded {{date}}",
				"video": "Video",
				"video_collection": "My Video Collection",
				"video_duration": "Video Length",
				"video_library_link": "Watch Videos",
				"videos": "Videos",
				"view_live_stream": "View LIVE Stream",
				"view_media_now": "View Now",
				"you_might_also_like": "Here are some videos you might like"
			},
			"wishlist": {
				"add_message": "Add a message",
				"available_points": "Available Points",
				"confirm_contribution": "Confirm Contribution",
				"confirm_purchase": "Confirm Purchase",
				"contribution_amount": "Enter reward points to contribute",
				"cost_in_reward_points": "{{points}} reward points",
				"error_leading": "Sorry, we couldn't load this performer's wishlist. Please try again!",
				"fulfilled_contribution": "You successfully sent a contribution to {{performer}}.",
				"fulfilled_contribution_title": "Thank You!",
				"fulfilled_purchase": "You successfully sent a gift to {{performer}}.",
				"fulfilled_purchase_title": "Thank You!",
				"heading": "My Wishlist",
				"intro": "Use your reward points to show your support! When you redeem your member reward points on any of the categories below, I'll receive a monetary value.",
				"invalid_contribution": "Contribute between {{min}} and {{max}} reward points",
				"progressive_item_funded": "We did it! 🎉 Thank you so much!",
				"progressiveItems": {
					"mock_03": {
						"description": "Donec ultricies, leo a dignissim aliquet, erat diam mattis sem, pretium aliquam eros dolor sed dui. Nullam feugiat massa id viverra fringilla. Proin vestibulum pretium dui, et hendrerit sem viverra id. Donec eu eros dapibus, convallis eros ac, laoreet diam. Integer interdum facilisis erat sit amet aliquam. Nunc volutpat arcu est, sed bibendum purus luctus eget. Donec tempus dapibus massa a sagittis. Quisque suscipit sem at purus porta, in luctus mi lacinia. Sed rutrum fringilla libero, ac posuere risus pellentesque non.",
						"goal_cta": "Help fund my mock 03 project",
						"summary": "Donec ultricies, leo a dignissim aliquet, erat diam mattis sem, pretium aliquam eros dolor sed dui.",
						"title": "Mock 03 Project"
					},
					"mock_04": {
						"description": "Praesent vestibulum in erat non egestas. Fusce vitae odio id velit luctus aliquam. Nam consequat molestie odio eu pulvinar. Proin eu elementum nunc, at vehicula neque. Quisque vel lectus congue, ultrices turpis a, mollis lectus. Nulla ultricies tortor dolor, vitae pulvinar odio dictum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum odio sem, vel sodales dui lacinia nec. Proin vel ultrices ex. Proin non sodales arcu. Maecenas placerat ligula aliquam lorem eleifend hendrerit. Proin vel lacus ut erat accumsan tincidunt ut in metus.",
						"goal_cta": "Help fund my mock 04 medical with super long button text",
						"summary": "Praesent vestibulum in erat non egestas. Fusce vitae odio id velit luctus aliquam. Nam consequat molestie odio eu pulvinar.",
						"title": "Mock 04 Medical"
					},
					"vacation": {
						"description": "Etiam malesuada, metus sed vestibulum congue, lorem purus porttitor orci, vitae pharetra eros mi et augue. Nunc ullamcorper interdum dolor. Suspendisse posuere rhoncus erat, in bibendum nibh convallis ac. Maecenas consequat blandit tortor, eu ornare mi finibus dignissim. Donec nisi sem, luctus ut porta id, ullamcorper quis tellus. Curabitur sagittis mattis risus non tempor. Nulla facilisi. Sed ut orci vitae orci rutrum viverra eget a tortor. Duis viverra luctus justo eu suscipit. Pellentesque sed dui et risus cursus rhoncus efficitur ac mauris. Vivamus at semper nisl.",
						"goal_cta": "Help fund my vacation",
						"summary": "Vacation really puts me in the mood. Help me reach my goal!",
						"title": "Island Time!"
					}
				},
				"rejected_contribution": "Sorry, we couldn't contribute to this item. Please try again!",
				"rejected_purchase": "Sorry, we couldn't purchase this item. Please try again!",
				"repeatableItems": {
					"cocktail": {
						"summary": "It's 5 o'clock somewhere.",
						"title": "GIFT ME A DRINK"
					},
					"coffee": {
						"summary": "Help me start my day with a coffee.",
						"title": "COFFEE TIME"
					},
					"jewelry": {
						"summary": "Buy me that special something.",
						"title": "JEWELRY"
					},
					"lingerie": {
						"summary": "Dress me up in something special.",
						"title": "LINGERIE"
					},
					"manicure": {
						"summary": "Looking this good takes work.",
						"title": "MANICURE"
					},
					"mock_01": {
						"summary": "Nam sapien ex, faucibus non iaculis id, tincidunt ut mi.",
						"title": "Mock 01 Media"
					},
					"mock_02": {
						"summary": "Nunc eu tincidunt ligula. Maecenas sed volutpat urna, a pulvinar magna. ",
						"title": "Mock 02 Spa"
					},
					"toy": {
						"summary": "I need a new toy.",
						"title": "PLAY TIME"
					}
				},
				"reward_points_needed": "{{points}} reward points needed",
				"show_more": "Show more"
			},
			"zip_invalid": "Numerals and hyphens only.",
			"outdated_browser": {
				"header": "Your browser is no longer supported.",
				"message": "Please upgrade to the latest version of Chrome, Microsoft Edge, Firefox or Safari to continue to enjoy our site.",
				"contact": "Please \u003Ca href='tel:{{phone}}'\u003E call \u003C\u002Fa\u003E or \u003Ca href='mailto:{{email}}'\u003Eemail\u003C\u002Fa\u003E Customer support if you need further assistance."
			},
			"email_campaign": {
				"credit_applied": "The site credit for this offer has now been applied to your account. You can check the balance of site credit on your account by clicking \u003C0\u003E{{discountsAndCredits}}\u003C\u002F0\u003E.",
				"credit_applied_title": "Credit Applied!",
				"something_went_wrong": "This page timed out. Please try refreshing your browser and try again. If the issue persists, please contact customer support \u003C0\u003E{{supportLink}}\u003C\u002F0\u003E.",
				"something_went_wrong_title": "Something went wrong!",
				"oops": "Something didn’t work quite right. Please refresh the page to try again. If the issue persists, please contact customer support \u003C0\u003E{{supportLink}}\u003C\u002F0\u003E.",
				"opps_title": "Something went wrong!",
				"credit_offer_expired": "We're sorry, this offer is expired.",
				"credit_offer_expired_title": "Credit Offer Expired!",
				"offer_already_redeemed": "This credit offer has already been applied to your account as of \u003C0\u003E{{redeemedAtDateAndTime}}\u003C\u002F0\u003E. Please check your balance, and contact customer support if you feel there has been an error.",
				"offer_already_redeemed_title": "Offer Already Redeemed!",
				"support_link_text": "here",
				"discounts_and_credits_link_text": "Discounts and Credits"
			},
			"creator_profile": {
				"offline": {
					"logged_out_cta": "Join Free",
					"logged_in_cta": "Message Me"
				}
			},
			"signup_prompt_modal": {
				"main_copy": "Join now for FREE and instantly connect with thousands of live sexy people.",
				"header": "Join For Free",
				"subheader": "It's fast, free, and fun!",
				"cta": "Let's Go!",
				"already_member": "Already a member?  ",
				"login": "Log In",
				"no_thanks": "No thanks"
			},
			"media_purchase_flow": {
				"account_alert_message": "An issue has been detected with your account.",
				"account_payment_cta": "Please update your payment information or contact one of our customer service representatives.",
				"contact_support": "Contact Support",
				"update_info_button": "Update Info"
			},
			"credit_offer": {
				"amount": "{{amount}} FREE",
				"title": "{{siteName}} is now XOLive!",
				"description": "Celebrate with a FREE credit, just verify your card to claim!",
				"cta_label": "CONTINUE",
				"update_payment_information": {
					"title": "Claim Free Credit",
					"subtitle": "Just confirm your payment information below.",
					"cta_label": "Let's Go!"
				},
				"update_payment_information_success": {
					"title": "Success!"
				}
			}
		}
	}
};