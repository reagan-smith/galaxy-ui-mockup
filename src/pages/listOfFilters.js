export const listOfFilters = [
  {
    columnHeader: "start_t",
    columnDisplayName: "Start Time",
    columnType: "dateRange",
    showByDefault: 1,
    possibleValues: [],
  },
  {
    columnHeader: "product_name",
    columnDisplayName: "Product",
    columnType: "string",
    showByDefault: 1,
    possibleValues: [
      "SI7625DN",
      "SC4435DDY",
      "SQ2309ES",
      "SIE818DF",
      "SQ7414AENW",
      "SC2302CDS",
      "SQ4850EY",
      "SQD15N06-42L_GE3",
      "SIRA14DP",
      "SPA517DJ",
      "SQ3481EV",
      "SC4401DDY",
      "SQJ858AEP",
      "SIHG30N60E-GE3",
      "SQ2310ES",
      "SQM120P04-04L_GE3",
      "SI1012R",
      "SI7615DN",
      "SI2325DS",
      "TMSUD35N10-26P",
      "SC3424CDV",
      "SIZF906DT",
      "SI1410EDH",
      "SQ2351ES",
      "SCA447DJ",
      "SC4403CDY",
      "SQJ951EP",
      "SIR424DP",
      "SQ2337ES",
      "SISA18JN",
      "SIRA12DP",
      "SC2308BDS",
      "SC3493BDV",
      "SQ3427AEEV",
      "SCA421DJ",
      "SA7434DP",
      "SC7115DN",
      "SIUD412ED",
      "SI2392ADS",
      "SI1427EDH",
      "SC5419DU",
      "SA4850EY",
      "SQ3426AEEV",
      "SIR462DP",
      "SC4134DY",
      "SI7456DP",
      "SC4455DY",
      "SIZ342DT",
      "SCA445EDJ",
      "IRFP360PBF",
      "SC7540ADP",
    ],
  },
  {
    columnHeader: "lot_id",
    columnDisplayName: "Lot",
    columnType: "string",
    showByDefault: 1,
    possibleValues: [
      "J40Y128.1",
      "J39Y090.13",
      "J40Y119.5",
      "J42D152.2",
      "F24D764.3",
      "J43D416.3",
      "J44D509.6",
      "J46D935.2",
      "J45D909.21",
      "J40D723.37",
      "J40Y017.7",
      "J45D736.6",
      "J42D210.2",
      "J45D766.9",
      "J46D963.6",
      "J37Y100.5",
      "J33D088.1",
      "J44D563.2",
      "G35K004.30",
      "J22Y140.18",
      "J44K293.3",
      "J30K204.3",
      "J24E497.21",
      "J11Y012.18",
      "G12353.18",
      "J39D444.24",
      "J41D085.4",
      "J42D105.6",
      "J43D470.4",
      "J43Y113.6",
      "J44D608.10",
      "J39D488.6",
      "J42D105.3",
      "J26D775.2",
      "J40Y162.11",
      "J37Y002.4",
      "J43Y030.1",
      "J40Y128.6",
      "J44K270.3",
      "J44D652.1",
      "J46D084.10",
      "J38D339.1",
      "J31D774.8",
      "J45D889.3",
      "J44D608.13",
      "J45K204.9",
      "J39K020.1",
      "J46K124.2",
      "J31D791.37",
      "J38D433.10",
      "J41D043.28",
      "J47D188.9",
      "J42D167.11",
      "J44D501.6",
      "J43D405.16",
      "H51Y020.1",
      "J14E261.1",
      "J43D467.1",
      "J40D723.33",
      "J42D152.6",
      "J42K106.1",
      "J45D765.5",
      "J45K240.1",
      "J33D088.43",
      "F18A036.27",
      "J42D109.1",
      "J48K029.1",
      "J46D082.7",
      "J43D315.15",
      "J45D909.19",
    ],
  },
  {
    columnHeader: "testing_stage",
    columnDisplayName: "Stage",
    columnType: "enum",
    showByDefault: 1,
    possibleValues: ["ET", "WT", "FT"],
  },
  {
    columnHeader: "Category",
    columnDisplayName: "Category",
    columnType: "enum",
    showByDefault: 1,
    possibleValues: ["Final", "FirstPass"],
  },
  {
    columnHeader: "pf",
    columnDisplayName: "PF",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["P", "F"],
  },
  {
    columnHeader: "site_no",
    columnDisplayName: "Touchdown Site",
    columnType: "int",
    showByDefault: 0,
    possibleValues: [-1],
  },
  {
    columnHeader: "num",
    columnDisplayName: "Bin Number",
    columnType: "int",
    showByDefault: 0,
    possibleValues: [
      1,
      7,
      12,
      14,
      18,
      319,
      398,
      1003,
      1006,
      1009,
      1010,
      1011,
      1013,
      1016,
      16,
      1000,
      1007,
      13,
      1015,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      1017,
      6,
      19,
      11,
      8,
      353,
      17,
      10,
      1008,
      5,
      15,
      20,
      21,
      22,
      23,
      31,
      32,
      40,
      42,
      51,
      60,
      61,
      65,
      70,
      71,
      72,
      73,
      80,
      81,
      82,
      83,
      90,
      91,
      27,
      354,
      1018,
      0,
      2,
      24,
      25,
      306,
      305,
      9,
      3,
      4,
      41,
      50,
    ],
  },
  {
    columnHeader: "bin_type",
    columnDisplayName: "Bin Type",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["Sbin", "Hbin"],
  },
  {
    columnHeader: "name",
    columnDisplayName: "Bin Name",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "IGSS @ - 120% VGS",
      "Vth1(Min~Max)",
      "IDSX @ 100%Vds",
      "rDSon #1 @ VGS= 10V",
      "KEL @ 50mA",
      "O_UISL",
      "G-open",
      "Rg",
      "SPU",
      "UIS",
      "Vision Rej",
      "Unknown",
      "Reject units",
      "IDSX @ 50%Vds",
      "GDS sh",
      "Ass'y Rejects",
      "IDON",
      "Purge units",
      "Good",
      "GDS SH",
      "GS SH",
      "DS SH",
      "G-OPEN",
      "L2/4 OPEN",
      "ISO SH",
      "RG",
      "RG_STAT",
      "ASS'Y REJECTS",
      "TR",
      "UIS-L(U4)",
      "VDRP(VD)",
      "VCOL(VC)",
      "VISION REJ",
      "HANDLER LOSS",
      "UNKNOWN",
      "IGSS @ + 120% VGS",
      "Vth1(min)",
      "rDSon #2 @ VGS= 4.5V",
      "IGSS @ - 100% VGS",
      "IGSS @ + High Voltage",
      "RDSP 59/159",
      "BVDSX @ 250uA",
      "IGSS @ + 100% VGS",
      "BVDSX @ 5mA",
      "PASS",
      "REJECT_W/OCA",
      "FT KELVIN",
      "G-S SHORT",
      "D-S SHORT",
      "G-S OPEN",
      "OSC",
      "IL FAULT",
      "IL KELVIN",
      "IL Function",
      "IL Avalanche",
      "IGSS1",
      "IGSS2",
      "BVDSS",
      "BVDSS UNSTAB",
      "IDSX_RJ",
      "VDSON",
      "VTH",
      "VF",
      "KT FAIL LOW",
      "KT FAIL HIGH",
      "KT OPEN/SHORT",
      "KT FAULT",
      "RG1",
      "RG2",
      "RG_KELVIN",
      "RG_FUNCTION",
      "EXTC FAULT",
      "EXT1C_FAIL",
      "rDSon #3 @ VGS= 2.5V",
      "rDSon #5 @ VGS= 1.5V",
      "belong to Ibev sort",
      "RDSP 56/156",
      "RDSP 57/157",
      "VDSP 36/136",
      "BVDSX @ 10mA",
      "Vsdp",
      "IGSS @ >125%Vgs (-)",
      "rDSon #4 @ VGS= 1.8V",
      "snapback",
      "rDSon #8 @ VGS= 6V",
      "IGSS @ >125%Vgs (+)",
      "IGSS @ - High Volatge",
      "NO AC BOARD",
      "MIX LC",
      "BVDSS SNAP",
      "IDSS_REJECT",
    ],
  },
  {
    columnHeader: "sublot_id",
    columnDisplayName: "Sublot",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "J40Y128.1",
      "J39Y090.13",
      "J40Y119.5",
      "J42D152.2",
      "F24D764.3",
      "J43D416.3",
      "J44D509.6",
      "J46D935.2",
      "J45D909.21",
      "J40D723.37",
      "J40Y017.7",
      "J45D736.6",
      "J42D210.2",
      "J45D766.9",
      "J46D963.6",
      "J37Y100.5",
      "J33D088.1",
      "J44D563.2",
      "G35K004.30",
      "J22Y140.18",
      "J44K293.3",
      "J30K204.3",
      "J24E497.21",
      "J11Y012.18",
      "G12353.18",
      "J39D444.24",
      "J41D085.4",
      "J42D105.6",
      "J43D470.4",
      "J43Y113.6",
      "J44D608.10",
      "J39D488.6",
      "J42D105.3",
      "J26D775.2",
      "J40Y162.11",
      "J37Y002.4",
      "J43Y030.1",
      "J40Y128.6",
      "J44K270.3",
      "J44D652.1",
      "J46D084.10",
      "J38D339.1",
      "J31D774.8",
      "J45D889.3",
      "J44D608.13",
      "J45K204.9",
      "J39K020.1",
      "J46K124.2",
      "J31D791.37",
      "J38D433.10",
      "J41D043.28",
      "J47D188.9",
      "J42D167.11",
      "J44D501.6",
      "J43D405.16",
      "H51Y020.1",
      "J14E261.1",
      "J43D467.1",
      "J40D723.33",
      "J42D152.6",
      "J42K106.1",
      "J45D765.5",
      "J45K240.1",
      "J33D088.43",
      "F18A036.27",
      "J42D109.1",
      "J48K029.1",
      "J46D082.7",
      "J43D315.15",
      "J45D909.19",
    ],
  },
  {
    columnHeader: "wafer_id",
    columnDisplayName: "Wafer ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [0],
  },
  {
    columnHeader: "setup_t",
    columnDisplayName: "Setup Time",
    columnType: "dateRange",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "finish_t",
    columnDisplayName: "Finish Time",
    columnType: "dateRange",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "tester_name",
    columnDisplayName: "Tester",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "WP121213",
      "WSO821",
      "WP121202",
      "WSSOT10",
      "3301796",
      "WP121210",
      "WSSOT02",
      "WSO812",
      "3301780",
      "WSSOT07",
      "WPSO808",
      "WPSC7006",
      "WTSOP07",
      "WSO813",
      "WPSO8L05",
      "XTEST11",
      "WSSOT06",
      "3301573",
      "WSC7502",
      "WP121203",
      "WSSOT12",
      "3301673",
      "WTSOP04",
      "3301918",
      "WSC7004",
      "WPSC7001",
      "WSO815",
      "WPSO8L02",
      "WP121212",
      "WSO817",
      "WPSO811",
      "WSO826",
      "WSSOT05",
      "WP121206",
      "WPSO810",
      "WP121201",
      "WSSOT03",
      "WP121208",
      "WTSOP06",
      "WTSOP08",
      "WPSC7003",
      "",
      "WSO809",
      "WSSOT01",
      "WPSO802",
      "WP121207",
      "WP080601",
      "WSSOT11",
      "WSC7002",
      "WPCHIP01",
      "WSO811",
      "WTSOP09",
      "WPSC7004",
      "WPSO807",
      "WPSO8L01",
      "WPSO805",
      "WSO814",
      "3301960",
      "WPSC7005",
      "XTEST03",
      "WTSOP05",
      "WPSO803",
    ],
  },
  {
    columnHeader: "tester_type",
    columnDisplayName: "Tester Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "WP121213",
      "WSO821",
      "WP121202",
      "WSSOT10",
      "3301796",
      "WP121210",
      "WSSOT02",
      "WSO812",
      "3301780",
      "WSSOT07",
      "WPSO808",
      "WPSC7006",
      "WTSOP07",
      "WSO813",
      "WPSO8L05",
      "",
      "WSSOT06",
      "3301573",
      "WSC7502",
      "WP121203",
      "WSSOT12",
      "3301673",
      "WTSOP04",
      "3301918",
      "WSC7004",
      "WPSC7001",
      "WSO815",
      "WPSO8L02",
      "WP121212",
      "WSO817",
      "WPSO811",
      "WSO826",
      "WSSOT05",
      "WP121206",
      "WPSO810",
      "WP121201",
      "WSSOT03",
      "WP121208",
      "WTSOP06",
      "WTSOP08",
      "WPSC7003",
      "WSO809",
      "WSSOT01",
      "WPSO802",
      "WP121207",
      "WP080601",
      "WSSOT11",
      "WSC7002",
      "WPCHIP01",
      "WSO811",
      "WTSOP09",
      "WPSC7004",
      "WPSO807",
      "WPSO8L01",
      "WPSO805",
      "WSO814",
      "3301960",
      "WPSC7005",
      "WTSOP05",
      "WPSO803",
    ],
  },
  {
    columnHeader: "data_provider",
    columnDisplayName: "Data Provider",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["SM", "fet_test_summary", "HVM_LOT_SUMMARY", "FET_TEST"],
  },
  {
    columnHeader: "data_type",
    columnDisplayName: "Data Type",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["PROD", "QUALITY", "MARY"],
  },
  {
    columnHeader: "prod_data",
    columnDisplayName: "Prod Data",
    columnType: "boolean",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "retest_index",
    columnDisplayName: "Retest Index",
    columnType: "int",
    showByDefault: 0,
    possibleValues: [0],
  },
  {
    columnHeader: "job_nam",
    columnDisplayName: "Test Program",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "FRGBD740",
      "FRGB8682",
      "FRGBB858",
      "FRGB6157",
      "FRGB5008",
      "FRGB7485",
      "FRGBD569",
      "FRGB6808",
      "FRGBC122",
    ],
  },
  {
    columnHeader: "job_rev",
    columnDisplayName: "Test Program Rev",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "oper_nam",
    columnDisplayName: "Operator",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "exec_typ",
    columnDisplayName: "Exec",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "exec_ver",
    columnDisplayName: "Exec Ver",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "test_cod",
    columnDisplayName: "Test Code",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["SM", "KS", "XA"],
  },
  {
    columnHeader: "facil_id",
    columnDisplayName: "Facility",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["SM", "KS", "XA"],
  },
  {
    columnHeader: "tst_temp",
    columnDisplayName: "Temp",
    columnType: "",
    showByDefault: "",
    possibleValues: [],
  },
  {
    columnHeader: "rtst_cod",
    columnDisplayName: "Retest Code",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["N"],
  },
  {
    columnHeader: "burn_tim",
    columnDisplayName: "Burn Time",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["65535"],
  },
  {
    columnHeader: "cmod_cod",
    columnDisplayName: "CMOD",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "part_typ",
    columnDisplayName: "Part Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "SI7625DN",
      "SC4435DDY",
      "SQ2309ES",
      "SIE818DF",
      "SQ7414AENW",
      "SC2302CDS",
      "SQ4850EY",
      "SQD15N06-42L_GE3",
      "SIRA14DP",
      "SPA517DJ",
      "SQ3481EV",
      "SC4401DDY",
      "SQJ858AEP",
      "SIHG30N60E-GE3",
      "SQ2310ES",
      "SQM120P04-04L_GE3",
      "SI1012R",
      "SI7615DN",
      "SI2325DS",
      "TMSUD35N10-26P",
      "SC3424CDV",
      "SIZF906DT",
      "SI1410EDH",
      "SQ2351ES",
      "SCA447DJ",
      "SC4403CDY",
      "SQJ951EP",
      "SIR424DP",
      "SQ2337ES",
      "SISA18JN",
      "SIRA12DP",
      "SC2308BDS",
      "SC3493BDV",
      "SQ3427AEEV",
      "SCA421DJ",
      "SA7434DP",
      "SC7115DN",
      "SIUD412ED",
      "SI2392ADS",
      "SI1427EDH",
      "SC5419DU",
      "SA4850EY",
      "SQ3426AEEV",
      "SIR462DP",
      "SC4134DY",
      "SI7456DP",
      "SC4455DY",
      "SIZ342DT",
      "SCA445EDJ",
      "IRFP360PBF",
      "SC7540ADP",
    ],
  },
  {
    columnHeader: "user_txt",
    columnDisplayName: "User Text",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "[GALAXY_DATA_ORIGIN]:ATETEST:fet_test_summary",
      "[GALAXY_DATA_ORIGIN]:ATETEST:HVM_LOT_SUMMARY",
      "[GALAXY_DATA_ORIGIN]:ATETEST:FET_TEST",
    ],
  },
  {
    columnHeader: "aux_file",
    columnDisplayName: "Aux File",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "FRGBD740.TES",
      "FRGB8682.TES",
      "FRGBB858.TES",
      "FRGB6157.TES",
      "FRGB5008.TES",
      "FRGB7485.TES",
      "FRGBD569.TES",
      "FRGB6808.TES",
      "FRGBC122.TES",
    ],
  },
  {
    columnHeader: "pkg_typ",
    columnDisplayName: "Package",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["1S", "2P", "TO247", "2D"],
  },
  {
    columnHeader: "famly_id",
    columnDisplayName: "Family",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["Commercial", "Automotive", "HVM"],
  },
  {
    columnHeader: "floor_id",
    columnDisplayName: "Floor",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["Vishay Siliconix HV", "Standard HexFET"],
  },
  {
    columnHeader: "proc_id",
    columnDisplayName: "Proc ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "PFGB30D8XFTS",
      "PMGN30D8XFTS",
      "APBSP60D8XEIZ",
      "NBQR75B8XIZ",
      "ANQZP60D8XIZ",
      "NHWT20G8XIZ",
      "ANBQW60B8XIZ",
      "ANBQZ60B8XIZ",
      "NSGO30D8XTS",
      "PMWB12G8XIZ",
      "APJAC30D8XEIZ",
      "PMGJ40D8XIZ",
      "ANQWQ40D8XIZ",
      "HVNKABGD8T",
      "ANQWE20G8XEIZ",
      "APBRK40D8XIZ",
      "NAAN20G6XTS",
      "PFGB20F8XFTS",
      "PBJM150A6XTS",
      "NBYK100H6XTS",
      "NGGM30D8XETT",
      "NSYH30D8XTS",
      "NAAI20G6XSC",
      "APJAB20F8XEIZ",
      "PFHG12T8XIZ",
      "PMGN20G8XIZ",
      "APBRM30D8XIZ",
      "NNWE20D8XCIZ",
      "APBSK80D8XIZ",
      "NSGY30D8XTS",
      "NSGN30D8XTS",
      "NBNU60D6XTS",
      "PMGF20G8XIZ",
      "APJBA60D8XEIZ",
      "PMGI30D8XCIZ",
      "NBDJ250H6XTS",
      "PBRD150A6XTS",
      "NNHE12R8XIZ",
      "NDFF100D8XEIZ",
      "PMHC20G8XIZ",
      "PMWU30D8XIZ",
      "TNFT60B8XIZ",
      "ANQZK60D8XEIZ",
      "NNWE30D8XFTS",
      "NHGC30D8XETT",
      "TNLA100A6XTS",
      "NSWA30D8XTJ",
      "PFGG20F8XIZ",
      "HVNFASED6T",
      "PMHS20F8XEIZ",
    ],
  },
  {
    columnHeader: "oper_frq",
    columnDisplayName: "Op Frq",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "spec_nam",
    columnDisplayName: "Spec Name",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "spec_ver",
    columnDisplayName: "Spec Ver",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "flow_id",
    columnDisplayName: "Flow",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "setup_id",
    columnDisplayName: "Setup",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "dsgn_rev",
    columnDisplayName: "Design Rev",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "eng_id",
    columnDisplayName: "Eng ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "rom_cod",
    columnDisplayName: "ROM",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "PPK1212BWL",
      "SOIC8",
      "TO236",
      "POLARPAK",
      "PP1212W",
      "TO252",
      "PPAKSO8BWL",
      "PPAKSC70-6",
      "TSOP6",
      "PPKSO8L",
      "TO263",
      "SC75A",
      "PPR6X5FBWL",
      "SC70-6L",
      "PPAKSO8",
      "PPAK1212",
      "PP0806",
      "PPKCHIPFET",
      "PPR3X3BWL",
    ],
  },
  {
    columnHeader: "serl_num",
    columnDisplayName: "Serial Num",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "supr_nam",
    columnDisplayName: "Sup Name",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "head_num",
    columnDisplayName: "Head Num",
    columnType: "int",
    showByDefault: 0,
    possibleValues: [0, 1, 255],
  },
  {
    columnHeader: "handler_typ",
    columnDisplayName: "Handler Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "handler_id",
    columnDisplayName: "Handler",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "FET-58",
      "FET-55",
      "FET-69",
      "FET-57",
      "M-24",
      "FET-51",
      "FET-72",
      "FET-53",
      "FET-44",
      "FET-30",
      "FET-26",
      "FET-63",
      "FET-64",
      "47",
      "FET-43",
      "FET-42",
      "FET-4",
      "FET-36",
      "FET-41",
      "FET-70",
      "FET-68",
      "FET-62",
      "FET-67",
      "FET-46",
      "FET-34",
      "FET-19",
      "FET-61",
      "FET-73",
      "FET-38",
      "FET-66",
      "FET-7",
      "FET-50",
      "FET-8",
      "M-12",
      "FET-23",
      "M-25",
    ],
  },
  {
    columnHeader: "card_typ",
    columnDisplayName: "Card Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "card_id",
    columnDisplayName: "Card ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["I-12", "I-21", "I-11"],
  },
  {
    columnHeader: "loadboard_typ",
    columnDisplayName: "Loadboard Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "loadboard_id",
    columnDisplayName: "Loadboard",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "ITC-107",
      "ITC-25",
      "ITC-41",
      "ITC-96",
      "U-9",
      "ITC-21",
      "ITC-45",
      "ITC-101",
      "ITC-91",
      "ITC-38",
      "ITC-70",
      "ITC-20",
      "ITC-34",
      "95",
      "ITC-97",
      "ITC-69",
      "ITC-89",
      "ITC-22",
      "ITC-85",
      "ITC-86",
      "ITC-35",
      "ITC-26",
      "ITC-48",
      "ITC-14",
      "ITC-52",
      "ITC-104",
      "ITC-88",
      "ITC-28",
      "ITC-55",
      "ITC-57",
      "ITC-18",
      "ITC-56",
      "ITC-16",
      "ITC-93",
      "ITC-75",
      "ITC-87",
      "ITC-81",
      "ITC-30",
      "ITC-59",
      "ITC-100",
      "ITC-6",
      "ITC-17",
      "ITC-23",
      "ITC-58",
      "ITC-76",
      "U-7",
      "ITC-73",
      "ITC-44",
      "ITC-12",
      "U-8",
    ],
  },
  {
    columnHeader: "dib_typ",
    columnDisplayName: "DIB Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "dib_id",
    columnDisplayName: "DIB ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "RG-153",
      "RG-5",
      "RG-41",
      "RG-123",
      "L-4",
      "RG-61",
      "RG-148",
      "RG-143",
      "RG-112",
      "RG-71",
      "RG-105",
      "RG-117",
      "RG-47",
      "43",
      "RG-120",
      "RG-107",
      "RG-69",
      "RG-40",
      "RG-57",
      "RG-137",
      "RG-150",
      "RG-88",
      "RG-44",
      "RG-6",
      "RG-135",
      "RG-91",
      "RG-59",
      "RG-96",
      "RG-75",
      "RG-73",
      "RG-129",
      "RG-110",
      "RG-90",
      "RG-68",
      "RG-109",
      "RG-119",
      "RG-82",
      "RG-78",
      "RG-27",
      "RG-134",
      "RG-58",
      "RG-45",
      "RG-60",
      "RG-16",
      "RG-4",
      "RG-83",
      "RG-26",
      "RG-157",
      "RG-136",
      "L-18",
      "RG-31",
      "RG-98",
      "RG-106",
      "L-12",
    ],
  },
  {
    columnHeader: "contactor_typ",
    columnDisplayName: "Contactor Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "contactor_id",
    columnDisplayName: "Contactor ID",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["ITC-26", "ITC-6"],
  },
  {
    columnHeader: "laser_typ",
    columnDisplayName: "Laser Type",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "laser_id",
    columnDisplayName: "Laser ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["RG-151", "RG-32", "RG-19", "RG-62", "RG-109"],
  },
  {
    columnHeader: "extra_typ",
    columnDisplayName: "Extra Type",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["DBkeys_ok"],
  },
  {
    columnHeader: "extra_id",
    columnDisplayName: "Extra ID",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["VHAH600E", "TR-8", "TR-1", "567075"],
  },
  {
    columnHeader: "file_path",
    columnDisplayName: "File Path",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "E:/Cache/FT/final_test_atdf/2018-Jan",
      "E:/FINAL_TEST_CSV/FT_OTILESS_ATD",
      "E:/HVM_FT_RAW_DATA/ATDFConverted",
      "E:/QA_OUT/2018-Jan",
    ],
  },
  {
    columnHeader: "file_name",
    columnDisplayName: "File Name",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "J40Y128.1_FT_0.atd",
      "J39Y090.13_FT_0.atd",
      "J40Y119.5_FT_0.atd",
      "J42D152.2_FT_0.atd",
      "F24D764.3.csv_20180102.002310_gexmo.atd",
      "J43D416.3_FT_0.atd",
      "J44D509.6_FT_0.atd",
      "J46D935.2_FT_0.atd",
      "J45D909.21.csv_20180102.003017_gexmo.atd",
      "J40D723.37_FT_0.atd",
      "J40Y017.7_FT_0.atd",
      "J45D736.6_FT_0.atd",
      "J42D210.2_FT_0.atd",
      "J45D766.9_FT_0.atd",
      "J46D963.6_FT_0.atd",
      "J37Y100.5.CSV_20180102.005011_gexmo.atd",
      "J33D088.1_FT_0.atd",
      "J44D563.2.csv_20180102.010211_gexmo.atd",
      "G35K004.30_FT_0.atd",
      "J22Y140.18_FT_0.atd",
      "J44K293.3_FT_0.atd",
      "J30K204.3.csv_20180102.013611_gexmo.atd",
      "J24E497.21_FT_0.atd",
      "J11Y012.18.csv_20180102.021039_gexmo.atd",
      "G12353.18_FT_0.atd",
      "J39D444.24_FT_0.atd",
      "J41D085.4_FT_0.atd",
      "J42D105.6_FT_0.atd",
      "J43D470.4_FT_0.atd",
      "J43Y113.6_FT_0.atd",
      "J44D608.10_FT_0.atd",
      "J39D488.6_FT_0.atd",
      "J42D105.3_FT_0.atd",
      "J26D775.2_FT_0.atd",
      "J40Y162.11_FT_0.atd",
      "J37Y002.4.CSV_20180102.023016_gexmo.atd",
      "J43Y030.1_FT_0.atd",
      "J40Y128.6_FT_0.atd",
      "J44K270.3_FT_0.atd",
      "J44D652.1_FT_0.atd",
      "J46D084.10_FT_0.atd",
      "J38D3391.dat",
      "J31D774.8_FT_0.atd",
      "J40Y1281.dat",
      "J40Y162B.dat",
      "J45D889.3_FT_0.atd",
      "J44D608.13_FT_0.atd",
      "J45K2049.dat",
      "J38D339.1_FT_0.atd",
      "J39K020.1_FT_0.atd",
      "J46K1242.dat",
      "J31D791.37_FT_0.atd",
      "J38D433.10_FT_0.atd",
      "J41D043.28_FT_0.atd",
      "J47D1889.dat",
      "J42D167.11_FT_0.atd",
      "J47D188.9_FT_0.atd",
      "J44D5016.dat",
      "J43D405.16_FT_0.atd",
      "H51Y0201.dat",
      "J14E261.1_FT_0.atd",
      "J44D501.6_FT_0.atd",
      "J38D433A.dat",
      "J43D467.1_FT_0.atd",
      "J40D723.33_FT_0.atd",
      "J42D152.6_FT_0.atd",
      "J42K106.1_FT_0.atd",
      "J45D765.5_FT_0.atd",
      "J45K240.1_FT_0.atd",
      "J33D088.43_FT_0.atd",
      "J45K204.9_FT_0.atd",
      "J46K124.2_FT_0.atd",
      "F18A036.27.csv_20180102.035513_gexmo.atd",
      "J42D109.1_FT_0.atd",
      "J48K029.1.CSV_20180102.041014_gexmo.atd",
      "J46D082.7_FT_0.atd",
      "J43D315.15_FT_0.atd",
      "J45D909.19.csv_20180102.042014_gexmo.atd",
    ],
  },
  {
    columnHeader: "valid_splitlot",
    columnDisplayName: "Valid File",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["Y", "N"],
  },
  {
    columnHeader: "insertion_time",
    columnDisplayName: "Insertion Time",
    columnType: "dateRange",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "subcon_lot_id",
    columnDisplayName: "Subcon Lot",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "J40Y128",
      "J39Y090",
      "J40Y119",
      "J42D152",
      "F24D764",
      "J43D416",
      "J44D509",
      "J46D935",
      "J45D909",
      "J40D723",
      "J40Y017",
      "J45D736",
      "J42D210",
      "J45D766",
      "J46D963",
      "J37Y100",
      "J33D088",
      "J44D563",
      "G35K004",
      "J22Y140",
      "J44K293",
      "J30K204",
      "J24E497",
      "J11Y012",
      "G12353",
      "J39D444",
      "J41D085",
      "J42D105",
      "J43D470",
      "J43Y113",
      "J44D608",
      "J39D488",
      "J26D775",
      "J40Y162",
      "J37Y002",
      "J43Y030",
      "J44K270",
      "J44D652",
      "J46D084",
      "J38D339",
      "J31D774",
      "J45D889",
      "J45K204",
      "J39K020",
      "J46K124",
      "J31D791",
      "J38D433",
      "J41D043",
      "J47D188",
      "J42D167",
      "J44D501",
      "J43D405",
      "H51Y020",
      "J14E261",
      "J43D467",
      "J42K106",
      "J45D765",
      "J45K240",
      "F18A036",
      "J42D109",
      "J48K029",
      "J46D082",
      "J43D315",
    ],
  },
  {
    columnHeader: "sya_id",
    columnDisplayName: "SYA ID",
    columnType: "int",
    showByDefault: 0,
    possibleValues: [
      23082,
      23421,
      22019,
      20117,
      22033,
      23067,
      22062,
      21102,
      22689,
      22922,
      22261,
      23417,
      22174,
      22738,
      22182,
      21145,
      23186,
      23020,
      23183,
      22275,
      21399,
      16368,
      22026,
      23088,
      21659,
      21981,
      23244,
      22158,
      16566,
      22681,
      22822,
      23448,
      22040,
      23086,
      22339,
      22844,
      23535,
      22337,
      22950,
      23452,
      23454,
      22249,
      22417,
      23415,
      22448,
      22911,
      22018,
      22389,
      22719,
      22362,
    ],
  },
  {
    columnHeader: "recipe_id",
    columnDisplayName: "Recipe",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "consolidation_name",
    columnDisplayName: "Consolidation Name",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "consolidation_flow",
    columnDisplayName: "Consolidation Flow",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "application",
    columnDisplayName: "Application",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["Commercial", "Automotive", "HVM"],
  },
  {
    columnHeader: "bvdss",
    columnDisplayName: "BVDSS",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "30V",
      "60V",
      "75V",
      "20V",
      "12V",
      "40V",
      "600V",
      "150V",
      "100V",
      "80V",
      "250V",
      "400V",
    ],
  },
  {
    columnHeader: "cell_density",
    columnDisplayName: "Cell Density",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "1000",
      "200",
      "90",
      "45",
      "300",
      "SJ2",
      "32",
      "80",
      "N",
      "180",
      "37",
      "50",
      "Gen3",
    ],
  },
  {
    columnHeader: "device_design",
    columnDisplayName: "Device Design",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "Stripe_Cell",
      "Closed_Cell",
      "Split_Gate",
      "Planar",
      "Closed_Cell-ESD",
      "Stripe_Cell-ESD",
      "Dual_Trench",
    ],
  },
  {
    columnHeader: "device_polarity",
    columnDisplayName: "Polarity",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["P-channel", "N-channel"],
  },
  {
    columnHeader: "fab_loc",
    columnDisplayName: "Fab",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["TOWER", "VSIG", "Tower Texas", "SCLA", "TOWER JAPAN"],
  },
  {
    columnHeader: "gate_oxide",
    columnDisplayName: "Gate Oxide",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["500A", "700A", "170A", "1000A", "300A", "200A", "130A"],
  },
  {
    columnHeader: "geometry_name",
    columnDisplayName: "Geometry",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "PFGB30D8XFTS",
      "PMGN30D8XFTS",
      "APBSP60D8XEIZ",
      "NBQR75B8XIZ",
      "ANQZP60D8XIZ",
      "NHWT20G8XIZ",
      "ANBQW60B8XIZ",
      "ANBQZ60B8XIZ",
      "NSGO30D8XTS",
      "PMWB12G8XIZ",
      "APJAC30D8XEIZ",
      "PMGJ40D8XIZ",
      "ANQWQ40D8XIZ",
      "HVNKABGD8T",
      "ANQWE20G8XEIZ",
      "APBRK40D8XIZ",
      "NAAN20G6XTS",
      "PFGB20F8XFTS",
      "PBJM150A6XTS",
      "NBYK100H6XTS",
      "NGGM30D8XETT",
      "NSYH30D8XTS",
      "NAAI20G6XSC",
      "APJAB20F8XEIZ",
      "PFHG12T8XIZ",
      "PMGN20G8XIZ",
      "APBRM30D8XIZ",
      "NNWE20D8XCIZ",
      "APBSK80D8XIZ",
      "NSGY30D8XTS",
      "NSGN30D8XTS",
      "NBNU60D6XTS",
      "PMGF20G8XIZ",
      "APJBA60D8XEIZ",
      "PMGI30D8XCIZ",
      "NBDJ250H6XTS",
      "PBRD150A6XTS",
      "NNHE12R8XIZ",
      "NDFF100D8XEIZ",
      "PMHC20G8XIZ",
      "PMWU30D8XIZ",
      "TNFT60B8XIZ",
      "ANQZK60D8XEIZ",
      "NNWE30D8XFTS",
      "NHGC30D8XETT",
      "TNLA100A6XTS",
      "NSWA30D8XTJ",
      "PFGG20F8XIZ",
      "HVNFASED6T",
      "PMHS20F8XEIZ",
    ],
  },
  {
    columnHeader: "dspart_short",
    columnDisplayName: "Die Sort Part",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [
      "DSPFGBSMT30DTHB8FSL8TS",
      "DSPMGNSMT30DJ08FSL8TS",
      "DSAPBSPT60DFO8ESL8IZB",
      "DSNBQRIZP75BDK8A8IZ",
      "DSANQZPT60DJBR8A8IZB",
      "DSNHWTSMT20GKAN8A8IZ",
      "DSANBQWT60BCO8A8IZB",
      "DSANBQZT60BCO8A8IZB",
      "DSNSGOSMM30DXFN8W8TS",
      "DSPMWBSMT12GJ08A8IZ",
      "DSAPJACT30DFO8ESL8IZB",
      "DSPMGJSMT40DJ08A8IZ",
      "DSANQWQT40DJBR8A8IZB",
      "DSVHAHT600E8TS",
      "DSANQWET20GJBR8ESL8IZB",
      "DSAPBRKT40DFO8A8IZB",
      "DSNAANQ20GCE6TS",
      "DSPFGBSMT20FTN8FSL8TS",
      "DSPBJMT150AFO6TS",
      "DSNBYKSMT100HFO6TS",
      "DSNGGMSMT30DJBR8ESL8TT",
      "DSNSYHSMN30DQPM8W8TS",
      "DSAPJABT20FFB8ESL8IZB",
      "DSPFHGSMT12TTB8A8IZ",
      "DSPMGNSMT20GJ08B8IZ",
      "DSAPBRMT30DFB8A8IZB",
      "DSNNWESMP20DJBQ8CSL8IZ",
      "DSAPBSKT80DFO8A8IZB",
      "DSNSGYSMM30DXFN8W8TS",
      "DSNSGNSMM30DXFN8W8TS",
      "DSNBNUT60DFO6TS",
      "DSPMGFSMT20GJ08A8IZ",
      "DSAPJBAT60DFE8ESL8IZB",
      "DSPMGISMT30DJ08CSL8IZ",
      "DSNBDJT250HDOG6TS",
      "DSPBRDT150AFO6TS",
      "DSNNHESMN12RKEL8A8IZ",
      "DSNDFFSMT100DNNF8ESL8IZ",
      "DSPMHCSMT20GJEC8A8IZ",
      "DSPMWUSMT30DJ08A8IZ",
      "DSTNFTT60BA8A8IZ",
      "DSANQZKT60DJEB8ESL8IZB",
      "DSNNWESMP30DJBQ8FSL8TS",
      "DSNHGCSMT30DJBR8ESL8TT",
      "DSTNLASMT100ABA6TS",
      "DSNSWASMM30DXFN8W8TJ",
      "DSPFGGSMT20FTE8A8IZ",
      "567086TS",
      "DSPMHSSMT20FJ08ESL8IZ",
    ],
  },
  {
    columnHeader: "dspart_rev",
    columnDisplayName: "Die Sort Part Rev",
    columnType: "string",
    showByDefault: 0,
    possibleValues: [],
  },
  {
    columnHeader: "site_loc",
    columnDisplayName: "Location",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["SM", "KS", "XA"],
  },
  {
    columnHeader: "wafer_size",
    columnDisplayName: "Wafer Size",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["8in", "6in"],
  },
  {
    columnHeader: "stack_map",
    columnDisplayName: "Stack Map",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["X"],
  },
  {
    columnHeader: "dummy",
    columnDisplayName: "Dummy",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["75um", "60um", "100um", "60um/100um"],
  },
  {
    columnHeader: "vthres",
    columnDisplayName: "VTHRES",
    columnType: "string",
    showByDefault: 0,
    possibleValues: ["2.0V", "0.6V", "1.0V", "3.0V", "0.4V"],
  },
  {
    columnHeader: "device_type",
    columnDisplayName: "Device Type",
    columnType: "enum",
    showByDefault: 0,
    possibleValues: ["LVM", "HVM"],
  },
  {
    columnHeader: "cost",
    columnDisplayName: "Cost",
    columnType: "float",
    showByDefault: 0,
    possibleValues: [],
  },
];
