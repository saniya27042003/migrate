const oracledb = require('oracledb');
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, Connection } from 'typeorm';
import *as moment from 'moment'
import { CITYMASTER } from '../entity/entity/city-master.entity';
import { ACMASTER } from '../entity/entity/gl-account-master.entity';
import { ACCOHEAD } from '../entity/entity/gl-statement-code.entity';
import { ADVOCATEMASTER } from '../entity/entity/advocate-master.entity';
import { AUTHORITYMASTER } from '../entity/entity/authority-master.entity';
import { BANKMASTER } from '../entity/entity/bank-master.entity';
import { BRANCHMASTER } from '../entity/entity/clearing-branch-master.entity';
import { CASTMASTER } from '../entity/entity/cast-master.entity';
import { CATEGORYMASTER } from '../entity/entity/category-master.entity';
import { DEPRCATEGORY } from '../entity/entity/depriciation-category-master.entity';
import { DEPRRATE } from '../entity/entity/depriciation-rate-master.entity';
import { DIRECTORMASTER } from '../entity/entity/director-master.entity';
import { HOLIDAYSMASTER } from '../entity/entity/holiday.entity';
import { HEALTHMASTER } from '../entity/entity/health-master.entity';
import { INDUSTRYMASTER } from '../entity/entity/industry-master.entity';
import { INSUARANCEMASTER } from '../entity/entity/insurance-master.entity';
import { INTCATEGORYMASTER } from '../entity/entity/interest-category-master.entity';
import { INTRATESBPG } from '../entity/entity/saving-and-pigmy-interest-rates.entity';
import { ITEMMASTER } from '../entity/entity/dead-stock-master.entity';
import { LOANSTAGEMASTER } from '../entity/entity/loan-stage-master.entity';
import { NARRATIONMASTER } from '../entity/entity/narration.entity';
import { OCCUPATIONMASTER } from '../entity/entity/ocuupation-master.entity';
import { OPERATIONMASTER } from '../entity/entity/operation-master.entity';
import { PGCOMMISSIONMASTER } from '../entity/entity/PGCOMMISSIONMASTER.entity';
import { PRIORITYMASTER } from '../entity/entity/PRIORITYMASTER.entity';
import { PURPOSEMASTER } from '../entity/entity/purpose-master.entity';
import { REPORTTYPEMASTER } from '../entity/entity/report-type-master.entity';
import { SCHEMAST } from '../entity/entity/schemeParameters.entity';
import { IDMASTER } from '../entity/entity/customer-id.entity';
import { CUSTOMERADDRESS } from '../entity/entity/customer-address.entity';
import { SHMASTER } from '../entity/entity/share-master.entity';
import { DPMASTER } from '../entity/entity/dpmaster.entity';
import { LNMASTER } from '../entity/entity/term-loan-master.entity';
import { LNACINTRATE } from '../entity/entity/lnacintrate.entity';
import { GUARANTERDETAILS } from '../entity/entity/guarantor.entity';
import { PGMASTER } from '../entity/entity/pgmaster.entity';
import { ACCOTRAN } from '../entity/entity/accotran.entity';
import { DEPOTRAN } from '../entity/entity/depotran.entity';
import { LOANTRAN } from '../entity/entity/loantran.entity';
import { SHARETRAN } from '../entity/entity/sharetran.entity';
import { PIGMYTRAN } from '../entity/entity/pigmytran.entity';
import { HISTORYTRAN } from '../entity/entity/HISTORYTRAN.entity';
import { DAILYTRAN } from '../entity/entity/voucher.entity';
import { TRANINPUTHEAD } from '../entity/entity/transcation-input-gl-head-setting.entity';
import { HISTORYDIVIDEND } from '../entity/entity/shares-dividend.entity';
import { NOMINEELINK } from '../entity/entity/nominee.entity';
import { ATTERONEYLINK } from '../entity/entity/power-of-attorney.entity';
import { JointAcLink } from '../entity/entity/joint-account.entity';
import { TERMINTRATE } from '../entity/entity/rate-for term.entity';
import { INTRATETD } from '../entity/entity/interest-rate-for-term-deposit.entity';
import { INTRATETDMULTI } from '../entity/entity/deposit-intrest-rate.entity';
import { INTMULTI } from '../entity/entity/slab-int.entity';
import { INTRATELOAN } from '../entity/entity/interest-rate-for-loan-and-cc.entity';
import { LNCCLOAN } from '../entity/entity/loan-and-cc.entity';
import { INTRATEPATSCHEMES } from '../entity/entity/pat-scheme-interest-rates.entity';
import { INTRATE } from '../entity/entity/interest-rate.entity';
import { PREMATULESSRATE } from '../entity/entity/premature-pigmy-less-int-rate.entity';
import { PREMATULESS } from '../entity/entity/pigmy-less-int.entity';
import { SECURITYMASTER } from '../entity/entity/security-code.entity';
import { TDSRATE } from '../entity/entity/tds-interest-rate.entity';
import { SECURITYDETAILS } from '../entity/entity/security.entity';
import { COBORROWER } from '../entity/entity/coborrower.entity';
import { BANKDETAILS } from '../entity/entity/BANKDETAILS.entity';
import { COURTMASTER } from '../entity/entity/court-master.entity';
import { DOCUMENTMASTER } from '../entity/entity/document-master.entity';
import { ITEMCATEGORYMASTER } from '../entity/entity/item-category-master.entity';
import { LOCKERRACKMASTER } from '../entity/entity/locker-rack-master.entity';
import { LOCKERSIZE } from '../entity/entity/locker-size-master.entity';
import { LOCKERMASTER } from '../entity/entity/locker-rackwise-master.entity';
import { BALACATA } from '../entity/entity/minimum-balance-master.entity';
import { OWNBRANCHMASTER } from '../entity/entity/own-branch-master.entity';
import { PREFIX } from '../entity/entity/prefix-master.entity';
import { PRIORITYSECTORMASTER } from '../entity/entity/priority-sector-master.entity';
import { RECOVERYCLEARKMASTER } from '../entity/entity/recovery-cleark-master.entity';
import { RISKCATEGORYMASTER } from '../entity/entity/risk-category.entity';
import { SALARYDIVISIONMASTER } from '../entity/entity/salary-division-master.entity';
import { SUBSALARYMASTER } from '../entity/entity/sub-salary-division-master.entity';
import { WEAKERMASTER } from '../entity/entity/weaker-master.entity';
import { TDSFORMSUBMIT } from '../entity/entity/tds-form.entity';
import { NPAMASTER } from '../entity/entity/npa-classification.entity';
import { NPACLASSIFICATION } from '../entity/entity/npa-class.entity';
import { TDRECEIPTMASTER } from '../entity/entity/td-receipt-type.entity';
import { BOOKDEBTS } from '../entity/entity/book-debts.entity';
import { SECINSURANCE } from '../entity/entity/customer-insurance.entity';
import { FIREPOLICY } from '../entity/entity/fire-policy.entity';
import { FURNITURE } from '../entity/entity/furniture-and-fixture.entity';
import { GOLDSILVER } from '../entity/entity/gold-and-silver.entity';
import { GOVTSECULIC } from '../entity/entity/govt-security-and-lic.entity';
import { LANDBUILDING } from '../entity/entity/land-and-buildings.entity';
import { MARKETSHARE } from '../entity/entity/market-shares.entity';
import { OTHERSECURITY } from '../entity/entity/other-security.entity';
import { OWNDEPOSIT } from '../entity/entity/own-deposits.entity';
import { PLANTMACHINARY } from '../entity/entity/plant-and-machinery.entity';
import { PLEDGESTOCK } from '../entity/entity/pleadge-stock.entity';
import { STOCKSTATEMENT } from '../entity/entity/stock-statement.entity';
import { VEHICLE } from '../entity/entity/vehicle.entity';
import { RENEWALHISTORY } from '../entity/entity/RENEWALHISTORY.entity';
import { SYSPARA } from '../entity/entity/system-master-parameters.entity';
import { DIVPAIDTRAN } from '../entity/entity/DIVPAIDTRAN.entity';
import { INTINSTRUCTION } from '../entity/entity/interest-instruction.entity';
import { TODTRAN } from '../entity/entity/over-draft.entity';
import { SPECIALINSTRUCTION } from '../entity/entity/special-instruction.entity';
import { STANDINSTRUCTION } from '../entity/entity/standing-instruction.entity';
import { INTERESTTRAN } from '../entity/entity/INTERESTTRAN.entity'
import { COMMISSIONSLAB } from '../entity/entity/COMMISSIONSLAB.entity';
import { TEMPJOINTACLINK } from '../entity/entity/tempjointaclink.entity'
import { SIZEWISEBALANCE } from '../entity/entity/SIZEWISEBALANCE.entity'
import { TERMMASTER } from '../entity/entity/termmaster.entity'
import { AGENTCHANGEHISTORY } from '../entity/entity/AGENTCHANGEHISTORY.entity'
import { BANKBRANCHMASTER } from '../entity/entity/BANKBRANCHMASTER.entity'
import { BANKCOMMISSION } from '../entity/entity/BANKCOMMISSION.entity'
import { BANKDEPOTRAN } from '../entity/entity/BANKDEPOTRAN.entity'
import { BATCHVOUCHERTRAN } from '../entity/entity/BATCHVOUCHERTRAN.entity'
import { BUDGETMASTER } from '../entity/entity/BUDGETMASTER.entity'
import { CASHINTINSTRUCTIONS } from '../entity/entity/CASHINTINSTRUCTIONS.entity'
import { CDRATIO } from '../entity/entity/CDRATIO.entity'
import { CHARGES } from '../entity/entity/scheme-type-charges.entity'
import { CHARGESAMT } from '../entity/entity/charges.entity'
import { CHARGESNOTING } from '../entity/entity/CHARGESNOTING.entity'
import { DAILYSHRTRAN } from '../entity/entity/DAILYSHRTRAN.entity'
import { NPALOCK } from '../entity/entity/NPALOCK.entity'
import { EXCESSCASH } from '../entity/entity/EXCESSCASH.entity'
import { CRARTRAN } from '../entity/entity/CRARTRAN.entity'
import { DENOMINATION } from '../entity/entity/DENOMINATION.entity'
import { USERDENOMINATION } from '../entity/entity/USERDENOMINATION.entity'
import { SCHEMDATA } from '../entity/entity/SCHEMDATA.entity'
import { HISTORYDENO } from '../entity/entity/HISTORYDENO.entity'
import { HISTORYGENERALMEETING } from '../entity/entity/HISTORYGENERALMEETING.entity'
import { INTHISTORYTRAN } from '../entity/entity/INTHISTORYTRAN.entity'
import { TDSTRAN } from '../entity/entity/TDSTRAN.entity'
import { OIRTRAN } from '../entity/entity/OIRTRAN.entity'
import { RECOTRAN } from '../entity/entity/RECOTRAN.entity'
import { TDRECEIPTISSUE } from '../entity/entity/TDRECEIPTISSUE.entity'
import { STANDINSTRUCTIONLOG } from '../entity/entity/STANDINSTRUCTIONLOG.entity'
import { NPADATA } from '../entity/entity/NPADATA.entity'
import { INTINSTRUCTIONSLOG } from '../entity/entity/INTINSTRUCTIONSLOG.entity'
import { PASSBOOKPRINT } from '../entity/entity/PASSBOOKPRINT.entity'
import { PASSBOOKHISTORY } from '../entity/entity/PASSBOOKHISTORY.entity'
import { SUBSIDARYMASTER } from '../entity/entity/SUBSIDARYMASTER.entity'
import { MORATORIUMPERIOD } from '../entity/entity/moratorium-peroid-master.entity'
import { DEADSTOCKDETAIL } from '../entity/entity/DEADSTOCKDETAIL.entity'
import { DEADSTOCKHEADER } from '../entity/entity/DEADSTOCKHEADER.entity'
import { SHARECAPITALAMTDETAILS } from '../entity/entity/SHARECAPITALANTDETAILS.entity'
import { GLREPORTLINK } from '../entity/entity/GLREPORTLINK.entity'
import { GLREPORTMASTER } from '../entity/entity/GLREPORTMASTER.entity'
import { LOCKERTRAN } from '../entity/entity/LOCKERTRAN.entity'
import { LOCKERRENTTRAN } from '../entity/entity/LOCKERRENTTRAN.entity'
import { DEPOCLOSETRAN } from '../entity/entity/DEPOCLOSETRAN.entity'
import { DEPOCLOSETRANSAC } from '../entity/entity/DEPOCLOSETRANSAC.entity'
import { MANAGERVIEW } from '../entity/entity/manager-view-glp.entity'
import { DIVIDEND } from '../entity/entity/DIVIDEND.entity'
import { PIGMYCHARTMASTER } from '../entity/entity/pigmyChart.entity'
import { PIGMYCHART } from '../entity/entity/pigmy-chart.entity'
import { CUSTDOCUMENT } from '../entity/entity/document.entity'
import oracledb from 'oracledb';
import { createWriteStream } from 'fs';
import mime from 'mime-types';
import * as fs from 'fs';
import { SMSMAST } from '../entity/entity/SMSMAST.entity';
import * as sql from 'mssql';

import { transliterate } from './marathi-to-english.util';

const unidev = require('unidev');


@Injectable()
export class MigrateService {
  lndata: any;
  result1: any[];
  constructor(@InjectRepository(CATEGORYMASTER) private readonly CATEGORYMASTERService: Repository<CATEGORYMASTER>,
    @InjectRepository(CUSTDOCUMENT) private CUSTDOCUMENTService: Repository<CUSTDOCUMENT>,
    @InjectRepository(PIGMYCHARTMASTER) private PIGMYCHARTMASTERService: Repository<PIGMYCHARTMASTER>,
    @InjectRepository(PIGMYCHART) private PIGMYCHARTService: Repository<PIGMYCHART>,
    @InjectRepository(DIVIDEND) private DIVIDENDService: Repository<DIVIDEND>,
    @InjectRepository(LOCKERRENTTRAN) private LOCKERRENTTRANService: Repository<LOCKERRENTTRAN>,
    @InjectRepository(LOCKERTRAN) private LOCKERTRANService: Repository<LOCKERTRAN>,
    @InjectRepository(GLREPORTMASTER) private GLREPORTMASTERService: Repository<GLREPORTMASTER>,
    @InjectRepository(GLREPORTLINK) private GLREPORTLINKService: Repository<GLREPORTLINK>,
    @InjectRepository(MANAGERVIEW) private MANAGERVIEWService: Repository<MANAGERVIEW>,
    @InjectRepository(SHARECAPITALAMTDETAILS) private SHARECAPITALAMTDETAILSService: Repository<SHARECAPITALAMTDETAILS>,
    @InjectRepository(DEPOCLOSETRANSAC) private DEPOCLOSETRANSACService: Repository<DEPOCLOSETRANSAC>,
    @InjectRepository(DEPOCLOSETRAN) private DEPOCLOSETRANService: Repository<DEPOCLOSETRAN>,
    @InjectRepository(DEADSTOCKDETAIL) private DEADSTOCKDETAILService: Repository<DEADSTOCKDETAIL>,
    @InjectRepository(DEADSTOCKHEADER) private DEADSTOCKHEADERService: Repository<DEADSTOCKHEADER>,
    @InjectRepository(SUBSIDARYMASTER) private SUBSIDARYMASTERService: Repository<SUBSIDARYMASTER>,
    @InjectRepository(PASSBOOKHISTORY) private PASSBOOKHISTORYService: Repository<PASSBOOKHISTORY>,
    @InjectRepository(MORATORIUMPERIOD) private MORATORIUMPERIODService: Repository<MORATORIUMPERIOD>,
    @InjectRepository(PASSBOOKPRINT) private PASSBOOKPRINTService: Repository<PASSBOOKPRINT>,
    @InjectRepository(INTINSTRUCTIONSLOG) private INTINSTRUCTIONSLOGService: Repository<INTINSTRUCTIONSLOG>,
    @InjectRepository(NPADATA) private NPADATAService: Repository<NPADATA>,
    @InjectRepository(STANDINSTRUCTIONLOG) private STANDINSTRUCTIONLOGService: Repository<STANDINSTRUCTIONLOG>,
    @InjectRepository(TDRECEIPTISSUE) private TDRECEIPTISSUEService: Repository<TDRECEIPTISSUE>,
    @InjectRepository(RECOTRAN) private RECOTRANService: Repository<RECOTRAN>,
    @InjectRepository(OIRTRAN) private OIRTRANService: Repository<OIRTRAN>,
    @InjectRepository(TDSTRAN) private TDSTRANService: Repository<TDSTRAN>,
    @InjectRepository(INTHISTORYTRAN) private INTHISTORYTRANService: Repository<INTHISTORYTRAN>,
    @InjectRepository(HISTORYGENERALMEETING) private HISTORYGENERALMEETINGService: Repository<HISTORYGENERALMEETING>,
    @InjectRepository(HISTORYDENO) private HISTORYDENOService: Repository<HISTORYDENO>,
    @InjectRepository(SCHEMDATA) private SCHEMDATAService: Repository<SCHEMDATA>,
    @InjectRepository(USERDENOMINATION) private USERDENOMINATIONService: Repository<USERDENOMINATION>,
    @InjectRepository(DENOMINATION) private DENOMINATIONService: Repository<DENOMINATION>,
    @InjectRepository(CRARTRAN) private CRARTRANService: Repository<CRARTRAN>,
    @InjectRepository(EXCESSCASH) private EXCESSCASHService: Repository<EXCESSCASH>,
    @InjectRepository(NPALOCK) private NPALOCKService: Repository<NPALOCK>,
    @InjectRepository(CDRATIO) private CDRATIOService: Repository<CDRATIO>,
    @InjectRepository(DAILYSHRTRAN) private DAILYSHRTRANService: Repository<DAILYSHRTRAN>,
    @InjectRepository(CHARGESNOTING) private CHARGESNOTINGService: Repository<CHARGESNOTING>,
    @InjectRepository(CHARGES) private CHARGESService: Repository<CHARGES>,
    @InjectRepository(CHARGESAMT) private CHARGESAMTService: Repository<CHARGESAMT>,
    @InjectRepository(CASHINTINSTRUCTIONS) private CASHINTINSTRUCTIONSService: Repository<CASHINTINSTRUCTIONS>,
    @InjectRepository(BANKBRANCHMASTER) private BANKBRANCHMASTERService: Repository<BANKBRANCHMASTER>,
    @InjectRepository(BANKDEPOTRAN) private BANKDEPOTRANService: Repository<BANKDEPOTRAN>,
    @InjectRepository(BATCHVOUCHERTRAN) private BATCHVOUCHERTRANService: Repository<BATCHVOUCHERTRAN>,
    @InjectRepository(BUDGETMASTER) private BUDGETMASTERService: Repository<BUDGETMASTER>,
    @InjectRepository(BANKCOMMISSION) private BANKCOMMISSIONService: Repository<BANKCOMMISSION>,
    @InjectRepository(PRIORITYSECTORMASTER) private PRIORITYSECTORMASTERService: Repository<PRIORITYSECTORMASTER>,
    @InjectRepository(RECOVERYCLEARKMASTER) private RECOVERYCLEARKMASTERService: Repository<RECOVERYCLEARKMASTER>,
    @InjectRepository(RISKCATEGORYMASTER) private RISKCATEGORYMASTERService: Repository<RISKCATEGORYMASTER>,
    @InjectRepository(SALARYDIVISIONMASTER) private SALARYDIVISIONMASTERService: Repository<SALARYDIVISIONMASTER>,
    @InjectRepository(SPECIALINSTRUCTION) private SPECIALINSTRUCTIONService: Repository<SPECIALINSTRUCTION>,
    @InjectRepository(STANDINSTRUCTION) private STANDINSTRUCTIONService: Repository<STANDINSTRUCTION>,
    @InjectRepository(TODTRAN) private TODTRANService: Repository<TODTRAN>,
    @InjectRepository(INTINSTRUCTION) private INTINSTRUCTIONService: Repository<INTINSTRUCTION>,
    @InjectRepository(DIVPAIDTRAN) private DIVPAIDTRANService: Repository<DIVPAIDTRAN>,
    @InjectRepository(SYSPARA) private SYSPARAService: Repository<SYSPARA>,
    @InjectRepository(INTERESTTRAN) private INTERESTTRANService: Repository<INTERESTTRAN>,
    @InjectRepository(RENEWALHISTORY) private RENEWALHISTORYService: Repository<RENEWALHISTORY>,
    @InjectRepository(VEHICLE) private VEHICLEService: Repository<VEHICLE>,
    @InjectRepository(STOCKSTATEMENT) private STOCKSTATEMENTService: Repository<STOCKSTATEMENT>,
    @InjectRepository(PLEDGESTOCK) private PLEDGESTOCKService: Repository<PLEDGESTOCK>,
    @InjectRepository(PLANTMACHINARY) private PLANTMACHINARYService: Repository<PLANTMACHINARY>,
    @InjectRepository(OWNDEPOSIT) private OWNDEPOSITService: Repository<OWNDEPOSIT>,
    @InjectRepository(OTHERSECURITY) private OTHERSECURITYService: Repository<OTHERSECURITY>,
    @InjectRepository(MARKETSHARE) private MARKETSHAREService: Repository<MARKETSHARE>,
    @InjectRepository(LANDBUILDING) private LANDBUILDINGService: Repository<LANDBUILDING>,
    @InjectRepository(GOVTSECULIC) private GOVTSECULICService: Repository<GOVTSECULIC>,
    @InjectRepository(FURNITURE) private FURNITUREService: Repository<FURNITURE>,
    @InjectRepository(GOLDSILVER) private GOLDSILVERService: Repository<GOLDSILVER>,
    @InjectRepository(FIREPOLICY) private FIREPOLICYService: Repository<FIREPOLICY>,
    @InjectRepository(BOOKDEBTS) private BOOKDEBTSService: Repository<BOOKDEBTS>,
    @InjectRepository(SUBSALARYMASTER) private SUBSALARYMASTERService: Repository<SUBSALARYMASTER>,
    @InjectRepository(TDRECEIPTMASTER) private TDRECEIPTMASTERService: Repository<TDRECEIPTMASTER>,
    @InjectRepository(TDSFORMSUBMIT) private TDSFORMSUBMITService: Repository<TDSFORMSUBMIT>,
    @InjectRepository(WEAKERMASTER) private WEAKERMASTERService: Repository<WEAKERMASTER>,
    @InjectRepository(SECINSURANCE) private SECINSURANCEService: Repository<SECINSURANCE>,
    @InjectRepository(NPAMASTER) private NPAMASTERService: Repository<NPAMASTER>,
    @InjectRepository(NPACLASSIFICATION) private NPACLASSIFICATIONService: Repository<NPACLASSIFICATION>,
    @InjectRepository(PREFIX) private PREFIXService: Repository<PREFIX>,
    @InjectRepository(OWNBRANCHMASTER) private OWNBRANCHMASTERService: Repository<OWNBRANCHMASTER>,
    @InjectRepository(BALACATA) private BALACATAService: Repository<BALACATA>,
    @InjectRepository(LOCKERMASTER) private LOCKERMASTERService: Repository<LOCKERMASTER>,
    @InjectRepository(LOCKERSIZE) private LOCKERSIZEService: Repository<LOCKERSIZE>,
    @InjectRepository(LOCKERRACKMASTER) private LOCKERRACKMASTERService: Repository<LOCKERRACKMASTER>,
    @InjectRepository(DOCUMENTMASTER) private DOCUMENTMASTERService: Repository<DOCUMENTMASTER>,
    @InjectRepository(ITEMCATEGORYMASTER) private ITEMCATEGORYMASTERService: Repository<ITEMCATEGORYMASTER>,
    @InjectRepository(COURTMASTER) private COURTMASTERService: Repository<COURTMASTER>,
    @InjectRepository(BRANCHMASTER) private BRANCHMASTERService: Repository<BRANCHMASTER>,
    @InjectRepository(CASTMASTER) private CASTMASTERService: Repository<CASTMASTER>,
    @InjectRepository(BANKDETAILS) private BANKDETAILSService: Repository<BANKDETAILS>,
    @InjectRepository(BANKMASTER) private BANKMASTERService: Repository<BANKMASTER>,
    @InjectRepository(ADVOCATEMASTER) private ADVOCATEMASTERService: Repository<ADVOCATEMASTER>,
    @InjectRepository(AUTHORITYMASTER) private AUTHORITYMASTERService: Repository<AUTHORITYMASTER>,
    @InjectRepository(COBORROWER) private COBORROWERService: Repository<COBORROWER>,
    @InjectRepository(SECURITYDETAILS) private SECURITYDETAILSService: Repository<SECURITYDETAILS>,
    @InjectRepository(TDSRATE) private TDSRATEService: Repository<TDSRATE>,
    @InjectRepository(SECURITYMASTER) private SECURITYMASTERService: Repository<SECURITYMASTER>,
    @InjectRepository(PREMATULESS) private PREMATULESSService: Repository<PREMATULESS>,
    @InjectRepository(PREMATULESSRATE) private PREMATULESSRATEService: Repository<PREMATULESSRATE>,
    @InjectRepository(INTRATE) private INTRATEService: Repository<INTRATE>,
    @InjectRepository(INTRATEPATSCHEMES) private INTRATEPATSCHEMESService: Repository<INTRATEPATSCHEMES>,
    @InjectRepository(LNCCLOAN) private LNCCLOANService: Repository<LNCCLOAN>,
    @InjectRepository(INTRATELOAN) private INTRATELOANService: Repository<INTRATELOAN>,
    @InjectRepository(INTRATETDMULTI) private INTRATETDMULTIService: Repository<INTRATETDMULTI>,
    @InjectRepository(INTMULTI) private INTMULTIService: Repository<INTMULTI>,
    @InjectRepository(CITYMASTER) private citymasterService: Repository<CITYMASTER>,
    @InjectRepository(NOMINEELINK) private nomineeService: Repository<NOMINEELINK>,
    @InjectRepository(TERMINTRATE) private intRateTDGridRepository: Repository<TERMINTRATE>,
    @InjectRepository(INTRATETD) private intRateTDRepository: Repository<INTRATETD>,
    @InjectRepository(JointAcLink) private jointAccountRepository: Repository<JointAcLink>,
    @InjectRepository(ATTERONEYLINK) private atteroneyService: Repository<ATTERONEYLINK>,
    @InjectRepository(DEPRCATEGORY) private DEPRCATEGORYService: Repository<DEPRCATEGORY>,
    @InjectRepository(DEPRRATE) private DEPRRATEService: Repository<DEPRRATE>,
    @InjectRepository(DIRECTORMASTER) private DIRECTORMASTERService: Repository<DIRECTORMASTER>,
    @InjectRepository(HEALTHMASTER) private HEALTHMASTERService: Repository<HEALTHMASTER>,
    @InjectRepository(HOLIDAYSMASTER) private HOLIDAYSMASTERService: Repository<HOLIDAYSMASTER>,
    @InjectRepository(INDUSTRYMASTER) private INDUSTRYMASTERService: Repository<INDUSTRYMASTER>,
    @InjectRepository(INSUARANCEMASTER) private INSUARANCEMASTERService: Repository<INSUARANCEMASTER>,
    @InjectRepository(INTCATEGORYMASTER) private INTCATEGORYMASTERService: Repository<INTCATEGORYMASTER>,
    @InjectRepository(INTRATESBPG) private INTRATESBPGService: Repository<INTRATESBPG>,
    @InjectRepository(ITEMMASTER) private ITEMMASTERService: Repository<ITEMMASTER>,
    @InjectRepository(LOANSTAGEMASTER) private LOANSTAGEMASTERService: Repository<LOANSTAGEMASTER>,
    @InjectRepository(NARRATIONMASTER) private NARRATIONMASTERService: Repository<NARRATIONMASTER>,
    @InjectRepository(OCCUPATIONMASTER) private OCCUPATIONMASTERService: Repository<OCCUPATIONMASTER>,
    @InjectRepository(OPERATIONMASTER) private OPERATIONMASTERService: Repository<OPERATIONMASTER>,
    @InjectRepository(PGCOMMISSIONMASTER) private PGCOMMISSIONMASTERService: Repository<PGCOMMISSIONMASTER>,
    @InjectRepository(PRIORITYMASTER) private PRIORITYMASTERService: Repository<PRIORITYMASTER>,
    @InjectRepository(PURPOSEMASTER) private PURPOSEMASTERService: Repository<PURPOSEMASTER>,
    @InjectRepository(REPORTTYPEMASTER) private REPORTTYPEMASTERService: Repository<REPORTTYPEMASTER>,
    @InjectRepository(SCHEMAST) private SCHEMASTService: Repository<SCHEMAST>,
    @InjectRepository(IDMASTER) private IDMASTERService: Repository<IDMASTER>,
    @InjectRepository(CUSTOMERADDRESS) private CUSTOMERADDRESSService: Repository<CUSTOMERADDRESS>,
    @InjectRepository(SHMASTER) private SHMASTERService: Repository<SHMASTER>,
    @InjectRepository(DPMASTER) private DPMASTERService: Repository<DPMASTER>,
    @InjectRepository(LNMASTER) private LNMASTERService: Repository<LNMASTER>,
    @InjectRepository(LNACINTRATE) private LNACINTRATEService: Repository<LNACINTRATE>,
    @InjectRepository(GUARANTERDETAILS) private GUARANTERDETAILSService: Repository<GUARANTERDETAILS>,
    @InjectRepository(PGMASTER) private PGMASTERService: Repository<PGMASTER>,
    @InjectRepository(ACCOTRAN) private ACCOTRANService: Repository<ACCOTRAN>,
    @InjectRepository(DEPOTRAN) private DEPOTRANService: Repository<DEPOTRAN>,
    @InjectRepository(LOANTRAN) private LOANTRANService: Repository<LOANTRAN>,
    @InjectRepository(SHARETRAN) private SHARETRANService: Repository<SHARETRAN>,
    @InjectRepository(PIGMYTRAN) private PIGMYTRANService: Repository<PIGMYTRAN>,
    @InjectRepository(HISTORYTRAN) private HISTORYTRANService: Repository<HISTORYTRAN>,
    @InjectRepository(DAILYTRAN) private DAILYTRANService: Repository<DAILYTRAN>,
    @InjectRepository(ACMASTER) private ACMASTERService: Repository<ACMASTER>,
    @InjectRepository(TRANINPUTHEAD) private TRANINPUTHEADService: Repository<TRANINPUTHEAD>,
    @InjectRepository(COMMISSIONSLAB) private COMMISSIONSLABService: Repository<COMMISSIONSLAB>,
    @InjectRepository(TEMPJOINTACLINK) private TEMPJOINTACLINKService: Repository<TEMPJOINTACLINK>,
    @InjectRepository(SIZEWISEBALANCE) private SIZEWISEBALANCEService: Repository<SIZEWISEBALANCE>,
    @InjectRepository(TERMMASTER) private TERMMASTERService: Repository<TERMMASTER>,
    @InjectRepository(HISTORYDIVIDEND) private HISTORYDIVIDENDService: Repository<HISTORYDIVIDEND>,
    @InjectRepository(AGENTCHANGEHISTORY) private AGENTCHANGEHISTORYService: Repository<AGENTCHANGEHISTORY>,
    @InjectRepository(SMSMAST) private SmsService: Repository<SMSMAST>,
    @InjectRepository(PIGMYTRAN) private pigmytran3Repository: Repository<PIGMYTRAN>,
    private connection: Connection
  ) { }
  user = "BANKUSER"
  password = "1234"
  // // user = "APPACHOPDE"
  // // password = "APPACHOPDE"
  SID = "FREEPDB1"


  //   private mssqlConfig = {
  //   user: 'sa',
  //   password: 'subhash',
  //   server: 'localhost',
  //   port: 1433,
  //   database: 'FinEx',
  //   options: { encrypt: false, trustServerCertificate: true }
  // };
  // SID1 = "AJIT"

  // user = "VADGAON"
  // password = "VADGAON"
  // SID = "BANKDB"
  limit = 1000;
  offset = 0;
  count = 0;
  flag = 0
  BRANCH_CODE = 106
  // connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.137.144)(PORT = 1521))(CONNECT_DATA =(SERVICE_NAME=${this.SID} )))`
  // connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = BANK30)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  // connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = bank7)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  // connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  //connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = DESKTOP-IGOREF5)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  Postidmaster: any
  PostCategoryMaster: any
  OracleAcMaster: any;
  sysparaData: any;
  historyTranCount = 0;
  OracleSchemast: any;
  PostSyspara: any
  PostAcMaster: any;
  PostSchemast: any;
  PostGuaranter: any;

  PostBranch: any
  PostBranchOne: any
  PostInterestCategoryData: any
  PostdirectorMaster: any
  PostCitymaster: any
  async jsonConverter(jsonData) {
    let metadata = jsonData.metaData;
    let rowData = jsonData.rows;

    let finalObject = new Array();

    rowData.forEach((ele, index) => {

      let array = new Array();
      let obj = {}

      ele.forEach((element, index) => {
        let key = metadata[index].name;
        obj[metadata[index].name] = element;
      })
      finalObject.push(obj);
    })
    return finalObject;
  }

  //      async runMigration() {
  //   // Define MSSQL connection config
  //   const config: sql.config = {
  //     user: 'sa',
  //     password: 'subhash',
  //     server: 'localhost',
  //     port: 1433,
  //     database: 'FinEx', // Instead of SID
  //     options: {
  //       encrypt: false,
  //       trustServerCertificate: true,
  //     },
  //   }

  //     try {
  //     // ✅ Connect to MSSQL
  //     const connection = await sql.connect(config);

  //         await connection.close()

  //     // ✅ Query data from MSSQL
  //     const acmasterResult = await connection.request().query('SELECT * FROM CUSTOMERS');
  //     const schemastResult = await connection.request().query('SELECT * FROM ACCOUNT_TYPE');
  //     const sysparaResult = await connection.request().query('SELECT * FROM BANK_DETAILS');

  //     // ✅ Use data directly (MSSQL returns plain JS objects)
  //     this.OracleAcMaster = acmasterResult.recordset;
  //     this.OracleSchemast = schemastResult.recordset;
  //     this.sysparaData = sysparaResult.recordset;


  //     console.log('✅ Migration from MSSQL to PostgreSQL successful!');
  //   } catch (err) {
  //     console.error('❌ Error connecting to MSSQL or migrating:', err);
  //   }
  // }

  async TableData() {
    this.PostBranch = await this.OWNBRANCHMASTERService.find()
    this.PostBranchOne = await this.OWNBRANCHMASTERService.find({ id: this.BRANCH_CODE })
    this.PostSyspara = await this.SYSPARAService.find()
    this.PostInterestCategoryData = await this.INTCATEGORYMASTERService.find()
    this.Postidmaster = await this.IDMASTERService.find()
    this.PostCategoryMaster = await this.CATEGORYMASTERService.find()
    this.PostdirectorMaster = await this.DIRECTORMASTERService.find()
    this.PostCitymaster = await this.citymasterService.find()
    this.PostSchemast = await this.SCHEMASTService.find()
    this.PostGuaranter = await this.GUARANTERDETAILSService.find()

    this.PostAcMaster = await this.ACMASTERService.find()



    // let connection = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });

  }
  //start script
  // async script(data) {
  async script() {
    // this.user = data.user
    // this.password = data.password
    // this.SID = data.SID
    // this.BRANCH_CODE = data.BRANCH_CODE
    this.user = this.user
    this.password = this.password
    this.SID = this.SID
    this.BRANCH_CODE = this.BRANCH_CODE
    //  await this.SYSPARA()
    await this.TableData()
    // await this.SHARECAPITALAMTDETAILS()
    // await this.SCHEMAST()
    // await this.TableData()
    // await this.SCHEMDATA()
    // await this.ACMASTER()
    // await this.TableData()
    // await this.TRANINPUTHEAD()
    // //information 
    // await this.SIZEWISEBALANCE()

    // await this.TERMMASTER()
    // await this.ADVOCATEMASTER()
    // await this.BALACATA()
    // await this.PREFIX()
    //  await this.DOCUMENTMASTER()
    // await this.PRIORITYSECTORMASTER()
    // await this.RECOVERYCLEARKMASTER()
    // await this.RISKCATEGORYMASTER()
    // await this.SALARYDIVISIONMASTER()
    // await this.SUBSALARYMASTER()
    // await this.WEAKERMASTER()
    // await this.TDRECEIPTMASTER()
    // await this.AUTHORITYMASTER()
    // await this.LOCKERRACKMASTER()
    // await this.LOCKERSIZE()
    // await this.LOCKERMASTER()
    // await this.ITEMCATEGORYMASTER()
    // await this.COURTMASTER()
    // await this.CATEGORYMASTER()  
    // await this.DEPRCATEGORY()
    // await this.DIRECTORMASTER()
    // await this.HEALTHMASTER()
    /////////////
    // await this.BRANCHMASTER()

    // await this.CASTMASTER()
    // await this.BANKDETAILS()
    // await this.CITYMASTER()
    // await this.BANKMASTER()
    // await this.INDUSTRYMASTER()
    // await this.INSUARANCEMASTER()
    // await this.INTCATEGORYMASTER()
    // await this.LOANSTAGEMASTER()
    // await this.NARRATIONMASTER()
    // await this.OCCUPATIONMASTER()
    // await this.OPERATIONMASTER()
    // await this.PRIORITYMASTER()
    // await this.PURPOSEMASTER()
    // await this.REPORTTYPEMASTER()
    // await this.TableData()
    // //utility
    // await this.HOLIDAYSMASTER()
    //  await this.PGCOMMISSIONMASTER()
    // defination
    // await this.intrateTD()
    // await this.INTRATETDMULTI()
    // await this.DEPRRATE()
    // await this.INTRATELOAN()
    // await this.INTRATEPATSCHEMES()
    // await this.PREMATULESSRATE()
    // await this.INTRATESBPG()
    //  await this.MANAGERVIEW()
    // await this.CHARGES()
    // await this.SECURITYMASTER()
    // await this.TDSRATE()
    // await this.NPAMASTER()
    // await this.TDSFORMSUBMIT()
    // await this.COMMISSIONSLAB()

    await this.IDMASTER()
    // await this.TableData()
    // await this.ITEMMASTER()

    //  await this.SHmasterScript()

    //  await this.lnmasterScript()

    // await this.DPMASTERScript()

    //  await this.PGmasterScript()


    //security tables
    // await this.STOCKSTATEMENT()
    // await this.VEHICLE()
    // await this.PLANTMACHINARY()

    // await this.OWNDEPOSIT()

    // await this.PLEDGESTOCK()
    // await this.BOOKDEBTS()
    //  await this.OTHERSECURITY()
    // await this.MARKETSHARE()

    // await this.LANDBUILDING()
    //  await this.GOLDSILVER()

    // await this.FURNITURE()
    // await this.FIREPOLICY()
    // await this.SECINSURANCE()
    // await this.GOVTSECULIC()

    // // // INSTRUCTION
    // await this.SPECIALINSTRUCTION()
    // await this.TODTRAN()
    // await this.STANDINSTRUCTION()
    // await this.INTINSTRUCTION()

    // //transaction
    // await this.DAILYTRAN()
    // await this.ACCOTRAN()
    // await this.HISTORYTRAN()
    // await this.PIGMYTRAN()
    // await this.SHARETRAN()
    //  await this.LOANTRAN()
    // await this.DEPOTRAN()
    // await this.DAILYSHRTRAN()
    // await this.RENEWALHISTORY()

    // await this.DEADSTOCKHEADER()
    // await this.DEPOCLOSETRAN()
    // await this.INTERESTTRAN()
    // await this.PIGMYCHART()
    // await this.HISTORYDIVIDEND()
    // await this.DIVPAIDTRAN()
    // await this.DIVIDEND()
    // await this.AGENTCHANGEHISTORY()
    // await this.BANKBRANCHMASTER()
    // await this.BANKCOMMISSION()
    // await this.BANKDEPOTRAN()
    // await this.BATCHVOUCHERTRAN()
    // await this.BUDGETMASTER()
    // await this.CASHINTINSTRUCTIONS()
    // await this.CDRATIO()
    // await this.CHARGESNOTING()
    // await this.NPALOCK()
    // await this.EXCESSCASH()
    // await this.CRARTRAN()
    // await this.DENOMINATION()
    // await this.USERDENOMINATION()
    // await this.HISTORYDENO()
    // await this.HISTORYGENERALMEETING()
    // await this.INTHISTORYTRAN()
    // await this.TDSTRAN()
    // await this.OIRTRAN()
    // await this.MORATORIUMPERIOD()
    // await this.RECOTRAN()
    // 
    // await this.TDRECEIPTISSUE()
    // await this.STANDINSTRUCTIONLOG()
    // await this.INTINSTRUCTIONSLOG()
    // await this.NPADATA()
    // await this.PASSBOOKPRINT()
    // await this.PASSBOOKHISTORY()
    // await this.SUBSIDARYMASTER()
    // await this.GLREPORTLINK()
    //  await this.GLREPORTMASTER()
    // await this.LOCKERTRAN()
    // await this.LOCKERRENTTRAN()
    // await this.custdocument()
    // await this.SMSMAST()

    // await this.GUARANTERDETAILS()

    // await this.PIGMYTRANS()


    console.log('data conversion successfully completed')
    return
  }




  async GUARANTERDETAILS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from GUARANTERDETAILS`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from GUARANTERDETAILS`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.GUARANTERDETAILSSUB(data);
  }
  async GUARANTERDETAILSSUB(data) {
    for (let item of data) {

      // let schemastData = this.PostSchemast.filter(ele => ele['ACTYPE'] == item.ACTYPE);

      let guaranterdata = this.PostGuaranter.filter(ele1 => ele1['AC_NAME'] == item.NAME);

      let result = await this.GUARANTERDETAILSService.query(`UPDATE GUARANTERDETAILS SET "ORA_CUSTID" = '${item.AC_CUSTID}' WHERE "AC_NAME" = '${item.NAME}'`)

    }

  }

  //syspara
  async SYSPARA() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM SYSPARA')
      let data = await this.jsonConverter(result);
      let ele = data[0]
      let sys = new SYSPARA()
      sys['SYSPARA_CODE'] = ele.SYSPARA_CODE
      sys['BANK_CODE'] = ele.BANK_CODE
      sys['BRANCH_CODE'] = this.BRANCH_CODE + ''
      sys['BANK_NAME'] = ele.BANK_NAME
      sys['ADDRESS'] = ele.ADDRESS
      sys['MAX_CERTI_NO'] = ele.MAX_CERTI_NO
      sys['MAX_SHARES_NO'] = ele.MAX_SHARES_NO
      sys['CHAIRMAN'] = ele.CHAIRMAN
      sys['ACCOUNTANT'] = ele.ACCOUNTANT
      sys['GENERAL_MANAGER'] = ele.GENERAL_MANAGER
      sys['COMPANY_START_DATE'] = ele.COMPANY_START_DATE == '' || ele.COMPANY_START_DATE == null ? null : moment(ele.COMPANY_START_DATE).format('DD/MM/YYYY');
      sys['NO_OF_EMPLOYEES'] = ele.NO_OF_EMPLOYEES
      sys['OFFICER_NAME'] = ele.OFFICER_NAME
      sys['OFFICER_DESIGNATION'] = ele.OFFICER_DESIGNATION
      sys['RBI_LICENCE_NO'] = ele.RBI_LICENCE_NO
      sys['MANAGER_NAME'] = ele.MANAGER_NAME
      sys['DD_COMMISSION_ACNO'] = ele.DD_COMMISSION_ACNO
      sys['DIVIDEND_ACNO'] = ele.DIVIDEND_ACNO
      sys['BONUS_GLACNO'] = ele.BONUS_GLACNO
      sys['BILL_RECEIVABLE_ACNO'] = ele.BILL_RECEIVABLE_ACNO
      sys['BILL_FOR_COLLECTION_ACNO'] = ele.BILL_FOR_COLLECTION_ACNO
      sys['BCBR_DR_GLACNO'] = ele.BCBR_DR_GLACNO
      sys['BCBR_DR_SUB_GLACNO'] = ele.BCBR_DR_SUB_GLACNO
      sys['CLG_SUSPENCE_ACNO'] = ele.CLG_SUSPENCE_ACNO
      sys['INWARD_BILL_COLLECTION_ACNO'] = ele.INWARD_BILL_COLLECTION_ACNO
      sys['INWARD_BILL_RECEIVABLE_ACNO'] = ele.INWARD_BILL_RECEIVABLE_ACNO
      sys['RECOVERY_METHOD'] = ele.RECOVERY_METHOD == 0 ? '0' : '1'
      sys['IS_PROCESS_FOR_MONTH'] = ele.IS_PROCESS_FOR_MONTH == 0 ? '0' : '1'
      sys['IS_PROCESS_UPTO_TRANDATE'] = ele.IS_PROCESS_UPTO_TRANDATE == 0 ? '0' : '1'
      sys['IS_ALLOW_CLG_TALLY_VOUCHER'] = ele.IS_ALLOW_CLG_TALLY_VOUCHER == 0 ? '0' : '1'
      sys['IS_CLG_DATE_ADD'] = ele.IS_CLG_DATE_ADD == 0 ? '0' : '1'
      sys['IS_AUTO_CLEARING_EFFECT'] = ele.IS_AUTO_CLEARING_EFFECT == 0 ? '0' : '1'
      sys['ALLOW_AUTO_TD_RENEW_FACILITY'] = ele.ALLOW_AUTO_TD_RENEW_FACILITY == 0 ? 0 : 1
      sys['AUTO_NO'] = ele.AUTO_NO == 0 ? '0' : '1'
      sys['MASTER_APPROVAL_REQUIRED'] = ele.MASTER_APPROVAL_REQUIRED == 0 ? '0' : '1'
      sys['IS_POSTING_DD_PREPARATION'] = ele.IS_POSTING_DD_PREPARATION == 0 ? '0' : '1'
      sys['IS_AUTO_INSTRUCTION_PASS'] = ele.IS_AUTO_INSTRUCTION_PASS == 0 ? '0' : '1'
      sys['MAINTAIN_CHEQUE_SERIES'] = ele.MAINTAIN_CHEQUE_SERIES == 0 ? '0' : '1'
      sys['PIGMY_IS_AUTO_VOUCHER'] = ele.PIGMY_IS_AUTO_VOUCHER == 0 ? '0' : '1'
      sys['IS_MICR_CHARGES_APPL'] = ele.IS_MICR_CHARGES_APPL == 0 ? '0' : '1'
      sys['IS_GURR_FROM_MEMBERS'] = ele.IS_GURR_FROM_MEMBERS == 0 ? '0' : '1'
      sys['IS_AUTOPOSTDAILY_OVERDRAFT_INT'] = ele.IS_AUTOPOSTDAILY_OVERDRAFT_INT == 0 ? '0' : '1'
      sys['SCHMWISE_REC_IMPEXP'] = ele.SCHMWISE_REC_IMPEXP == 0 ? '0' : '1'
      sys['DENOMINATION_REQUIRE'] = ele.DENOMINATION_REQUIRE == 0 ? '0' : '1'
      sys['TELLER_MODE'] = ele.TELLER_MODE == 0 ? '0' : '1'
      sys['IS_ALLOW_SCHEME_GL_ENTRY'] = ele.IS_ALLOW_SCHEME_GL_ENTRY == 0 ? '0' : '1'
      sys['TOKEN_NO_APPLICABLE'] = ele.TOKEN_NO_APPLICABLE == 0 ? '0' : '1'
      sys['MASTER_ATTACH_JOINT_NAMES'] = ele.MASTER_ATTACH_JOINT_NAMES == 0 ? '0' : '1'
      sys['MASTER_ATTACH_GUARDIAN_NAMES'] = ele.MASTER_ATTACH_GUARDIAN_NAMES == 0 ? '0' : '1'
      sys['PIGMY_AC_RENEW_APPLY'] = ele.PIGMY_AC_RENEW_APPLY == 0 ? '0' : '1'
      sys['IS_RECEIPTNO_IN_PIGMYCHART'] = ele.IS_RECEIPTNO_IN_PIGMYCHART == 0 ? '0' : '1'
      sys['IS_REBIT_INTRATE_CAL'] = ele.IS_REBIT_INTRATE_CAL == 0 ? '0' : '1'
      sys['IS_ALLOW_LOANINT_CHANGE'] = ele.IS_ALLOW_LOANINT_CHANGE == 0 ? '0' : '1'
      sys['IS_CONSIDER_CCRENEWAL_AS_OPEN'] = ele.IS_CONSIDER_CCRENEWAL_AS_OPEN == 0 ? '0' : '1'
      sys['IS_ALLOW_RECOVERY_DIFF'] = ele.IS_ALLOW_RECOVERY_DIFF == 0 ? '0' : '1'
      sys['IS_TDS_CALCULATE'] = ele.IS_TDS_CALCULATE == 0 ? '0' : '1'
      sys['IS_AUTO_VOUCHER_NPA_OIR'] = ele.IS_AUTO_VOUCHER_NPA_OIR == 0 ? '0' : '1'
      sys['IS_HO_SUB_GLACNO_REQUIRED'] = ele.IS_HO_SUB_GLACNO_REQUIRED == 0 ? '0' : '1'
      sys['IS_REQUIRE_CLEARING_OPTION'] = ele.IS_REQUIRE_CLEARING_OPTION == 0 ? '0' : '1'
      sys['IS_ALLOW_USER_MULTI_LOGIN'] = ele.IS_ALLOW_USER_MULTI_LOGIN == 0 ? '0' : '1'
      sys['IS_BANKERS_COMM_TRAN_REQD'] = ele.IS_BANKERS_COMM_TRAN_REQD == 0 ? '0' : '1'
      sys['IS_IBCIBR_VOUCH_REQD'] = ele.IS_IBCIBR_VOUCH_REQD == 0 ? '0' : '1'
      sys['DEPRECIATION_WITH_HALFFULLRATE'] = ele.DEPRECIATION_WITH_HALFFULLRATE == 0 ? '0' : '1'
      sys['IS_AUTO_UPDATE_SHARES_NO'] = ele.IS_AUTO_UPDATE_SHARES_NO == 0 ? '0' : '1'
      sys['ON_LINE'] = ele.ON_LINE == 0 ? '0' : '1'
      sys['IS_RECEIPT_PRINT_DESIGNMETHOD'] = ele.IS_RECEIPT_PRINT_DESIGNMETHOD == 0 ? '0' : '1'
      sys['IS_ALLOW_RECOVERY'] = ele.IS_ALLOW_RECOVERY
      sys['RECOVERY_DR_ACNO'] = ele.RECOVERY_DR_ACNO
      sys['HO_GLACNO'] = ele.HO_GLACNO
      sys['BG_DR_ACNO'] = ele.BG_DR_ACNO
      sys['BG_CR_ACNO'] = ele.BG_CR_ACNO
      sys['PAY_ORDER_ACNO'] = ele.PAY_ORDER_ACNO
      sys['INWARD_BILLS_PURCHASE_ACNO'] = ele.INWARD_BILLS_PURCHASE_ACNO
      sys['YEAR_CLOSING_TRANSFER_ACNO'] = ele.YEAR_CLOSING_TRANSFER_ACNO
      sys['PL_TRANSFER_ACNO'] = ele.PL_TRANSFER_ACNO
      sys['AUTHORIZED_SHARE_CAPITAL_CODE'] = ele.AUTHORIZED_SHARE_CAPITAL_CODE
      sys['TDS_PAYABLE_GLACNO'] = ele.TDS_PAYABLE_GLACNO
      sys['SURCHARGE_GLACNO'] = ele.SURCHARGE_GLACNO
      sys['CHEQUE_CHARGES_ACNO'] = ele.CHEQUE_CHARGES_ACNO
      sys['CHEQUE_BOUNCE_ACNO'] = ele.CHEQUE_BOUNCE_ACNO
      sys['CHEQUE_BOUNCE_CHARGES'] = ele.CHEQUE_BOUNCE_CHARGES
      sys['MICR_CHARGES_ACNO'] = ele.MICR_CHARGES_ACNO
      sys['GRACE_PERIOD'] = ele.GRACE_PERIOD
      sys['MICR_CHARGES_AMOUNT'] = ele.MICR_CHARGES_AMOUNT
      sys['MICR_CHARGES_INWORD_CLG'] = ele.MICR_CHARGES_INWORD_CLG
      sys['WEEKLY_HOLIDAY'] = ele.WEEKLY_HOLIDAY
      sys['HALF_DAY'] = ele.HALF_DAY
      sys['INT_CALC_METHOD'] = ele.INT_CALC_METHOD
      sys['MORATORIUM_PERIOD'] = ele.MORATORIUM_PERIOD
      sys['SANCTIONED_CASH_LIMIT'] = ele.SANCTIONED_CASH_LIMIT
      sys['IS_PGCOMMISSION_PERCALCULATION'] = ele.IS_PGCOMMISSION_PERCALCULATION
      sys['DIV_CALCU_MONTH'] = ele.DIV_CALCU_MONTH
      sys['HIGH_VALUE_CLEARING_AMT'] = ele.HIGH_VALUE_CLEARING_AMT
      sys['NPA_METHOD'] = ele.NPA_METHOD
      sys['NPA_SUBMETHOD'] = ele.NPA_SUBMETHOD
      sys['DIV_PAYABLE_FOR_LAST_YEARS'] = ele.DIV_PAYABLE_FOR_LAST_YEARS
      sys['MEMBER_FOR_GUR'] = ele.MEMBER_FOR_GUR
      sys['AUTO_LOCK_TIME'] = ele.AUTO_LOCK_TIME
      sys['PASSWORD_EXPIRE_DAYS'] = ele.PASSWORD_EXPIRE_DAYS
      sys['WITHDRW_CLOSING_FOR_GURMEMBERS'] = ele.WITHDRW_CLOSING_FOR_GURMEMBERS
      sys['PREVIOUS_DATE'] = ele.PREVIOUS_DATE == '' || ele.PREVIOUS_DATE == null ? null : moment(ele.PREVIOUS_DATE).format('DD/MM/YYYY');
      sys['CURRENT_DATE'] = ele.CURRENT_DATE == '' || ele.CURRENT_DATE == null ? null : moment(ele.CURRENT_DATE).format('DD/MM/YYYY');
      sys['DAY_BEGIN_EXECUTED'] = ele.DAY_BEGIN_EXECUTED == -1 ? '1' : '0'
      sys['DAY_END_EXECUTED'] = ele.DAY_END_EXECUTED == -1 ? '1' : '0'
      sys['PIGMY_PREVIOUS_DATE'] = ele.PIGMY_PREVIOUS_DATE == '' || ele.PIGMY_PREVIOUS_DATE == null ? null : moment(ele.PIGMY_PREVIOUS_DATE).format('DD/MM/YYYY');
      sys['PIGMY_CURRENT_DATE'] = ele.PIGMY_CURRENT_DATE == '' || ele.PIGMY_CURRENT_DATE == null ? null : moment(ele.PIGMY_CURRENT_DATE).format('DD/MM/YYYY');
      sys['PIGMY_DAY_BEGIN_EXECUTED'] = ele.PIGMY_DAY_BEGIN_EXECUTED == -1 ? '1' : '0'
      sys['PIGMY_DAY_END_EXECUTED'] = ele.PIGMY_DAY_END_EXECUTED == -1 ? '1' : '0'
      sys['BACK_DAY_OPTION'] = ele.BACK_DAY_OPTION
      sys['CASH_IN_HAND_ACNO'] = ele.CASH_IN_HAND_ACNO
      sys['CLG_HOUSE_METHOD'] = ele.CLG_HOUSE_METHOD
      sys['LINES_PER_PASSBOOKPAGE'] = ele.LINES_PER_PASSBOOKPAGE
      sys['PRODUCT_TYPE'] = ele.PRODUCT_TYPE
      sys['NPA_BASE_DAYS'] = ele.NPA_BASE_DAYS
      sys['AUTO_INT_DEBIT_VOCHER'] = ele.AUTO_INT_DEBIT_VOCHER
      sys['PRODUCTWISE_INT_ROUND'] = ele.PRODUCTWISE_INT_ROUND
      sys['IS_ALLOW_OLD_LOAN_EDIT'] = ele.IS_ALLOW_OLD_LOAN_EDIT
      sys['IS_MONTHLY_INTPOST_APPLY_TO_LN'] = ele.IS_MONTHLY_INTPOST_APPLY_TO_LN
      let insertSyspara = await queryRunner.manager.insert(SYSPARA, sys)
      await queryRunner.commitTransaction();
      console.log('SYSPARA')
      await connection2.close()
    }
    catch (error) {
      console.log(error)
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Issue in syspara' + `${error.stack}`,
      }, HttpStatus.FORBIDDEN);
      await queryRunner.rollbackTransaction();
      throw error;
    }
    finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //SCHEMAST
  async SCHEMAST() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      try {
        let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
        let result = await connection2.execute('select * from SCHEMAST ORDER BY S_APPL');
        let data = await this.jsonConverter(result);
        for (let ele of data) {
          let newObj = new SCHEMAST();
          newObj['S_ACNOTYPE'] = ele.S_ACNOTYPE
          newObj['S_APPL'] = ele.S_APPL
          // newObj['S_ACTYPE'] = ele.S_APPL
          newObj['AC_TYPE'] = ele.S_APPL
          newObj['S_NAME'] = ele.S_NAME.replace("\x00", "")
          // newObj['S_SHNAME'] = ele.S_SHNAME
          newObj['S_SHNAME'] = ele.S_SHNAME.replace("\x00", "")
          newObj['S_GLACNO'] = ele.S_GLACNO
          newObj['S_INT_ACNO'] = ele.S_INT_ACNO
          newObj['S_RECBL_PYBL_INT_ACNO'] = ele.S_RECBL_PYBL_INT_ACNO
          newObj['S_PENAL_ACNO'] = ele.S_PENAL_ACNO
          newObj['S_RECBL_PENAL_ACNO'] = ele.S_RECBL_PENAL_ACNO
          newObj['S_RECBL_ODUE_INT_ACNO'] = ele.S_RECBL_ODUE_INT_ACNO
          newObj['S_OUTSTANDING_INT_ACNO'] = ele.S_OUTSTANDING_INT_ACNO
          newObj['IS_DEPO_LOAN'] = ele.IS_DEPO_LOAN == 0 ? '0' : '1'
          newObj['S_INT_APPLICABLE'] = ele.S_INT_APPLICABLE == 0 ? '0' : '1'
          newObj['POST_TO_INDIVIDUAL_AC'] = ele.POST_TO_INDIVIDUAL_AC == 0 ? '0' : '1'
          newObj['S_RECEIVABLE_INT_ALLOW'] = ele.S_RECEIVABLE_INT_ALLOW == 0 ? '0' : '1'
          newObj['IS_INT_ON_RECINT'] = ele.IS_INT_ON_RECINT == 0 ? '0' : '1'
          newObj['IS_INT_ON_OTHERAMT'] = ele.IS_INT_ON_OTHERAMT == 0 ? '0' : '1'
          newObj['IS_INTUPTODATE'] = ele.IS_INTUPTODATE == 0 ? '0' : '1'
          newObj['IS_NO_POST_INT_AFT_OD'] = ele.IS_NO_POST_INT_AFT_OD == 0 ? '0' : '1'
          newObj['INTEREST_METHOD'] = ele.INTEREST_METHOD
          newObj['MIN_INT_LIMIT'] = ele.MIN_INT_LIMIT
          newObj['S_PENAL_INT_APPLICABLE'] = ele.S_PENAL_INT_APPLICABLE == 0 ? '0' : '1'
          newObj['IS_POST_PENAL_TO_AC'] = ele.IS_POST_PENAL_TO_AC == 0 ? '0' : '1'
          newObj['POST_PENALINT_IN_INTEREST'] = ele.POST_PENALINT_IN_INTEREST == 0 ? '0' : '1'
          newObj['IS_REC_PENAL_APPL'] = ele.IS_REC_PENAL_APPL == 0 ? '0' : '1'
          newObj['IS_CAL_PENAL_AFTER_EXPIRY'] = ele.IS_CAL_PENAL_AFTER_EXPIRY == 0 ? '0' : '1'
          newObj['ADD_AMT_IN_PRINCIPLE'] = ele.ADD_AMT_IN_PRINCIPLE == 0 ? 0 : 1
          newObj['ADD_AMT_IN_RECPAY'] = ele.ADD_AMT_IN_RECPAY == 0 ? 0 : 1
          newObj['S_PENAL_INT_RATE'] = ele.S_PENAL_INT_RATE
          newObj['PENAL_METHOD'] = ele.PENAL_METHOD
          newObj['S_DUE_LIST_ALLOW'] = ele.S_DUE_LIST_ALLOW == 0 ? '0' : '1'
          newObj['GRACE_PERIOD_APPLICABLE'] = ele.GRACE_PERIOD_APPLICABLE == 0 ? '0' : '1'
          newObj['MORATORIUM_APPLICABLE'] = ele.MORATORIUM_APPLICABLE == 0 ? '0' : '1'
          newObj['STAND_INSTRUCTION_ALLOW'] = ele.STAND_INSTRUCTION_ALLOW == 0 ? '0' : '1'
          newObj['BALANCE_ADD_APPLICABLE'] = ele.BALANCE_ADD_APPLICABLE == 0 ? '0' : '1'
          newObj['IS_UNSECURED_LOAN'] = ele.IS_UNSECURED_LOAN == 0 ? '0' : '1'
          newObj['IS_OVERDUE_CHARGES_APPLY'] = ele.IS_OVERDUE_CHARGES_APPLY == 0 ? '0' : '1'
          newObj['MAX_LOAN_LMT'] = ele.MAX_LOAN_LMT
          newObj['ROUNDOFF_FACTOR'] = ele.ROUNDOFF_FACTOR
          newObj['DEFAULT_LOAN_PERIOD'] = ele.DEFAULT_LOAN_PERIOD
          newObj['IS_LOAN_PERIOD_LOCK'] = ele.IS_LOAN_PERIOD_LOCK == 0 ? '0' : '1'
          newObj['MIN_LOAN_PERIOD'] = ele.MIN_LOAN_PERIOD
          newObj['MAX_LOAN_PERIOD'] = ele.MAX_LOAN_PERIOD
          newObj['S_INSTTYPE'] = ele.S_INSTTYPE == 0 ? '0' : '1'
          newObj['INSTALLMENT_METHOD'] = ele.INSTALLMENT_METHOD
          newObj['IS_OVERDUE_ON_INSTALLMENT'] = ele.IS_OVERDUE_ON_INSTALLMENT
          newObj['IS_SHOW_INT_AS_RECINT_IFDUEBAL'] = ele.IS_SHOW_INT_AS_RECINT_IFDUEBAL == 0 ? '0' : '1'
          newObj['MIN_DUE_INSTALLMENTS'] = ele.MIN_DUE_INSTALLMENTS
          newObj['S_PRODUCT_DAY_BASE'] = ele.S_PRODUCT_DAY_BASE
          newObj['S_PRODUCT_DAY_BASE_END'] = ele.S_PRODUCT_DAY_BASE_END
          newObj['CHEQUEBOOK_MIN_BAL'] = ele.CHEQUEBOOK_MIN_BAL
          newObj['DORMANT_FLAG_APPLICABLE'] = ele.DORMANT_FLAG_APPLICABLE == 0 ? '0' : '1'
          newObj['OVERDRAFT_INTEREST_APPLICABLE'] = ele.OVERDRAFT_INTEREST_APPLICABLE
          newObj['OVERDRAFT_INTEREST_RATE'] = ele.OVERDRAFT_INTEREST_RATE
          newObj['GL_ACNO'] = ele.GL_ACNO
          newObj['S_PAYABLE_INT_ALLOW'] = ele.S_PAYABLE_INT_ALLOW == 0 ? '0' : '1'
          newObj['IS_AUTO_CUT_INSTRUCTION'] = ele.IS_AUTO_CUT_INSTRUCTION == 0 ? '0' : '1'
          newObj['IS_ALLOW_SI_MINBAL'] = ele.IS_ALLOW_SI_MINBAL == 0 ? '0' : '1'
          newObj['WITHDRAWAL_APPLICABLE'] = ele.WITHDRAWAL_APPLICABLE == 0 ? '0' : '1'
          newObj['S_INTPAID_ON_CLOSING'] = ele.S_INTPAID_ON_CLOSING == 0 ? '0' : '1'
          newObj['PREMATURE_COMPOUND_INT'] = ele.PREMATURE_COMPOUND_INT == 0 ? '0' : '1'
          newObj['PIGMY_MACHINE_SCHEME'] = ele.PIGMY_MACHINE_SCHEME
          newObj['SVR_CHARGE_GLCODE'] = ele.SVR_CHARGE_GLCODE
          newObj['SVR_CHARGE_RATE'] = ele.SVR_CHARGE_RATE
          newObj['S_CASH_INT_ACNO'] = ele.S_CASH_INT_ACNO
          newObj['INTEREST_RULE'] = ele.INTEREST_RULE == 0 ? '0' : '1'
          newObj['IS_RECURRING_TYPE'] = ele.IS_RECURRING_TYPE == 0 ? '0' : '1'
          newObj['IS_CALLDEPOSIT_TYPE'] = ele.IS_CALLDEPOSIT_TYPE == 0 ? '0' : '1'
          newObj['REINVESTMENT'] = ele.REINVESTMENT == 0 ? '0' : '1'
          newObj['S_INTCALC_METHOD'] = ele.S_INTCALC_METHOD
          newObj['FIX_QUARTER'] = ele.FIX_QUARTER == 0 ? '0' : '1'
          newObj['QUARTER_PLUS_DAYS'] = ele.QUARTER_PLUS_DAYS == 0 ? '0' : '1'
          newObj['COMPOUND_INT_BASIS'] = ele.COMPOUND_INT_BASIS
          newObj['COMPOUND_INT_DAYS'] = ele.COMPOUND_INT_DAYS
          newObj['IS_DISCOUNTED_INT_RATE'] = ele.IS_DISCOUNTED_INT_RATE == 0 ? '0' : '1'
          newObj['INSTALLMENT_BASIS'] = ele.INSTALLMENT_BASIS
          newObj['IS_ASSUMED_INSTALLMENTS'] = ele.IS_ASSUMED_INSTALLMENTS == 0 ? '0' : '1'
          newObj['INSTALLMENT_COMPULSORY_IN_PAT'] = ele.INSTALLMENT_COMPULSORY_IN_PAT == 0 ? '0' : '1'
          newObj['DEPOSIT_PENAL_INT_CALC_DAY'] = ele.DEPOSIT_PENAL_INT_CALC_DAY
          newObj['S_MATUCALC'] = ele.S_MATUCALC
          newObj['IS_CAL_MATURITY_AMT'] = ele.IS_CAL_MATURITY_AMT == 0 ? '0' : '1'
          newObj['FIXED_MATURITY_AMT'] = ele.FIXED_MATURITY_AMT == 0 ? '0' : '1'
          newObj['TRANSFER_TO_MATURE_DEPOSIT'] = ele.TRANSFER_TO_MATURE_DEPOSIT == 0 ? '0' : '1'
          newObj['S_INTASON'] = ele.S_INTASON == 0 ? '0' : '1'
          newObj['PERIOD_APPLICABLE'] = ele.PERIOD_APPLICABLE == 0 ? '0' : '1'
          newObj['IS_AUTO_PERIOD_CALCULATE'] = ele.IS_AUTO_PERIOD_CALCULATE == 0 ? '0' : '1'
          newObj['UNIT_OF_PERIOD'] = ele.UNIT_OF_PERIOD
          newObj['MIN_DAYS'] = ele.MIN_DAYS
          newObj['MIN_MONTH'] = ele.MIN_MONTH
          newObj['MULTIPLE_OF_AMT'] = ele.MULTIPLE_OF_AMT
          newObj['MULTIPLE_OF_DAYS'] = ele.MULTIPLE_OF_DAYS
          newObj['MULTIPLE_OF_MONTH'] = ele.MULTIPLE_OF_MONTH
          newObj['S_INTPAID'] = ele.S_INTPAID == 0 ? '0' : '1'
          newObj['INT_INSTRUCTION_ALLOW'] = ele.INT_INSTRUCTION_ALLOW == 0 ? '0' : '1'
          newObj['RECEIPT_NO_INPUT'] = ele.RECEIPT_NO_INPUT == 0 ? '0' : '1'
          newObj['LESS_PREMATURE_INT_RATE'] = ele.LESS_PREMATURE_INT_RATE
          newObj['LOCKER_RENT_ACNO'] = ele.LOCKER_RENT_ACNO
          newObj['LOCKER_RECBL_RENT_ACNO'] = ele.LOCKER_RECBL_RENT_ACNO
          newObj['LOCKER_DEPOSIT_APPLICABLE'] = ele.LOCKER_DEPOSIT_APPLICABLE == 0 ? '0' : '1'
          newObj['IS_DAYBASE_INT_CALCULATION'] = ele.IS_DAYBASE_INT_CALCULATION == 0 ? '0' : '1'
          newObj['IS_INSTRUCTION_UPTO_MATURITY'] = ele.IS_INSTRUCTION_UPTO_MATURITY == 0 ? '0' : '1'
          newObj['MEMBER_TYPE'] = ele.MEMBER_TYPE
          newObj['IS_AUTO_NO'] = ele.IS_AUTO_NO == 0 ? '0' : '1'
          newObj['SHARES_FACE_VALUE'] = ele.SHARES_FACE_VALUE
          newObj['MAX_SHARES_LIMIT'] = ele.MAX_SHARES_LIMIT
          newObj['DIVIDEND_PERCENTAGE'] = ele.DIVIDEND_PERCENTAGE
          newObj['IS_ADD_BONUS_IN_DIVIDEND'] = ele.IS_ADD_BONUS_IN_DIVIDEND == 0 ? '0' : '1'
          newObj['INT_ROUND_OFF'] = ele.INT_ROUND_OFF == 0 ? '0' : '1'
          newObj['SANCT_LIMIT_PERCENTAGE'] = ele.SANCT_LIMIT_PERCENTAGE
          newObj['RETIREMENT_YEARS'] = ele.RETIREMENT_YEARS
          newObj['SH_CERTIFICATE_METHOD'] = ele.SH_CERTIFICATE_METHOD
          newObj['MATURED_BUT_NOT_PAID_GLAC'] = ele.MATURED_BUT_NOT_PAID_GLAC
          newObj['IS_RENEWAL_ALLOW'] = ele.IS_RENEWAL_ALLOW == 0 ? '0' : '1'
          newObj['IS_INT_ON_DEPO_AMT'] = ele.IS_INT_ON_DEPO_AMT == 0 ? '0' : '1'
          newObj['S_INTCALTP'] = ele.S_INTCALTP
          newObj['IS_PRODUCTUPTODATE'] = ele.IS_PRODUCTUPTODATE == 0 ? '0' : '1'
          newObj['IS_START_WITH_MONTHS'] = ele.IS_START_WITH_MONTHS == 0 ? '0' : '1'
          newObj['IS_PRODUCT_BAL_BASE'] = ele.IS_PRODUCT_BAL_BASE
          newObj['IS_DAYSBASE_INSTRUCTION'] = ele.IS_DAYSBASE_INSTRUCTION == 0 ? '0' : '1'
          newObj['PREMATURE_ON_DEPOSIT_INST'] = ele.PREMATURE_ON_DEPOSIT_INST == 0 ? '0' : '1'
          newObj['ALLOW_EXTRA_INSTALLMENTS'] = ele.ALLOW_EXTRA_INSTALLMENTS == 0 ? '0' : '1'
          newObj['MATURE_GRACE_MONTHS'] = ele.MATURE_GRACE_MONTHS
          newObj['MATURE_GRACE_DAYS'] = ele.MATURE_GRACE_DAYS
          newObj['IS_AUTO_CUTTING'] = ele.IS_AUTO_CUTTING == 0 ? '0' : '1'
          newObj['MAX_DEP_LMT'] = ele.MAX_DEP_LMT
          newObj['IS_TDS_APPLICABLE'] = ele.IS_TDS_APPLICABLE == 0 ? '0' : '1'
          newObj['S_INTADD_PRINCIPLE'] = ele.S_INTADD_PRINCIPLE == 0 ? '0' : '1'
          newObj['IS_STD_INSTR_UPTO_MATURITY'] = ele.IS_STD_INSTR_UPTO_MATURITY == 0 ? '0' : '1'
          newObj['IS_ADD_PAYINT_IN_INSTRUCTION'] = ele.IS_ADD_PAYINT_IN_INSTRUCTION == 0 ? '0' : '1'
          newObj['RECEIPT_TYPE'] = ele.RECEIPT_TYPE
          newObj['PREMATURE_INTRATE_ASPER'] = ele.PREMATURE_INTRATE_ASPER
          newObj['AFTER_MATURE_INT_RATE'] = ele.AFTER_MATURE_INT_RATE
          newObj['TD_RECEIPT_METHOD'] = ele.TD_RECEIPT_METHOD
          newObj['MIN_BAL_FOR_INT'] = ele.MIN_BAL_FOR_INT
          newObj['ODPENALTY_ON_EXPIRED_LEDGERBAL'] = ele.ODPENALTY_ON_EXPIRED_LEDGERBAL == 0 ? '0' : '1'
          newObj['IS_CAL_EXTRAPENAL_FOR_CC'] = ele.IS_CAL_EXTRAPENAL_FOR_CC == 0 ? '0' : '1'
          newObj['IS_GOLD_LOAN'] = ele.IS_GOLDLOAN == 0 ? '0' : '1'
          newObj['S_SINGLE_VOUCHER'] = ele.S_SINGLE_VOUCHER == 0 ? '0' : '1'
          newObj['S_MULTY_VOUCHER'] = ele.S_MULTY_VOUCHER == 0 ? '0' : '1'
          newObj['S_CASH_PAID_MIN_AMT'] = ele.S_CASH_PAID_MIN_AMT
          newObj['S_CASH_PAID_LOCK'] = ele.S_CASH_PAID_LOCK == 0 ? '0' : '1'
          newObj['S_LOCAL_CLEARING'] = ele.S_LOCAL_CLEARING == 0 ? '0' : '1'
          newObj['S_CHEQUE_BOOK'] = ele.S_CHEQUE_BOOK == 0 ? '0' : '1'
          newObj['S_DEMAND_DRAFT'] = ele.S_DEMAND_DRAFT == 0 ? '0' : '1'
          newObj['IS_PO_APPL'] = ele.IS_PO_APPL == 0 ? '0' : '1'
          newObj['S_TEMP_OVERDRFT'] = ele.S_TEMP_OVERDRFT == 0 ? '0' : '1'
          newObj['S_PERIODCL_OVERDRFT'] = ele.S_PERIODCL_OVERDRFT == 0 ? '0' : '1'
          newObj['S_SPECIAL_INSTRUCTION'] = ele.S_SPECIAL_INSTRUCTION == 0 ? '0' : '1'
          newObj['S_SUB_PRINT'] = ele.S_SUB_PRINT == 0 ? '0' : '1'
          newObj['S_FREEZE_APPLICABLE'] = ele.S_FREEZE_APPLICABLE == 0 ? '0' : '1'
          newObj['PROD_INTUPTODATE'] = ele.PROD_INTUPTODATE == 0 ? '0' : '1'
          newObj['S_INT_CR_ACNO'] = ele.S_INT_CR_ACNO
          newObj['IS_ZERO_BAL_REQUIRED'] = ele.IS_ZERO_BAL_REQUIRED == 0 ? '0' : '1'
          newObj['INT_BASE_DAY'] = ele.INT_BASE_DAY
          newObj['INT_BASE_METHOD'] = ele.INT_BASE_METHOD
          newObj['SHOW_OVERDUEINT_IF_RECINTBAL'] = ele.SHOW_OVERDUEINT_IF_RECINTBAL
          newObj['IS_RECOVERY_APPLICABLE'] = ele.IS_RECOVERY_APPLICABLE == 0 ? '0' : '1'
          newObj['IS_ASK_RECOVERY'] = ele.IS_ASK_RECOVERY == 0 ? '0' : '1'
          newObj['RECOVERY_ACTYPE_FILED'] = ele.RECOVERY_ACTYPE_FILED
          newObj['RECOVERY_ACNO_FIELD'] = ele.RECOVERY_ACNO_FIELD
          newObj['REVOVERY_INST_FIELD'] = ele.REVOVERY_INST_FIELD
          newObj['RECOVERY_INT_INST_FILED'] = ele.RECOVERY_INT_INST_FILED
          newObj['RECOVERY_BALNACE_FILED'] = ele.RECOVERY_BALNACE_FILED
          newObj['RECOVERY_RECEIVABLEINT_FILED'] = ele.RECOVERY_RECEIVABLEINT_FILED
          newObj['RECOVERY_TOTINST_FILED'] = ele.RECOVERY_TOTINST_FILED
          newObj['RECOVERY_PENALINT_FILED'] = ele.RECOVERY_PENALINT_FILED
          newObj['RECOVERY_RECEPENALINT_FIELD'] = ele.RECOVERY_RECEPENALINT_FIELD
          newObj['REF_ID'] = ele.REF_ID
          console.log('ele.S_APPL', ele.S_APPL)
          let scheme = await queryRunner.manager.save(SCHEMAST, newObj);

          // let update = await connection2.execute(`update schemast set TYPEID=${scheme.id} where S_APPL = ${ele.S_APPL}`);
          await connection2.commit();
        }
        await connection2.close();
        console.log('SCHEMAST Completed')
      }
      catch (error) {
        console.log(error)
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'Issue in schemast' + `${error.stack}`,
        }, HttpStatus.FORBIDDEN);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //ACMASTER
  // async ACMASTER() {
  //   //  const config: sql.config = {
  //   //     user: 'sa',
  //   //     password: 'subhash',
  //   //     server: 'localhost',
  //   //     port: 1433,
  //   //     database: 'FinEx', // Instead of SID
  //   //     options: {
  //   //       encrypt: false,
  //   //       trustServerCertificate: true,
  //   //     },
  //   //   }


  //   //     const connection = await sql.connect(config);

  //   //         // await connection.close()

  //   //     // ✅ Query data from MSSQL
  //   //     const acmasterResult = await connection.request().query('SELECT * FROM LEDGER');
  //   //     const schemastResult = await connection.request().query('SELECT * FROM ACCOUNT_TYPE');
  //   //     const sysparaResult = await connection.request().query('SELECT * FROM BANK_DETAILS');

  //   //     const customers = acmasterResult.recordset;


  //   let queryRunner = await this.connection.createQueryRunner();
  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();
  //   try {
  //     try {
  //       // let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
  //       // let result = await connection2.execute('SELECT acmaster.*,schemast.S_APPL as actype FROM ACMASTER LEFT JOIN SCHEMAST ON ACMASTER.AC_TYPE=SCHEMAST.S_APPL');
  //       // let data = await this.jsonConverter(result);
  //       const config: sql.config = {
  //         user: 'sa',
  //         password: 'subhash',
  //         server: 'localhost',
  //         port: 1433,
  //         database: 'FinEx', // Instead of SID
  //         options: {
  //           encrypt: false,
  //           trustServerCertificate: true,
  //         },
  //       }


  //       const connection = await sql.connect(config);

  //       // await connection.close()

  //       // ✅ Query data from MSSQL
  //       const acmasterResult = await connection.request().query('SELECT * FROM LEDGER');
  //       const schemastResult = await connection.request().query('SELECT * FROM ACCOUNT_TYPE');
  //       const sysparaResult = await connection.request().query('SELECT * FROM BANK_DETAILS');

  //       const data = acmasterResult.recordset;
  //       for (let ele of data) {
  //         let newObj = new ACMASTER();
  //         newObj['id'] = ele.AC_NO;
  //         newObj['AC_NO'] = ele.AC_NO;
  //         newObj['AC_NAME'] = ele.AC_NAME;
  //         newObj['BRANCH_CODE'] = this.BRANCH_CODE;
  //         newObj['AC_OP_BAL'] = ele.AC_OP_BAL
  //         newObj['IS_POST_INT_AC'] = 0
  //         newObj['IS_DIRECT_ENTRY_ALLOW'] = ele.IS_DIRECT_ENTRY_ALLOW == 0 ? false : true;
  //         newObj['IS_RED_BALANCE_AC'] = ele.IS_RED_BALANCE_AC == 0 ? false : true;
  //         newObj['AC_IS_CASH_IN_TRANSIT'] = ele.AC_IS_CASH_IN_TRANSIT == 0 ? false : true;
  //         newObj['IS_TAXABLEFOR_GST'] = ele.IS_TAXABLEFOR_GST == 0 ? false : true;
  //         newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
  //         newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
  //         // newObj['AC_TYPE'] = ele.ACTYPE;
  //         newObj['AC_TYPE'] = 4;
  //         newObj['IS_ACTIVE'] = true;
  //         let master = await this.ACMASTERService.save(newObj);

  //       }
  //       await connection.close()
  //       console.log('ACMASTER Completed')
  //     }
  //     catch (error) {
  //       throw new HttpException({
  //         status: HttpStatus.FORBIDDEN,
  //         error: error,
  //       }, HttpStatus.FORBIDDEN);
  //     }
  //     await queryRunner.commitTransaction();
  //   } catch (error) {
  //     // Rollback the transaction if an error occurs
  //     await queryRunner.rollbackTransaction();
  //     throw error;
  //   } finally {
  //     // Release the query runner
  //     await queryRunner.release();
  //   }
  //   // await connection.close()
  // }


  dvbwToUnicode: Record<string, string> = {
    "¢": "अ",
    "£": "आ",
    "¥": "इ",
    "Ü": "ई",
    "™": "उ",
    "ø": "ऊ",
    "é": "ए",
    "ß": "ऐ",
    "ä": "ओ",
    "å": "औ",
    "k": "क",
    "kh": "ख",
    "g": "ग",
    "gh": "घ",
    "ch": "च",
    "j": "ज",
    "jh": "झ",
    "t": "ट",
    "th": "ठ",
    // Add the rest of DVBW mappings here
  };

  dvbwToMarathi(input: string): string {
    if (!input) return "";
    let result = "";
    for (const char of input) {
      result += this.dvbwToUnicode[char] ?? char;
    }
    return result;
  }

  marathiToEnglish(input: string): string {
    if (!input) return "";

    const composites: Record<string, string> = {
      "क्ष": "ksh",
      "ज्ञ": "gy",
      "त्र": "tra",
    };

    const map: Record<string, string> = {
      "अ": "a", "आ": "aa", "इ": "i", "ई": "ee",
      "उ": "u", "ऊ": "oo", "ए": "e", "ऐ": "ai",
      "ओ": "o", "औ": "au",
      "ा": "a", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo",
      "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
      "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "n",
      "च": "ch", "छ": "chh", "ज": "j", "झ": "jh", "ञ": "n",
      "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh", "ण": "n",
      "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
      "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
      "य": "y", "र": "r", "ल": "l", "ळ": "l",
      "व": "v", "श": "sh", "ष": "sh", "स": "s", "ह": "h",
      "ं": "n", "ः": "h", "ँ": "n",
      "्": "",
    };

    let text = input;

    for (const c in composites) {
      const regex = new RegExp(c, "g");
      text = text.replace(regex, composites[c]);
    }

    let result = "";
    for (const char of text) {
      result += map[char] ?? char;
    }

    return result.charAt(0).toUpperCase() + result.slice(1);
  }


  dvbwToEnglish(input: string): string {
    const marathi = this.dvbwToMarathi(input);   // DVBW → Marathi Unicode
    const english = this.marathiToEnglish(marathi); // Marathi → English
    return english;
  }

  async ACMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      try {
        let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
        let result = await connection2.execute('SELECT acmaster.*,schemast.S_APPL as actype FROM ACMASTER LEFT JOIN SCHEMAST ON ACMASTER.AC_TYPE=SCHEMAST.S_APPL ORDER BY AC_NO');
        let data = await this.jsonConverter(result);
        for (let ele of data) {
          let newObj = new ACMASTER();
          newObj['id'] = ele.AC_NO;
          newObj['AC_NO'] = ele.AC_NO;
          // let name1 = ele.AC_NAME.replace("\x00", "")
          //          newObj['AC_NAME'] = this.dvbwToEnglish(name1 ?? "");


          // let font = 'DVBW-TTYogeshEn';

          //     if (name1 == null || name1 == undefined) {
          //       name1 = ''
          //     }

          //     let marathiLnm = unidev(name1, 'hindi', `${font}`);
          //     // let marathiMnm = unidev(ele.Middle_name, 'hindi', `${font}`);

          //     if (font === 'DVBW-TTYogeshEn') {
          //       if (marathiLnm.includes('×')) {
          //         marathiLnm = marathiLnm.replace(/×(.)/g, '$1ि');
          //       }
          //       if (marathiLnm.includes('Ø')) {
          //         marathiLnm = marathiLnm.replace(/Ø(.)/g, '$1िं');
          //       }
          //       if (marathiLnm.includes('Ô')) {

          //         marathiLnm = marathiLnm.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');


          //         marathiLnm = marathiLnm.replace(/Ô/g, 'र्');
          //       }
          //     }

          //     if (name1 == null || name1 == undefined) {
          //       name1 = ''
          //     }

          //     let marathiFnm = unidev(ele.AC_NAME, 'hindi', `${font}`);
          //     if (font === 'DVBW-TTYogeshEn') {
          //       if (marathiFnm.includes('×')) {
          //         marathiFnm = marathiFnm.replace(/×(.)/g, '$1ि');
          //       }
          //       if (marathiFnm.includes('Ø')) {
          //         marathiFnm = marathiFnm.replace(/Ø(.)/g, '$1िं');
          //       }
          //       if (marathiFnm.includes('Ô')) {

          //         marathiFnm = marathiFnm.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');


          //         marathiFnm = marathiFnm.replace(/Ô/g, 'र्');
          //       }
          //     }

          //    let ENG_NAME = this.translatefullwords(marathiFnm)



          newObj['AC_NAME'] = ele.AC_NAME.replace("\x00", "")
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          newObj['IS_POST_INT_AC'] = 0
          newObj['AC_OP_BAL'] = ele.AC_OP_BAL;
          newObj['IS_DIRECT_ENTRY_ALLOW'] = ele.IS_DIRECT_ENTRY_ALLOW == 0 ? false : true;
          newObj['IS_RED_BALANCE_AC'] = ele.IS_RED_BALANCE_AC == 0 ? false : true;
          newObj['AC_IS_CASH_IN_TRANSIT'] = ele.AC_IS_CASH_IN_TRANSIT == 0 ? false : true;
          newObj['IS_TAXABLEFOR_GST'] = ele.IS_TAXABLEFOR_GST == 0 ? false : true;
          newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
          newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
          newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
          // newObj['AC_TYPE'] = ele.ACTYPE;
          newObj['AC_TYPE'] = 45;
          newObj['IS_ACTIVE'] = true;
          await queryRunner.manager.insert(ACMASTER, newObj);
        }
        await connection2.close()
        console.log('ACMASTER Completed')
      }
      catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: error,
        }, HttpStatus.FORBIDDEN);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }



  private cleanDate(value: any) {
    if (!value) return value;

    const str = String(value).trim();

    // Already in correct YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;

    // Remove timezone parts
    const cleaned = str
      .replace(/\(.*?\)/g, "") // remove (India Standard Time)
      .replace(/GMT.*$/g, "")  // remove timezone
      .trim();

    // Try parsing
    const parsed = new Date(cleaned);

    if (!isNaN(parsed.getTime())) {
      // Format to YYYY-MM-DD
      return parsed.toISOString().split("T")[0];
    }

    return null; // invalid date becomes NULL
  }
  //TERMMASTER
  async TERMMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM TERMMASTER order by SR_NO');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let obj = new TERMMASTER()
        obj['SR_NO'] = ele.SR_NO
        obj['ACNOTYPE'] = ele.ACNOTYPE
        obj['TERM_TYPE'] = ele.TERM_TYPE
        obj['PERIOD_FROM'] = ele.PERIOD_FROM
        obj['PERIOD_TO'] = ele.PERIOD_TO
        let advo = await queryRunner.manager.insert(TERMMASTER, obj)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TERMMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //SIZEWISEBALANCE 
  async SIZEWISEBALANCE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from SIZEWISEBALANCE order by amount_from');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let obj = new SIZEWISEBALANCE()
        obj['SR_NO'] = ele.SR_NO
        obj['ACNOTYPE'] = ele.ACNOTYPE
        obj['SLAB_TYPE'] = ele.SLAB_TYPE
        obj['AMOUNT_FROM'] = ele.AMOUNT_FROM == -1 ? 1 : ele.AMOUNT_FROM
        obj['AMOUNT_TO'] = ele.AMOUNT_TO
        obj['UNIT_OF_PERIOD'] = ele.UNIT_OF_PERIOD
        obj['FROM_MONTHS'] = ele.FROM_MONTHS
        obj['FROM_DAYS'] = ele.FROM_DAYS
        obj['TO_MONTHS'] = ele.TO_MONTHS
        obj['TO_DAYS'] = ele.TO_DAYS
        obj['DEDUCTION_PERCENT'] = ele.DEDUCTION_PERCENT
        let advo = await queryRunner.manager.insert(SIZEWISEBALANCE, obj)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SIZEWISEBALANCE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //INFORMATION
  //ADVOCATE MASTER
  async ADVOCATEMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM ADVOCATEMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.ADVOCATEMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let advocate = new ADVOCATEMASTER()
          advocate['CODE'] = ele.CODE
          advocate['NAME'] = ele.NAME
          let advo = await queryRunner.manager.insert(ADVOCATEMASTER, advocate)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('ADVOCATEMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //BALACATA
  async BALACATA() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BALACATA order by BC_CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.BALACATAService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['BC_NAME'] == ele.BC_NAME)) {
        }
        else {
          let obj = new BALACATA()
          obj['BC_NAME'] = ele.BC_NAME.replace("\x00", "")
          obj['BC_MINBAL'] = ele.BC_MINBAL
          let insertObj = await queryRunner.manager.insert(BALACATA, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('BALACATA')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PREFIX
  async PREFIX() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM PREFIX order by SR_NO');
      let data = await this.jsonConverter(result);
      let pgData = await this.PREFIXService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['PREFIX'] == ele.PREFIX)) {
        }
        else {
          let obj = new PREFIX()
          obj['PREFIX'] = ele.PREFIX
          obj['SEX'] = ele.SEX
          obj['PREFIX_REG'] = ele.PREFIX_REG
          let insertObj = await queryRunner.manager.insert(PREFIX, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PREFIX')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PRIORITYSECTORMASTER
  async PRIORITYSECTORMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM PRIORITYMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.PRIORITYSECTORMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new PRIORITYSECTORMASTER()
          obj['SUB1_CODE'] = ele.SUB1_CODE
          obj['SUB2_CODE'] = ele.SUB2_CODE
          obj['SUB3_CODE'] = ele.SUB3_CODE
          obj['NAME'] = ele.NAME
          let insertObj = await queryRunner.manager.insert(PRIORITYSECTORMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PRIORITYSECTORMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //RECOVERYCLEARKMASTER
  async RECOVERYCLEARKMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM RECOVERYCLEARKMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.RECOVERYCLEARKMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new RECOVERYCLEARKMASTER()
          obj['NAME'] = ele.NAME
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(RECOVERYCLEARKMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('RECOVERYCLEARKMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //RISKCATEGORYMASTER
  async RISKCATEGORYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM RISKCATEGORYMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.RISKCATEGORYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new RISKCATEGORYMASTER()
          obj['NAME'] = ele.NAME
          let insertObj = await queryRunner.manager.insert(RISKCATEGORYMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('RISKCATEGORYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //SALARYDIVISIONMASTER
  async SALARYDIVISIONMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM SALARYDIVISIONMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.SALARYDIVISIONMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new SALARYDIVISIONMASTER()
          obj['NAME'] = ele.NAME
          obj['SHORT_NAME'] = ele.SHORT_NAME
          obj['AT_POST'] = ele.AT_POST
          obj['TALUKA_NAME'] = ele.TALUKA_NAME
          obj['DISTRICT_NAME'] = ele.DISTRICT_NAME
          obj['PHNO'] = ele.PHNO
          obj['MOBNO'] = ele.MOBNO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(SALARYDIVISIONMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SALARYDIVISIONMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //SUBSALARYMASTER
  async SUBSALARYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM SUBSALARYMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.SUBSALARYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new SUBSALARYMASTER()
          obj['NAME'] = ele.NAME
          obj['AT_POST'] = ele.AT_POST
          obj['TALUKA_NAME'] = ele.TALUKA_NAME
          obj['DISTRICT_NAME'] = ele.DISTRICT_NAME
          obj['AC_EMAILID'] = ele.AC_EMAILID
          obj['PHNO'] = ele.PHNO
          obj['MOBNO'] = ele.MOBNO
          obj['SAL_CODE'] = ele.SAL_CODE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(SUBSALARYMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SUBSALARYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //WEAKERMASTER
  async WEAKERMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM WEAKERMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.WEAKERMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new WEAKERMASTER()
          obj['NAME'] = ele.NAME
          let insertObj = await queryRunner.manager.insert(WEAKERMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('WEAKERMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //TDRECEIPTMASTER
  async TDRECEIPTMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from TDRECEIPTMASTER');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let obj = new TDRECEIPTMASTER()
        obj['RECEIPT_TYPE'] = ele.RECEIPT_TYPE
        obj['LAST_RECEIPT_NO'] = ele.LAST_RECEIPT_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await queryRunner.manager.insert(TDRECEIPTMASTER, obj)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TDRECEIPTMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //AUTHORITYMASTER
  async AUTHORITYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM AUTHORITYMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.AUTHORITYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new AUTHORITYMASTER()
          obj['NAME'] = ele.NAME.replace("\x00", "")
          let insertObj = await queryRunner.manager.insert(AUTHORITYMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('AUTHORITYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LOCKERRACKMASTER
  async LOCKERRACKMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM LOCKERRACKMASTER order by RACK_NO');
      let data = await this.jsonConverter(result);
      let pgData = await this.LOCKERRACKMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['RACK_DESC'] == ele.RACK_DESC)) {
        }
        else {
          let obj = new LOCKERRACKMASTER()
          obj['RACK_DESC'] = ele.RACK_DESC
          obj['LOCKER_FROMNO'] = ele.LOCKER_FROMNO
          obj['LOCKER_TONO'] = ele.LOCKER_TONO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(LOCKERRACKMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('LOCKERRACKMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LOCKERSIZE
  async LOCKERSIZE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM LOCKERSIZE order by SIZE_SR_NO');
      let data = await this.jsonConverter(result);
      let pgData = await this.LOCKERSIZEService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['SIZE_NAME'] == ele.SIZE_NAME)) {
        }
        else {
          let obj = new LOCKERSIZE()
          obj['SIZE_NAME'] = ele.SIZE_NAME
          obj['RENT'] = ele.RENT
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(LOCKERSIZE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('LOCKERSIZE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LOCKERMASTER
  async LOCKERMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select LOCKERMASTER.*, lockersize.SIZE_SR_NO from lockermaster left join lockersize on lockermaster.SIZE_SR_NO=lockersize.SIZE_SR_NO');
      let data = await this.jsonConverter(result);
      let pgData = await this.LOCKERMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['LOCKER_NO'] == ele.LOCKER_NO)) {
        }
        else {
          let obj = new LOCKERMASTER()
          obj['LOCKER_NO'] = ele.LOCKER_NO
          obj['KEY_NO'] = ele.KEY_NO
          obj['SIZE_SR_NO'] = ele.SIZE_SR_NO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(LOCKERMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('LOCKERMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //ITEMCATEGORYMASTER
  async ITEMCATEGORYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM ITEMCATEGORY order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.ITEMCATEGORYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new ITEMCATEGORYMASTER()
          obj['NAME'] = ele.NAME
          let insertObj = await queryRunner.manager.insert(ITEMCATEGORYMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('ITEMCATEGORYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //DOCUMENTMASTER
  async DOCUMENTMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM DOCUMENTMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.DOCUMENTMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new DOCUMENTMASTER()
          obj['NAME'] = ele.NAME
          let insertObj = await queryRunner.manager.insert(DOCUMENTMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('DOCUMENTMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //COURTMASTER
  async COURTMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM COURTMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.COURTMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new COURTMASTER()
          obj['NAME'] = ele.NAME.replace("\x00", "")
          let insertObj = await queryRunner.manager.insert(COURTMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('COURTMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //CLEARING BRANCHMASTER
  async BRANCHMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BRANCHMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.BRANCHMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new BRANCHMASTER()
          obj['NAME'] = ele.NAME.replace("\x00", "")
          obj['AC_NO'] = ele.AC_NO == 0 ? null : ele.AC_NO
          let insertObj = await queryRunner.manager.insert(BRANCHMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('BRANCHMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //CATEGORYMASTER
  async CATEGORYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM CATEGORYMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.CATEGORYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new CATEGORYMASTER()
          obj['NAME'] = ele.NAME.replace("\x00", "")
          let insertObj = await queryRunner.manager.insert(CATEGORYMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('CATEGORYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //CASTMASTER
  async CASTMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM CASTMASTER ');
      let data = await this.jsonConverter(result);
      let pgData = await this.CASTMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let obj = new CASTMASTER()
          obj['NAME'] = ele.NAME.replace("\x00", "")
          let insertObj = await queryRunner.manager.insert(CASTMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('CASTMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //BANKDETAILS
  async BANKDETAILS() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      //can store single record
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BANKDETAILS order by BANK_CODE');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let obj = new BANKDETAILS()
        obj['NAME'] = ele.NAME
        obj['TAN_NO'] = ele.TAN_NO
        obj['PAN_NO'] = ele.PAN_NO
        obj['FLAT_PRM_NO'] = ele.FLAT_PRM_NO
        obj['FLAT_PRM_NAME'] = ele.FLAT_PRM_NAME
        obj['RD_LANE_NAME'] = ele.RD_LANE_NAME
        obj['AREA_LOCATION'] = ele.AREA_LOCATION
        obj['CITY_CODE'] = ele.CITY_CODE
        obj['PIN_CODE'] = ele.PIN_CODE
        obj['PHONE_OFFICE'] = ele.PHONE_OFFICE
        obj['EMAIL'] = ele.EMAIL
        obj['SHORT_NAME'] = ele.SHORT_NAME
        obj['GST_NO'] = null
        obj['SBI_BANKCODE'] = ele.SBI_BANKCODE
        obj['MOB_NUM'] = null
        obj['STATE'] = null
        let insertObj = await queryRunner.manager.insert(BANKDETAILS, obj)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('BANKDETAILS')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //City master
  async CITYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM CITYMASTER WHERE CITY_CODE > 22 order by CITY_CODE');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        if (this.PostCitymaster.some(pgData => pgData['CITY_NAME'] == ele.CITY_NAME)) {
        }
        else {
          let newObj = new CITYMASTER();
          newObj['CITY_CODE'] = ele.CITY_CODE;
          newObj['CITY_NAME'] = ele.CITY_NAME.replace("\x00", "");
          newObj['TALUKA_CODE'] = ele.TALUKA_CODE;
          newObj['DISTRICT_CODE'] = ele.DISTRICT_CODE;
          newObj['STATE_CODE'] = ele.STATE_CODE;
          newObj['REGION_CODE'] = ele.REGION_CODE;
          newObj['DISTANCE'] = ele.DISTANCE;
          await queryRunner.manager.save(CITYMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('CITYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //BANKMASTER
  async BANKMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BANKMASTER WHERE BANK_CODE > 1 order by BANK_CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.BANKMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['BANK_NAME'] == ele.BANK_NAME)) {
        }
        else {
          let obj = new BANKMASTER()
          obj['BANK_NAME'] = ele.BANK_NAME.replace("\x00", "")
          obj['BANK_SHORTNAME'] = ele.BANK_SHORTNAME.replace("\x00", "")
          obj['LEDGER_CODE'] = ele.LEDGER_CODE
          obj['BANKCODE'] = ele.BANKCODE
          obj['DD_APPLICABLE'] = ele.DD_APPLICABLE == 0 ? '0' : '1'
          obj['GL_ACNO'] = ele.GL_ACNO
          obj['HO_SUB_GLACNO'] = ele.HO_SUB_GLACNO
          obj['BANKERS_COMM_APPLICABLE'] = ele.BANKERS_COMM_APPLICABLE == 0 ? '0' : '1'
          obj['RIGHT_TO_PREPARE_DD'] = ele.RIGHT_TO_PREPARE_DD == 0 ? '0' : '1'
          obj['PARTICIPATE_IN_CLEARING'] = ele.PARTICIPATE_IN_CLEARING == 0 ? '0' : '1'
          let insertObj = await queryRunner.manager.insert(BANKMASTER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('BANKMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //DEPRCATEGORY
  async DEPRCATEGORY() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM deprcategory order by CODE');
      let data = await this.jsonConverter(result);
      // let acmaster = await this.ACMASTERService.find()
      let pgData = await this.DEPRCATEGORYService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        // if(ele.AC_NO == 142){
        //   ele.AC_NO = 141
        // }
        else {
          let newObj = new DEPRCATEGORY();
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          newObj['AC_NO'] = ele.AC_NO;
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          await queryRunner.manager.insert(DEPRCATEGORY, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('DEPRCATEGORY')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //DIRECTORMASTER
  async DIRECTORMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM DIRECTORMASTER order by CODE');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        // if (this.PostdirectorMaster.some(pgData => pgData['NAME'] == ele.NAME)) {
        // }
        // else {
        let obj = new DIRECTORMASTER();
        obj['NAME'] = ele.NAME.replace("\x00", "")
        obj['DESIGNATION'] = ele.DESIGNATION.replace("\x00", "")
        obj['AC_ADDR1'] = ele.AC_ADDR1.replace("\x00", "")
        obj['AC_ADDR2'] = ele.AC_ADDR2
        obj['AC_ADDR3'] = ele.AC_ADDR3
        obj['AC_PIN'] = ele.AC_PIN
        obj['IS_CURRENT_BODY_MEMBER'] = ele.IS_CURRENT_BODY_MEMBER == 0 ? '0' : '1'
        obj['SMS_REQUIRED'] = ele.SMS_REQUIRED
        obj['AC_MOBILENO'] = ele.AC_MOBILENO
        obj['AC_CTCODE'] = ele.AC_CTCODE
        obj['CODE'] = ele.CODE
        // obj['REF_ID'] = ele.REF_ID
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.save(DIRECTORMASTER, obj);
        //}
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('DIRECTORMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //HEALTHMASTER
  async HEALTHMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM HEALTHMASTER WHERE CODE > 1 order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.HEALTHMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let newObj = new HEALTHMASTER();
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(HEALTHMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('HEALTHMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //INDUSTRYMASTER
  async INDUSTRYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM INDUSTRYMASTER  order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.INDUSTRYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let newObj = new INDUSTRYMASTER();
          newObj['NAME'] = ele.NAME;
          await queryRunner.manager.save(INDUSTRYMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INDUSTRYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //INSUARANCEMASTER
  async INSUARANCEMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM INSUARANCEMASTER order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.INSUARANCEMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let newObj = new INSUARANCEMASTER();
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(INSUARANCEMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INSUARANCEMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //INTCATEGORYMASTER
  async INTCATEGORYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM INTCATEGORYMASTER WHERE CODE > 11 order by CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.INTCATEGORYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
        }
        else {
          let newObj = new INTCATEGORYMASTER();
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(INTCATEGORYMASTER, newObj);
        }
      }
      await connection2.close()
      console.log('INTCATEGORYMASTER')
      await queryRunner.commitTransaction();
      console.log('INTCATEGORYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //ITEMMASTER
  async ITEMMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM ITEMMASTER order by ITEM_CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.ITEMMASTERService.find()
      let itemcategory = await connection2.execute('SELECT CODE FROM ITEMCATEGORY');
      let itemcategorydata = await this.jsonConverter(itemcategory);
      let postItemcategory = await this.ITEMCATEGORYMASTERService.find()
      let marathiName
      let marathiName1
      let font = 'DVBW-TTYogeshEn'
      let ENG_NAME
      let ENG_NAME1
      if (pgData.length == 0) {
        for (let ele of data) {
          let itemType = null
          if (ele.ITEM_TYPE != null) {
            for (let eleme of itemcategorydata) {
              itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.CODE))
            }
          }
          let newObj = new ITEMMASTER();

          // newObj['ITEM_TYPE'] = itemType == null ? null : itemType.id;
          if (ele.OP_BALANCE == 33063.6) {
            ele.OP_BALANCE = 33063
          }
          let acname = ele.ITEM_NAME

          if (acname != null) {

            marathiName = unidev(acname, 'hindi', `${font}`);

            if (font === 'DVBW-TTYogeshEn') {
              if (marathiName.includes('×')) {
                marathiName = marathiName.replace(/×(.)/g, '$1ि');
              }
              if (marathiName.includes('Ø')) {
                marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
              }
              if (marathiName.includes('Ô')) {

                marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
                marathiName = marathiName.replace(/Ô/g, 'र्');
              }
            }

            ENG_NAME = this.translatefullwords(marathiName)

          }

          let name = ele.SUPPLIER_NAME
          if (name != null) {

            marathiName1 = unidev(name, 'hindi', `${font}`);

            if (font === 'DVBW-TTYogeshEn') {
              if (marathiName1.includes('×')) {
                marathiName1 = marathiName1.replace(/×(.)/g, '$1ि');
              }
              if (marathiName1.includes('Ø')) {
                marathiName1 = marathiName1.replace(/Ø(.)/g, '$1िं');
              }
              if (marathiName1.includes('Ô')) {

                marathiName1 = marathiName1.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
                marathiName1 = marathiName1.replace(/Ô/g, 'र्');
              }
            }

            ENG_NAME1 = this.translatefullwords(marathiName1)

          }

          newObj['ITEM_TYPE'] = '1'
          newObj['ITEM_CODE'] = ele.ITEM_CODE;
          newObj['ITEM_NAME'] = marathiName
          newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
          newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
          newObj['SUPPLIER_NAME'] = marathiName1
          newObj['GL_ACNO'] = ele.GL_ACNO;
          newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
          newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
          newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
          newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
          newObj['OP_BALANCE'] = ele.OP_BALANCE == null ? 0 : ele.OP_BALANCE;;
          newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
          newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
          console.log('CODE:', ele.ITEM_CODE)
          await queryRunner.manager.save(ITEMMASTER, newObj);
        }
      }
      else {
        for (let ele of data) {
          if (pgData.some(pgData => pgData['ITEM_NAME'] == ele.ITEM_NAME) && pgData.some(pgData => moment(pgData['PURCHASE_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.PURCHASE_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {

          }
          else {
            let itemType = null
            if (ele.ITEM_TYPE != null) {
              for (let eleme of itemcategorydata) {
                itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.NAME))
              }
            }
            let newObj = new ITEMMASTER();
            // newObj['ITEM_TYPE'] = itemType.id;
            newObj['ITEM_TYPE'] = '1'
            newObj['ITEM_CODE'] = ele.ITEM_CODE;
            newObj['ITEM_NAME'] = marathiName
            newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
            newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
            newObj['SUPPLIER_NAME'] = marathiName1
            newObj['GL_ACNO'] = ele.GL_ACNO;
            newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
            newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
            newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
            newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
            newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
            newObj['OP_BALANCE'] = ele.OP_BALANCE;
            newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
            newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
            newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
            newObj['BRANCH_CODE'] = this.BRANCH_CODE;
            await queryRunner.manager.save(ITEMMASTER, newObj);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('ITEMMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LOANSTAGEMASTER
  async LOANSTAGEMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from LOANSTAGEMASTER');
      let data = await this.jsonConverter(result);
      let pgData = await this.LOANSTAGEMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new LOANSTAGEMASTER();
          newObj['NAME'] = ele.NAME;
          await queryRunner.manager.save(LOANSTAGEMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('LOANSTAGEMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //NARRATIONMASTER
  async NARRATIONMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from NARRATIONMASTER');
      let data = await this.jsonConverter(result);
      let pgData = await this.NARRATIONMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NARRATION'] == ele.NARRATION)) {

        }
        else {
          let newObj = new NARRATIONMASTER();
          newObj['NARRATION'] = ele.NARRATION.replace("\x00", "");
          await queryRunner.manager.save(NARRATIONMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('NARRATIONMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OCCUPATIONMASTER
  async OCCUPATIONMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM OCCUPATIONMASTER order by "CODE"');
      let data = await this.jsonConverter(result);
      let pgData = await this.OCCUPATIONMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new OCCUPATIONMASTER();
          newObj['CODE'] = ele.CODE;
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(OCCUPATIONMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('OCCUPATIONMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OPERATIONMASTER
  async OPERATIONMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM OPERATIONMASTER order by CODE ');
      let data = await this.jsonConverter(result);
      let pgData = await this.OPERATIONMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new OPERATIONMASTER();
          newObj['CODE'] = ele.CODE;
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(OPERATIONMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('OPERATIONMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OWNBRANCHMASTER
  async OWNBRANCHMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from OWNBRANCHMASTER');
      let data = await this.jsonConverter(result);

      for (let ele of data) {
        if (this.PostBranch.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let branchCode: number
          //get last number of AC 
          let latestList = await this.OWNBRANCHMASTERService.find({
            order: {
              id: 'DESC'
            },
            take: 1
          })
          let latestEntry = latestList[0]
          if (typeof (latestEntry) == typeof (undefined)) {
            branchCode = 101
          }
          else {
            branchCode = Number(latestEntry.CODE + 1)
          }
          let newObj = new OWNBRANCHMASTER();
          newObj['NAME'] = ele.NAME;
          newObj['CODE'] = branchCode;
          newObj['sysparaId'] = this.PostSyspara[0].id;
          newObj['AC_NO'] = ele.AC_NO == 0 ? null : ele.AC_NO;
          await queryRunner.manager.save(OWNBRANCHMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('OWNBRANCHMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PRIORITYMASTER
  async PRIORITYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from PRIORITYMASTER');
      let data = await this.jsonConverter(result);
      let pgData = await this.PRIORITYMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new PRIORITYMASTER();
          newObj['CODE'] = ele.CODE;
          newObj['NAME'] = ele.NAME;
          newObj['SUB1_CODE'] = ele.SUB1_CODE;
          newObj['SUB2_CODE'] = ele.SUB2_CODE;
          newObj['SUB3_CODE'] = ele.SUB3_CODE;
          await queryRunner.manager.save(PRIORITYMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PRIORITYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PURPOSEMASTER
  async PURPOSEMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM PURPOSEMASTER order by CODE ');
      let data = await this.jsonConverter(result);
      let pgData = await this.PURPOSEMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new PURPOSEMASTER();
          newObj['NAME'] = ele.NAME;
          await queryRunner.manager.save(PURPOSEMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PURPOSEMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //REPORTTYPEMASTER
  async REPORTTYPEMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM REPORTTYPEMASTER order by SERIAL_NO');
      let data = await this.jsonConverter(result);
      let pgData = await this.REPORTTYPEMASTERService.find()
      for (let ele of data) {
        if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

        }
        else {
          let newObj = new REPORTTYPEMASTER();
          newObj['NAME'] = ele.NAME.replace("\x00", "");
          await queryRunner.manager.save(REPORTTYPEMASTER, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('REPORTTYPEMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //HOLIDAYSMASTER
  async HOLIDAYSMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from holidaysmaster order by T_DATE');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let newObj = new HOLIDAYSMASTER();
        newObj['T_DATE'] = ele.T_DATE == '' || ele.T_DATE == null ? null : moment(ele.T_DATE).format('DD/MM/YYYY');
        newObj['T_DESC'] = ele.T_DESC.replace("\x00", "");
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        await queryRunner.manager.save(HOLIDAYSMASTER, newObj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('HOLIDAYSMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //TRANINPUTHEAD
  async TRANINPUTHEAD() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from TRANINPUTHEAD');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let newObj = new TRANINPUTHEAD();
        newObj['SERIAL_NO'] = ele.SERIAL_NO;
        newObj['SCHEME_TYPE'] = ele.SCHEME_TYPE;
        newObj['FIELD_AMOUNT'] = ele.FIELD_AMOUNT;
        newObj['FIELD_GL'] = ele.FIELD_GL;
        newObj['FIELD_INTEREST_DATE'] = ele.FIELD_INTEREST_DATE;
        newObj['FIELD_TRAN_TABLE'] = ele.FIELD_TRAN_TABLE;
        newObj['GL_CODE'] = ele.GL_CODE == 0 ? null : ele.GL_CODE;
        newObj['GL_CODE_FROM_SCHEME_FIELD'] = ele.GL_CODE_FROM_SCHEME_FIELD;
        newObj['DESCRIPTION'] = ele.DESCRIPTION;
        newObj['SHORT_NAME'] = ele.SHORT_NAME;
        newObj['CHECK_REQUIRE'] = ele.CHECK_REQUIRE == 0 ? '0' : '1';
        newObj['DRCR_APPLICABLE'] = ele.DRCR_APPLICABLE;
        newObj['INTEREST_DATE_INPUT'] = ele.INTEREST_DATE_INPUT == 0 ? '0' : '1';
        newObj['HEAD_TYPE'] = ele.HEAD_TYPE;
        newObj['IS_NOTING_REQUIRED'] = ele.IS_NOTING_REQUIRED == 0 ? '0' : '1';
        newObj['IS_GLBAL_MAINTAIN'] = ele.IS_GLBAL_MAINTAIN == 0 ? '0' : '1';
        await queryRunner.manager.insert(TRANINPUTHEAD, newObj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TRANINPUTHEAD')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PGCOMMISSIONMASTER
  async PGCOMMISSIONMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM PGCOMMISSIONMASTER order by effect_date');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let newObj = new PGCOMMISSIONMASTER();
        newObj['SR_NO'] = ele.SR_NO;
        newObj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
        newObj['SLAB_TYPE'] = ele.SLAB_TYPE;
        newObj['AMOUNT_FROM'] = ele.AMOUNT_FROM == -1 ? '1' : ele.AMOUNT_FROM;
        newObj['AMOUNT_TO'] = ele.AMOUNT_TO;
        newObj['PIGMY_COMMISSION_PERCENTAGE'] = ele.PIGMY_COMMISSION_PERCENTAGE;
        newObj['COMM_AGAINST_LN_PERCENT'] = ele.COMM_AGAINST_LN_PERCENT;
        newObj['AC_ACNOTYPE'] = null;
        newObj['AC_TYPE'] = null;
        newObj['AC_NO'] = null;
        newObj['PG_AC_ACNOTYPE'] = null;
        newObj['PG_AC_TYPE'] = null;
        newObj['PIGMY_SVR_CHARGE_RATE'] = ele.PIGMY_SVR_CHARGE_RATE;
        await queryRunner.manager.save(PGCOMMISSIONMASTER, newObj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PGCOMMISSIONMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //security details forms
  //STOCKSTATEMENT
  async STOCKSTATEMENT() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT STOCKSTATEMENT.*,schemast.S_APPL as actype  FROM STOCKSTATEMENT left join schemast on STOCKSTATEMENT.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_CODE from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.ACTYPE);

        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new STOCKSTATEMENT()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_TYPE'] = schemastData[0].id
          obj['AC_NO'] = BANKACNO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['STATEMENT_DATE'] = ele.STATEMENT_DATE == '' || ele.STATEMENT_DATE == null ? null : moment(ele.STATEMENT_DATE).format('DD/MM/YYYY');
          obj['RAW_MATERIAL'] = ele.RAW_MATERIAL
          obj['WORK_PROGRESS'] = ele.WORK_PROGRESS
          obj['FINISHED_GOODS'] = ele.FINISHED_GOODS
          obj['RAW_MARGIN'] = ele.RAW_MARGIN
          obj['WORK_MARGIN'] = ele.WORK_MARGIN
          obj['FINISHED_MARGIN'] = ele.FINISHED_MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          let insertObj = await queryRunner.manager.insert(STOCKSTATEMENT, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('STOCKSTATEMENT')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //VEHICLE
  async VEHICLE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  VEHICLE.*,schemast.S_APPL as actype from VEHICLE left join schemast on VEHICLE.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_CODE from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE_PATA: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new VEHICLE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['RTO_REG_DATE'] = ele.RTO_REG_DATE == '' || ele.RTO_REG_DATE == null ? null : moment(ele.RTO_REG_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['VEHICLE_MAKE'] = ele?.VEHICLE_MAKE?.replace("\x00", "")
          obj['MANUFACTURE_YEAR'] = ele.MANUFACTURE_YEAR
          obj['VEHICLE_NO'] = ele.VEHICLE_NO
          obj['CHASSIS_NO'] = ele.CHASSIS_NO
          obj['NEW_VEHICLE'] = ele.NEW_VEHICLE
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele?.SUPPLIER_NAME?.replace("\x00", "")
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['REF_ID'] = ele.REF_ID
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(VEHICLE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('vehicle')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PLEDGESTOCK
  async PLEDGESTOCK() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  PLEDGESTOCK.*,schemast.typeid as actype from PLEDGESTOCK left join schemast on PLEDGESTOCK.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new PLEDGESTOCK()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['STORAGE_DATE'] = ele.STORAGE_DATE == '' || ele.STORAGE_DATE == null ? null : moment(ele.STORAGE_DATE).format('DD/MM/YYYY');
          obj['STORAGE_MEMO_NO'] = ele.STORAGE_MEMO_NO
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['GOODS_QTY'] = ele.GOODS_QTY
          obj['MANUF_MILL'] = ele.MANUF_MILL
          obj['DISCRIPTION'] = ele.DISCRIPTION
          obj['BALANCE_QTY'] = ele.BALANCE_QTY
          obj['RATE'] = ele.RATE
          obj['VALUE'] = ele.VALUE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(PLEDGESTOCK, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('pledestock')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PLANTMACHINARY
  async PLANTMACHINARY() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  PLANTMACHINARY.*,schemast.S_APPL as actype from PLANTMACHINARY left join schemast on PLANTMACHINARY.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new PLANTMACHINARY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['MACHINE_NAME'] = ele.MACHINE_NAME
          obj['MACHINE_TYPE'] = ele.MACHINE_TYPE
          obj['DISTINCTIVE_NO'] = ele.DISTINCTIVE_NO
          obj['SPECIFICATION'] = ele.SPECIFICATION
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(PLANTMACHINARY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('plantmachinary')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OWNDEPOSIT
  async OWNDEPOSIT() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  OWNDEPOSIT.*,schemast.s_appl  from OWNDEPOSIT left join schemast on OWNDEPOSIT.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select * from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE_SANGALI: ele.AC_TYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let DEPOACTYPE = await this.SCHEMASTService.find({
            where: {
              AC_TYPE_SANGALI: ele.DEPO_AC_TYPE
            }
          })

          let DEPOacno = Number(ele.DEPO_AC_NO) + 100000

          let acno = Number(ele.AC_NO) + 100000

          // let DEPOacno = String(ele.DEPO_AC_NO).padStart(6, '0');
          // let acno = String(ele.AC_NO).padStart(6, '0');

          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno

          let DEPOBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + DEPOACTYPE[0].S_APPL + DEPOacno

          let obj = new OWNDEPOSIT()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['DEPO_AC_NO'] = DEPOBANKACNO
          obj['DEPO_AC_TYPE'] = DEPOACTYPE[0].id
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
          obj['MATURITY_DATE'] = ele.MATURITY_DATE == '' || ele.MATURITY_DATE == null ? null : moment(ele.MATURITY_DATE).format('DD/MM/YYYY');
          obj['RECEIPT_NO'] = ele.RECEIPT_NO
          obj['DEPOSIT_AMT'] = ele.DEPOSIT_AMT
          obj['REMARK'] = ele.REMARK
          obj['MARGIN'] = ele.MARGIN
          obj['LEDGER_BAL'] = ele.LEDGER_BAL
          obj['IS_LIEN_MARK_CLEAR'] = ele.IS_LIEN_MARK_CLEAR
          obj['BALANCE_OF_LOAN_ACCOUNT'] = ele.BALANCE_OF_LOAN_ACCOUNT
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(OWNDEPOSIT, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('owndeposit')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OTHERSECURITY
  async OTHERSECURITY() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  OTHERSECURITY.*,schemast.S_APPL as actype from OTHERSECURITY left join schemast on OTHERSECURITY.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_CODE from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new OTHERSECURITY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN == null ? 0 : ele.MARGIN
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['SR_NO'] = ele.SR_NO
          obj['SHORT_DETAILS'] = ele.SHORT_DETAILS
          obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
          obj['DETAILS'] = ele.DETAILS
          obj['REF_ID'] = ele.REF_ID
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(OTHERSECURITY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('othersecurity')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //MARKETSHARE
  async MARKETSHARE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  MARKETSHARE.*,schemast.typeid as actype from MARKETSHARE left join schemast on MARKETSHARE.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new MARKETSHARE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['RELEASE_DATE'] = ele.RELEASE_DATE == '' || ele.RELEASE_DATE == null ? null : moment(ele.RELEASE_DATE).format('DD/MM/YYYY');
          obj['CO_CODE'] = ele.CO_CODE
          obj['CO_NAME'] = ele.CO_NAME
          obj['MARKET_VALUE'] = ele.MARKET_VALUE
          obj['SHARES'] = ele.SHARES
          obj['UPDATED_BY'] = ele.UPDATED_BY
          obj['RELEASE_BY'] = ele.RELEASE_BY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(MARKETSHARE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('marketshare')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LANDBUILDING
  async LANDBUILDING() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  LANDBUILDING.*,schemast.S_APPL as actype from LANDBUILDING left join schemast on LANDBUILDING.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_CODE from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE_SANGALI: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new LANDBUILDING()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['CITY_SURVEY_DATE'] = ele.CITY_SURVEY_DATE == '' || ele.CITY_SURVEY_DATE == null ? null : moment(ele.CITY_SURVEY_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['VALUE'] = ele.VALUE
          obj['LOCATION'] = ele.LOCATION?.replace("\x00", "")
          obj['AREA'] = ele?.AREA
          obj['UNIT_AREA'] = ele?.UNIT_AREA?.replace("\x00", "")
          obj['NEW_EQUIPEMENT'] = ele?.NEW_EQUIPEMENT?.replace("\x00", "")
          obj['SUPPLIER_NAME'] = ele?.SUPPLIER_NAME?.replace("\x00", "")
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK?.replace("\x00", "")
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['CITY_SURVEY_NO'] = ele.CITY_SURVEY_NO?.replace("\x00", "")
          obj['REG_NO'] = ele.REG_NO?.replace("\x00", "")
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          // obj['REF_ID'] = ele.REF_ID
          let insertObj = await queryRunner.manager.insert(LANDBUILDING, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('landbuilding')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //GOLDSILVER
  async GOLDSILVER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  GOLDSILVER.*,schemast.s_appl as actype from GOLDSILVER left join schemast on GOLDSILVER.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select * from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE_SANGALI: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          // let acno = String(ele.AC_NO).padStart(6, '0');
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new GOLDSILVER()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SECU_CODE'] = secuCode?.id
          obj['TRAN_STATUS'] = ele.TRAN_STATUS == '' || ele.TRAN_STATUS == 'UP' ? '0' : '1';
          obj['ITEM_TYPE'] = ele.ITEM_TYPE
          obj['TOTAL_WEIGHT_GMS'] = ele.TOTAL_WEIGHT_GMS
          obj['CLEAR_WEIGHT_GMS'] = ele.CLEAR_WEIGHT_GMS
          obj['RATE'] = ele.RATE
          obj['GOLD_BOX_NO'] = ele.GOLD_BOX_NO
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['RETURN_DATE'] = ele.RETURN_DATE == '' || ele.RETURN_DATE == null ? null : moment(ele.RETURN_DATE).format('DD/MM/YYYY');
          obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
          obj['BAG_RECEIPT_NO'] = ele.BAG_RECEIPT_NO
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['MARGIN'] = ele.MARGIN == null || ele.MARGIN == undefined ? 0 : ele.MARGIN
          obj['REMARK'] = ele.REMARK?.replace("\x00", "")
          obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
          obj['NOMINEE'] = ele.NOMINEE
          obj['NOMINEE_RELATION'] = ele.NOMINEE_RELATION
          obj['USER_CODE'] = ele.USER_CODE
          obj['OFFICER_CODE'] = ele.OFFICER_CODE
          obj['ORA_ACNO'] = ele.AC_NO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(GOLDSILVER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('goldsilver')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //FURNITURE
  async FURNITURE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  FURNITURE.*,schemast.typeid as actype from FURNITURE left join schemast on FURNITURE.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new FURNITURE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
          obj['ARTICLE_MAKE'] = ele.ARTICLE_MAKE
          obj['NEW_ARTICLE'] = ele.NEW_ARTICLE
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(FURNITURE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('furniture')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //FIREPOLICY
  async FIREPOLICY() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  FIREPOLICY.*,schemast.s_appl as actype from FIREPOLICY left join schemast on FIREPOLICY.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new FIREPOLICY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['POLICY_NO'] = ele.POLICY_NO
          obj['POLICY_DUE_DATE'] = ele.POLICY_DUE_DATE == '' || ele.POLICY_DUE_DATE == null ? null : moment(ele.POLICY_DUE_DATE).format('DD/MM/YYYY');
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['POLICY_AMT'] = ele.POLICY_AMT
          obj['POLICY_NATURE'] = ele.POLICY_NATURE
          obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
          obj['PREMIUM'] = ele.PREMIUM
          obj['INSU_CO_CODE'] = ele.INSU_CO_CODE
          obj['ADDRESS'] = ele.ADDRESS
          obj['CITY'] = ele.CITY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          let insertObj = await queryRunner.manager.insert(FIREPOLICY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('firepolicy')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async SECINSURANCE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  SECINSURANCE.*,schemast.S_APPL as actype from SECINSURANCE left join schemast on SECINSURANCE.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_CODE from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          // if (ele.SECU_CODE != null) {
          //   for (let eleme of securityData) {
          //     secuCode = (secutityPGData.find(ele => ele['SECU_CODE'] == eleme.SECU_CODE))
          //   }
          // }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new SECINSURANCE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['INSURANCE_DATE'] = ele.INSURANCE_DATE == '' || ele.INSURANCE_DATE == null ? null : moment(ele.INSURANCE_DATE).format('DD/MM/YYYY');
          obj['POLICY_NO'] = ele.POLICY_NO
          obj['INSU_COMPANY_CODE'] = ele.INSU_COMPANY_CODE
          obj['PREMIUM_DUE_DATE'] = ele.INSU_EXP_DATE == '' || ele.INSU_EXP_DATE == null ? null : moment(ele.INSU_EXP_DATE).format('DD/MM/YYYY');
          obj['INSU_AMOUNT'] = ele.INSU_AMOUNT
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = ele.SECU_CODE
          let insertObj = await queryRunner.manager.insert(SECINSURANCE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('secinsurance')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //GOVTSECULIC
  async GOVTSECULIC() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  GOVTSECULIC.*,schemast.S_APPL as actype from GOVTSECULIC left join schemast on GOVTSECULIC.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            AC_TYPE: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new GOVTSECULIC()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = schemastData[0].id
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['CERT_POLICY_DATE'] = ele.CERT_POLICY_DATE == '' || ele.CERT_POLICY_DATE == null ? null : moment(ele.CERT_POLICY_DATE).format('DD/MM/YYYY');
          obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
          obj['MATURE_DUE_DATE'] = ele.MATURE_DUE_DATE == '' || ele.MATURE_DUE_DATE == null ? null : moment(ele.MATURE_DUE_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['CERT_POLICY_NO'] = ele.CERT_POLICY_NO
          obj['ASSURED_NAME'] = ele.ASSURED_NAME
          obj['PAIDUP_AMT'] = ele.PAIDUP_AMT
          obj['SUM_ASSURED'] = ele.SUM_ASSURED
          obj['PREMIUM'] = ele.PREMIUM
          obj['SURRENDER_VALUE'] = ele.SURRENDER_VALUE
          obj['NOMINEE'] = ele.RECOVERY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(GOVTSECULIC, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('govtseculic')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //BOOKDEBTS
  async BOOKDEBTS() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  BOOKDEBTS.*,schemast.typeid as actype from BOOKDEBTS left join schemast on bookdebts.ac_type=schemast.s_appl');
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new BOOKDEBTS()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['AC_NO'] = BANKACNO
          obj['SECU_CODE'] = secuCode?.id
          obj['SR_NO'] = ele.SR_NO
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE
          obj['STATEMENT_DATE'] = ele.STATEMENT_DATE
          obj['DEBTORS_OP_BAL'] = ele.DEBTORS_OP_BAL
          obj['CREDIT_SALE'] = ele.CREDIT_SALE
          obj['RECOVERY'] = ele.RECOVERY
          obj['OVERAGED_DEBTORS'] = ele.OVERAGED_DEBTORS
          obj['CLOSE_BAL'] = ele.CLOSE_BAL
          obj['CRD_OUTSTAND_BAL'] = ele.CRD_OUTSTAND_BAL
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['AC_TYPE'] = ele.ACTYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(BOOKDEBTS, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('bookdebts')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async lengthCheck() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from idmaster where rownum <6 `);
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let newObj = {}
      let namearr = ele.AC_NAME.split(' ');
      newObj['L_NAME'] = namearr[0]
      newObj['F_NAME'] = namearr[1]
      newObj['M_NAME'] = namearr[2]
    }
  }
  //IDMASTER
  async IDMASTERCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        SELECT IDMASTER.*, OCCUPATIONMASTER.CODE AS OCCUPATION, CASTMASTER.CODE AS CASTMASTER ,RISKCATEGORYMASTER.CODE
        AS RISKCATEGORYMASTER FROM IDMASTER LEFT JOIN OCCUPATIONMASTER ON IDMASTER.AC_OCODE=OCCUPATIONMASTER.CODE
        LEFT JOIN CASTMASTER ON IDMASTER.AC_CAST= CASTMASTER.CODE LEFT JOIN RISKCATEGORYMASTER ON IDMASTER.AC_RISKCATG =
        RISKCATEGORYMASTER.CODE WHERE IDMASTER.AC_NO=1156 ORDER BY IDMASTER.AC_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    let data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDIDMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.IDMASTERWITHLIMIT(data);
  }
  //IDMASTER
  async IDMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        SELECT IDMASTER.*, OCCUPATIONMASTER.CODE AS OCCUPATION, CASTMASTER.CODE AS CASTMASTER ,RISKCATEGORYMASTER.CODE AS RISKCATEGORYMASTER FROM IDMASTER LEFT JOIN OCCUPATIONMASTER ON IDMASTER.AC_OCODE=OCCUPATIONMASTER.CODE LEFT JOIN CASTMASTER ON IDMASTER.AC_CAST= CASTMASTER.CODE LEFT JOIN RISKCATEGORYMASTER ON IDMASTER.AC_RISKCATG = RISKCATEGORYMASTER.CODE
        ORDER BY IDMASTER.AC_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    let data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from IDMASTER where AC_NO > 2508`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.IDMASTERWITHLIMIT(data);
  }

  async IDMASTERWITHLIMIT(data) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // let connection = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString1 });
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      // let idmas = await connection.execute(`select * from idmas`)
      // let marathiidmas = await this.jsonConverter(idmas);
      // await connection.close()
      let occupationData = await this.OCCUPATIONMASTERService.find()
      let castData = await this.CASTMASTERService.find()
      let riskCategoryData = await this.RISKCATEGORYMASTERService.find()
      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let ENG_NAME;
      let previousACNO = 0;

      for (let ele of data) {
        let newObj = new IDMASTER();

        let acname = ele.AC_NAME

        if (acname != null) {

          marathiName = unidev(acname, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiName.includes('×')) {
              marathiName = marathiName.replace(/×(.)/g, '$1ि');
            }
            if (marathiName.includes('Ø')) {
              marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiName.includes('Ô')) {

              marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiName = marathiName.replace(/Ô/g, 'र्');
            }
          }

          ENG_NAME = this.translatefullwords(marathiName)

        }

        let title = ele.AC_TITLE
        let marathiTitle
        let ENG_TITLE

        if (title != null) {

          marathiTitle = unidev(title, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiTitle.includes('×')) {
              marathiTitle = marathiTitle.replace(/×(.)/g, '$1ि');
            }
            if (marathiTitle.includes('Ø')) {
              marathiTitle = marathiTitle.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiTitle.includes('Ô')) {

              marathiTitle = marathiTitle.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiTitle = marathiTitle.replace(/Ô/g, 'र्');
            }
          }

          ENG_TITLE = this.translatefullwords(marathiTitle)

        }

        let currentTime = moment().format('DD/MM/YYYY hh:mm A');

        let occpID = null
        if (ele.OCCUPATION != null) {
          let occupation = await connection2.execute(`select CODE from OCCUPATIONMASTER where CODE=${ele.OCCUPATION}`)
          let occData = await this.jsonConverter(occupation);
          for (let eleme of occData) {
            occpID = (occupationData.find(occupationData => occupationData['CODE'] == eleme.CODE))
          }
        }
        let castID = null
        if (ele.CASTMASTER != null) {
          let CASTdATA = await connection2.execute(`select CODE from CASTMASTER where CODE=${ele.CASTMASTER}`)
          let occData = await this.jsonConverter(CASTdATA);
          for (let eleme of occData) {
            castID = (castData.find(castData => castData['CODE'] == eleme.CODE))
          }
        }
        let RISKID = null
        if (ele.RISKCATEGORYMASTER != null) {
          let CASTdATA = await connection2.execute(`select NAME from RISKCATEGORYMASTER where CODE=${ele.RISKCATEGORYMASTER}`)
          let occData = await this.jsonConverter(CASTdATA);
          for (let eleme of occData) {
            RISKID = (riskCategoryData.find(riskCategoryData => riskCategoryData['CODE'] == eleme.CODE))
          }
        }
        let mem_TYPE = null
        if (ele.AC_MEMBTYPE != null) {
          let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
          mem_TYPE = await this.jsonConverter(memTYPE);
        }
        let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000

        // let currentACNO = Number(ele.AC_NO);


        //  if (previousACNO !== 0 && currentACNO - previousACNO > 1) {

        //     for (let i = previousACNO + 1; i < currentACNO; i++) {


        //        let dummy = new IDMASTER();

        //       dummy['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
        //       dummy['AC_MEMBNO'] = AC_MEMBNO;
        //       dummy['AC_NO'] = i;
        //       dummy['AC_TITLE'] = ENG_TITLE;
        //      // let namearr = ENG_NAME.split(' ');
        //       dummy['L_NAME'] = 'a'
        //       dummy['F_NAME'] = 'a'
        //       dummy['M_NAME'] = 'a'
        //       dummy['AC_NAME'] = 'a';
        //       dummy['AC_ADHARNO'] = '0';
        //       dummy['AC_BIRTH_DT'] = '00/00/0000';
        //       dummy['AC_PANNO'] = '0';
        //       dummy['AC_MOBILENO'] = '2';
        //       dummy['AC_PHONE_RES'] = '0';
        //       dummy['AC_PHONE_OFFICE'] = null;
        //       dummy['AC_EMAILID'] = null;
        //       dummy['TDSDOCUMNET'] = '0';
        //       dummy['TDS_REQUIRED'] = '0' ;
        //       dummy['SMS_REQUIRED'] =  '0' ;
        //       dummy['IS_KYC_RECEIVED'] = '0';
        //       dummy['AC_OCODE'] = null;
        //       dummy['AC_RISKCATG'] = null;
        //       dummy['AC_CAST'] = null;
        //       dummy['ORA_AC_NO'] = i;
        //       dummy['ORA_BRANCH'] = this.BRANCH_CODE;
        //       dummy['BRANCH_CODE'] = this.BRANCH_CODE;
        //       //dummy['SYSCHNG_DATETIME'] = currentTime;
        //       //dummy['SYSADD_DATETIME'] = currentTime;
        //       dummy['AC_TITLE_REG'] = null;
        //       // let namearr1 = marathiName.split(' ');
        //       dummy['L_NAME_REG'] = 'a'
        //       dummy['F_NAME_REG'] = 'a'
        //       dummy['M_NAME_REG'] = 'a'
        //       dummy['AC_ADD_REG'] = 'a';
        //       let idmasterData = await queryRunner.manager.save(IDMASTER, dummy);

        //        let dummyaddress = new CUSTOMERADDRESS();

        //       dummyaddress['AC_HONO'] = 'a';
        //       dummyaddress['AC_WARD'] = 'a';
        //       dummyaddress['AC_ADDR'] = 'a';
        //       dummyaddress['AC_GALLI'] = 'a';
        //       dummyaddress['AC_AREA'] = 'a';
        //       dummyaddress['AC_PIN'] = 'a';
        //       dummyaddress['AC_ADDFLAG'] = true;
        //       dummyaddress['idmasterID'] = idmasterData.id;
        //       dummyaddress['AC_ADDTYPE'] = 'P';
        //       dummyaddress['AC_CTCODE'] = 1;
        //       await queryRunner.manager.save(CUSTOMERADDRESS, dummyaddress);
        //     }
        //  }

        newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
        newObj['AC_MEMBNO'] = AC_MEMBNO;
        // newObj['AC_NO'] = ele.AC_NO;
        // newObj['id'] = ele.AC_NO;
        newObj['AC_TITLE'] = ENG_TITLE;
        let namearr = ENG_NAME.split(' ');
        newObj['L_NAME'] = namearr == null ? null : namearr[0]
        newObj['F_NAME'] = namearr == null ? null : namearr[1]
        newObj['M_NAME'] = namearr == null ? null : namearr[2]
        newObj['AC_NAME'] = ENG_NAME;
        newObj['AC_ADHARNO'] = ele.AC_ADHARNO;
        newObj['AC_BIRTH_DT'] = ele.AC_BIRTH_DT == null ? null : moment(ele.AC_BIRTH_DT).format('DD/MM/YYYY');
        newObj['AC_PANNO'] = ele.AC_PANNO;
        newObj['AC_MOBILENO'] = ele.AC_MOBILENO;
        newObj['AC_PHONE_RES'] = ele.AC_PHONE_RES;
        newObj['AC_PHONE_OFFICE'] = ele.AC_PHONE_OFFICE;
        newObj['AC_EMAILID'] = ele.AC_EMAIL;
        newObj['TDSDOCUMNET'] = '0';
        newObj['TDS_REQUIRED'] = ele.TDS_REQUIRED == 0 ? '0' : '1';
        newObj['SMS_REQUIRED'] = ele.SMS_REQUIRED == 0 ? '0' : '1';
        newObj['IS_KYC_RECEIVED'] = ele.IS_KYC_RECEIVED == 0 ? '0' : '1';
        newObj['AC_OCODE'] = occpID == null ? null : occpID.id;
        newObj['AC_RISKCATG'] = RISKID == null ? null : RISKID.id;
        newObj['AC_CAST'] = castID == null ? null : castID.id;
        newObj['ORA_AC_NO'] = ele.AC_NO;
        newObj['ORA_BRANCH'] = this.BRANCH_CODE;
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        //newObj['SYSCHNG_DATETIME'] = currentTime;
        //newObj['SYSADD_DATETIME'] = currentTime;
        newObj['AC_TITLE_REG'] = marathiTitle;
        let namearr1 = marathiName.split(' ');
        newObj['L_NAME_REG'] = namearr1 == null ? null : namearr1[0]
        newObj['F_NAME_REG'] = namearr1 == null ? null : namearr1[1]
        newObj['M_NAME_REG'] = namearr1 == null ? null : namearr1[2]
        // newObj['AC_ADD_REG'] = marathiName;
        let idmasterData = await queryRunner.manager.save(IDMASTER, newObj);


        let AC_ADDR1 = ele.AC_ADDR1
        let marathiAC_ADDR1
        let ENG_AC_ADDR1

        if (AC_ADDR1 != null) {

          marathiAC_ADDR1 = unidev(AC_ADDR1, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiAC_ADDR1.includes('×')) {
              marathiAC_ADDR1 = marathiAC_ADDR1.replace(/×(.)/g, '$1ि');
            }
            if (marathiAC_ADDR1.includes('Ø')) {
              marathiAC_ADDR1 = marathiAC_ADDR1.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiAC_ADDR1.includes('Ô')) {

              marathiAC_ADDR1 = marathiAC_ADDR1.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiAC_ADDR1 = marathiAC_ADDR1.replace(/Ô/g, 'र्');
            }
          }

          ENG_AC_ADDR1 = this.translatefullwords(marathiAC_ADDR1)

        }


        let AC_ADDR2 = ele.AC_ADDR2
        let marathiAC_ADDR2
        let ENG_AC_ADDR2

        if (AC_ADDR2 != null) {

          marathiAC_ADDR2 = unidev(AC_ADDR2, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiAC_ADDR2.includes('×')) {
              marathiAC_ADDR2 = marathiAC_ADDR2.replace(/×(.)/g, '$1ि');
            }
            if (marathiAC_ADDR2.includes('Ø')) {
              marathiAC_ADDR2 = marathiAC_ADDR2.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiAC_ADDR2.includes('Ô')) {

              marathiAC_ADDR2 = marathiAC_ADDR2.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiAC_ADDR2 = marathiAC_ADDR2.replace(/Ô/g, 'र्');
            }
          }

          ENG_AC_ADDR2 = this.translatefullwords(marathiAC_ADDR2)

        }


        let AC_ADDR3 = ele.AC_ADDR3
        let marathiAC_ADDR3
        let ENG_AC_ADDR3

        if (AC_ADDR3 != null) {

          marathiAC_ADDR3 = unidev(AC_ADDR3, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiAC_ADDR3.includes('×')) {
              marathiAC_ADDR3 = marathiAC_ADDR3.replace(/×(.)/g, '$1ि');
            }
            if (marathiAC_ADDR3.includes('Ø')) {
              marathiAC_ADDR3 = marathiAC_ADDR3.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiAC_ADDR3.includes('Ô')) {

              marathiAC_ADDR3 = marathiAC_ADDR3.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiAC_ADDR3 = marathiAC_ADDR3.replace(/Ô/g, 'र्');
            }
          }

          ENG_AC_ADDR3 = this.translatefullwords(marathiAC_ADDR3)

        }


        //customer address
        let address = new CUSTOMERADDRESS();

        // address['AC_HONO'] = ele.AC_HONO == 0 || ele.AC_HONO == undefined ? null : ele.AC_HONO;
        address['AC_HONO'] = ENG_AC_ADDR1
        // address['AC_WARD'] = ele.AC_WARD == undefined ? null : ele.AC_WARD;
        address['AC_WARD'] = ENG_AC_ADDR2
        // address['AC_ADDR'] = ele.AC_ENG_ADD1;
        address['AC_ADDR'] = ENG_AC_ADDR3

        address['AC_GALLI'] = ele.AC_GALLI == undefined ? null : ele.AC_GALLI;
        // address['AC_AREA'] = ele.AC_ENG_ADD2 == undefined ? null : ele.AC_ENG_ADD2;
        address['AC_PIN'] = ele.AC_PIN == 0 ? null : ele.AC_PIN;
        address['AC_ADDFLAG'] = true;
        address['idmasterID'] = idmasterData.id;
        address['AC_ADDTYPE'] = 'P';
        address['AC_CTCODE'] = ele.AC_CTCODE == 9999 ? 10 : ele.AC_CTCODE;
        address['ORA_AC_NO'] = ele.AC_NO;
        await queryRunner.manager.save(CUSTOMERADDRESS, address);
        //previousACNO = currentACNO;
        console.log('currentACNO:', ele.AC_NO)
      }
      await connection2.close()
      if (this.offset <= this.count && this.flag == 0) {
        this.offset = this.offset + 1000;
        await queryRunner.commitTransaction();
        await this.IDMASTER()
      }
      else if (this.flag == 1) {
        console.log('IDMASTER');
        this.offset = 0
        this.flag = 0
      }
      else if (this.flag == 0 && this.offset != 0) {
        this.offset = this.offset + 1000;
        this.flag = 1
        await queryRunner.commitTransaction();
        await this.IDMASTER()
      }

    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //IDMASTER - CUSTOMERADDRESS
  async CUSTOMERADDRESS() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from CUSTOMERADDRESS');

      let data = await this.jsonConverter(result);
      data.forEach(async ele => {
        let newObj = new CUSTOMERADDRESS();
        newObj['AC_HONO'] = ele.AC_HONO;
        newObj['AC_WARD'] = ele.AC_WARD;
        newObj['AC_ADDR'] = ele.AC_ADDR;
        newObj['AC_GALLI'] = ele.AC_GALLI;
        newObj['AC_AREA'] = ele.AC_AREA;
        //newObj['AC_PIN'] = ele.AC_PIN;
        newObj['AC_ADDFLAG'] = ele.AC_ADDFLAG;
        newObj['idmasterID'] = ele.IDMASTERID;
        newObj['AC_ADDTYPE'] = ele.AC_ADDTYPE;
        newObj['AC_CTCODE'] = ele.AC_CTCODE;

        await queryRunner.manager.save(CUSTOMERADDRESS, newObj);
      })
      await queryRunner.commitTransaction();
      console.log('Completed CUSTOMERADDRESS')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //nomineelink
  async nomineelink(table, acnotype, ac_type, ac_no, id, BANKACNO) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT nomineelink.AC_NNAME AS AC_NNAME,
        nomineelink .AC_NRELA as AC_NRELA, nomineelink.AC_NDATE as AC_NDATE, nomineelink.AGE as AGE,addr1 as AC_NADDR, nomineelink.addr2 as AC_NGALLI, nomineelink.addr3 as AC_NAREA,nomineelink.pin as AC_NPIN, nomineelink.ctcode as AC_CTCODE,
    nomineelink .ac_no,nomineelink .ac_type,nomineelink .REF_ID  FROM nomineelink  where nomineelink.ac_acnotype = '${acnotype}' and ac_type = ${ac_type} and ac_no = ${ac_no}  ORDER BY nomineelink.ac_no`)

      let data = await this.jsonConverter(result);
      for (let element of data) {
        //city find
        let city = await connection2.execute(`select CITY_CODE from CITYMASTER where CITY_CODE=${element.AC_CTCODE}`)
        let CITYMASTER = await this.jsonConverter(city);
        let CITYID
        for (let eleme of CITYMASTER) {
          CITYID = (this.PostCitymaster.find(cityData => cityData['CITY_CODE'] == eleme.CITY_CODE))
        }
        let nominee = new NOMINEELINK();

        nominee['REF_ID'] = element.REF_ID
        nominee['ORA_AC_NAME'] = element.AC_NNAME
        nominee['AC_NNAME'] = element?.AC_NNAME?.replace("\x00", "");
        nominee['AC_NRELA'] = element?.AC_NRELA?.replace("\x00", "");
        nominee['AC_NDATE'] = element.AC_NDATE == '' || element.AC_NDATE == null ? null : moment(element.AC_NDATE).format('DD/MM/YYYY');
        nominee['AGE'] = element.AGE;
        nominee['AC_NADDR'] = element?.AC_NADDR?.replace("\x00", "");
        nominee['AC_NGALLI'] = element?.AC_NGALLI?.replace("\x00", "");
        nominee['AC_NAREA'] = element?.AC_NAREA?.replace("\x00", "");
        nominee['AC_NCTCODE'] = CITYID?.id;
        nominee['AC_NPIN'] = element.AC_NPIN;
        nominee['AC_TYPE'] = element.AC_TYPE
        nominee['AC_NO'] = element.AC_NO
        nominee['BANKACNO'] = BANKACNO
        nominee['BRANCH_CODE'] = this.BRANCH_CODE

        if (table == 'SHMASTER') {
          nominee['sharesID'] = id;
        }
        else if (table == 'DPMASTER') {
          nominee['DPMasterID'] = id;
        }
        else if (table == 'PGMASTER') {
          nominee['pigmyAID'] = id;
        }
        let nom = await queryRunner.manager.insert(NOMINEELINK, nominee);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //atteroney
  async atteroney(table, acnotype, ac_type, ac_no, id) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT ATTERONEYLINK.ATTERONEY_NAME AS ATTERONEY_NAME,
    ATTERONEYLINK.DATE_APPOINTED as DATE_APPOINTED,
    ATTERONEYLINK.DATE_EXPIRY as DATE_EXPIRY,
       ATTERONEYLINK.ac_no FROM ATTERONEYLINK 
     where ATTERONEYLINK.ac_acnotype = '${acnotype}' and ac_type = ${ac_type} and ac_no = ${ac_no}
     ORDER BY ATTERONEYLINK.ac_no`)

      let data = await this.jsonConverter(result);
      for (let element of data) {
        let attorney = new ATTERONEYLINK();

        attorney['ORA_AC_NAME'] = element.ATTERONEY_NAME;
        //  attorney['REF_ID'] = element.REF_ID;
        //attorney['OID'] = element.ID
        attorney['ATTERONEY_NAME'] = element.ATTERONEY_NAME;
        attorney['DATE_APPOINTED'] = element.DATE_APPOINTED == '' || element.DATE_APPOINTED == null ? null : moment(element.DATE_APPOINTED).format('DD/MM/YYYY');
        attorney['DATE_EXPIRY'] = element.DATE_EXPIRY == '' || element.DATE_EXPIRY == null ? null : moment(element.DATE_EXPIRY).format('DD/MM/YYYY');
        if (table == 'DPMASTER') {
          attorney['DPMasterID'] = id;
        }
        else if (table == 'PGMASTER') {
          attorney['PGMasterID'] = id;
        }
        attorney['BRANCH_CODE'] = this.BRANCH_CODE
        let nom = await queryRunner.manager.insert(ATTERONEYLINK, attorney);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //joint
  async jointAc(table, acnotype, ac_type, ac_no, id, BANKACNO) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      // let result = await connection2.execute(`SELECT VWALLMASTER.ac_custid, idmaster.ac_name,VWALLMASTER.ac_no, VWALLMASTER.ac_type  FROM VWALLMASTER inner join idmaster on idmaster.ac_no=vwallmaster.ac_custid WHERE VWALLMASTER.ac_acnotype =
      // '${acnotype}' and VWALLMASTER.ac_type =  ${ac_type} and VWALLMASTER.ac_no =  ${ac_no}`)

      let result = await connection2.execute(`SELECT * FROM JointAcLink  
        where JointAcLink.ac_acnotype = '${acnotype}' and ac_type =  ${ac_type} and ac_no =  ${ac_no}  ORDER BY JointAcLink.ac_no`)
      let data = await this.jsonConverter(result);
      for (let element of data) {
        let joint = new JointAcLink();
        //  joint['REF_ID'] = element.REF_ID;
        joint['ORA_AC_NAME'] = element.JOINT_ACNAME;
        joint['JOINT_AC_CUSTID'] = element.AC_CUSTID;
        joint['JOINT_ACNAME'] = element.JOINT_ACNAME;
        joint['AC_TYPE'] = element.AC_TYPE
        joint['AC_NO'] = element.AC_NO
        joint['BANKACNO'] = BANKACNO
        joint['BRANCH_CODE'] = this.BRANCH_CODE
        if (element.OPERATOR == 0) {
          joint['OPERATOR'] = 'No';
        }
        else {
          joint['OPERATOR'] = 'Yes';
        }
        if (table == 'DPMASTER') {
          joint['DPMasterID'] = id;
        }
        else if (table == 'PGMASTER') {
          joint['PGMasterID'] = id;
        }
        await queryRunner.manager.insert(JointAcLink, joint);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //TDSFORMSUBMIT
  async TDSFORMSUBMIT() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from TDSFORMSUBMIT');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let custid = (this.Postidmaster.find(acmasterData => acmasterData['ORA_AC_NO'] == ele.AC_CUSTID && acmasterData['ORA_BRANCH'] == this.BRANCH_CODE))
        let newObj = new TDSFORMSUBMIT();
        newObj['FIN_YEAR'] = ele.FIN_YEAR
        newObj['SUBMIT_DATE'] = ele.SUBMIT_DATE == '' || ele.SUBMIT_DATE == null ? '' : moment(ele.SUBMIT_DATE).format('DD/MM/YYYY');
        newObj['FORM_TYPE'] = ele.FORM_TYPE
        newObj['TDS_RATE'] = ele.TDS_RATE
        newObj['TDS_LIMIT'] = ele.TDS_LIMIT
        newObj['IS_EXEMPT_TDS'] = ele.IS_EXEMPT_TDS
        newObj['idmasterID'] = custid.id
        await queryRunner.manager.save(TDSFORMSUBMIT, newObj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TDSFORMSUBMIT')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }


  async lnmasterread() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from LNMASTER where rownum<=1 ');
    let data = await this.jsonConverter(result);
    data.forEach(async ele => {
      let guaranterdetails = await connection2.execute(`SELECT GUARANTERDETAILS .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  GUARANTERDETAILS left join schemast on GUARANTERDETAILS.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON GUARANTERDETAILS.AC_NO=LNMASTER.AC_NO where GUARANTERDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND GUARANTERDETAILS.AC_TYPE = ${ele.AC_TYPE} AND GUARANTERDETAILS.AC_NO = ${ele.AC_NO}`)
      let guaranterdetail = await this.jsonConverter(guaranterdetails);
      console.log(guaranterdetail, 'guaran')
      let securitydetails = await connection2.execute(`SELECT SECURITYDETAILS .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  SECURITYDETAILS left join schemast on securitydetails.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON SECURITYDETAILS.AC_NO=LNMASTER.AC_NO where SECURITYDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND SECURITYDETAILS.AC_TYPE = ${ele.AC_TYPE} AND SECURITYDETAILS.AC_NO = ${ele.AC_NO}`)
      let security = await this.jsonConverter(securitydetails);
      console.log(security, 'security')
      let coborrowerDeatils = await connection2.execute(`SELECT COBORROWER .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  COBORROWER left join schemast on COBORROWER.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON COBORROWER.AC_NO=LNMASTER.AC_NO where COBORROWER.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND COBORROWER.AC_TYPE = ${ele.AC_TYPE} AND COBORROWER.AC_NO = ${ele.AC_NO}`)
      // SELECT COBORROWER.*, schemast.typeid as ACTYPE, lnmaster.B_ACNO  from  COBORROWER left join schemast on COBORROWER.ac_type = schemast.s_appl left JOIN LNMASTER ON COBORROWER.AC_NO = LNMASTER.AC_NO where COBORROWER.AC_ACNOTYPE = 'CC' AND COBORROWER.AC_TYPE = 80200 AND COBORROWER.AC_NO = 490002
      let coborrower = await this.jsonConverter(coborrowerDeatils);
      console.log(coborrower, 'coborrower')
    })
  }

  //instruction
  //SPECIALINSTRUCTION
  async SPECIALINSTRUCTION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select  SPECIALINSTRUCTION.*,schemast.S_APPL as actype from SPECIALINSTRUCTION left join schemast on SPECIALINSTRUCTION.tran_actype=schemast.s_appl order by instruction_date');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        if (ele.ACTYPE == null) {
          continue;
        }
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == ele.ACTYPE);

        let lockerSchemeData = null
        lockerSchemeData = await this.SCHEMASTService.find({
          where: {
            AJARA_ACTYPE: (ele.ACTYPE)
          }
        })
        let BANKACNO = null
        if (lockerSchemeData.length != 0) {
          // let TDACNO = Number(ele.TRAN_ACNO) + 100000
          let TDACNO = String(ele.TRAN_ACNO).padStart(6, '0');
          BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
        }
        let obj = new SPECIALINSTRUCTION()
        obj['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_ACTYPE'] = schemastData[0].id
        obj['DRCR_APPLY'] = ele.DRCR_APPLY
        obj['DETAILS'] = ele.DETAILS
        obj['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        obj['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.TO_DATE).format('DD/MM/YYYY');
        obj['IS_RESTRICT'] = ele.IS_RESTRICT == 0 ? '0' : '1'
        obj['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        await queryRunner.manager.save(SPECIALINSTRUCTION, obj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SPECIALINSTRUCTION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //TODTRAN
  async TODTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select TODTRAN.*, SCHEMAST.S_APPL AS ACTYPE from TODTRAN LEFT JOIN SCHEMAST ON TODTRAN.AC_TYPE= SCHEMAST.S_APPL');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        if (ele.ACTYPE == null) {
          continue;
        }
        let lockerSchemeData = null
        lockerSchemeData = await this.SCHEMASTService.find({
          where: {
            AJARA_ACTYPE: (ele.ACTYPE)
          }
        })
        let BANKACNO = null
        if (lockerSchemeData.length != 0) {
          // let TDACNO = Number(ele.AC_NO) + 100000
          let TDACNO = String(ele.AC_NO).padStart(6, '0');
          BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
        }
        let obj = new TODTRAN()
        obj['AC_TYPE'] = lockerSchemeData[0].id
        obj['AC_NO'] = BANKACNO
        obj['RELEASE_DATE'] = ele.RELEASE_DATE == '' || ele.RELEASE_DATE == null ? null : moment(ele.RELEASE_DATE).format('DD/MM/YYYY');
        if (ele.TOD_TYPE == 'TOD') {
          obj['AC_ODAMT'] = ele.TOD_AMOUNT
        }
        else {
          obj['AC_SODAMT'] = ele.TOD_AMOUNT
          obj['AC_ODDAYS'] = ele.TOD_DAYS
          obj['AC_ODDATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY');
        }
        await queryRunner.manager.save(TODTRAN, obj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TODTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //STANDINSTRUCTION
  async STANDINSTRUCTION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from STANDINSTRUCTION order by instruction_date');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let CR_ACTYPE = null
        if (ele.CR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.CR_ACTYPE}`)
          CR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let DR_ACTYPE = null
        if (ele.DR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.DR_ACTYPE}`)
          DR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let drschemastData = DR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            AC_TYPE_SANGALI: DR_ACTYPE[0].S_APPL
          }
        }) : null
        let crschemastData = CR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            AC_TYPE_SANGALI: CR_ACTYPE[0].S_APPL
          }
        }) : null
        let drAC_NO = Number(ele.DR_AC_NO) + 100000
        let crAC_NO = Number(ele.CR_AC_NO) + 100000
        let drBANKACNO = DR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + drschemastData[0].S_APPL + drAC_NO : null
        let crBANKACNO = CR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + crschemastData[0].S_APPL + crAC_NO : null
        let interestIns = new STANDINSTRUCTION()
        interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        interestIns['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
        // Month Begin =MB , Month End = ME, Specific Day = day		
        // if (ele.EXECUTION_DAY == 'MB')
        //   interestIns['EXECUTION_DAY'] = 'Month Begin'
        // else if (ele.EXECUTION_DAY == 'ME')
        //   interestIns['EXECUTION_DAY'] = 'Month End'
        // else if (ele.EXECUTION_DAY == 'day')
        //   interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
        interestIns['EXECUTION_DAY'] = ele.EXECUTION_DAY
        interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
        interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : drBANKACNO
        interestIns['DAYS'] = ele.SI_PERIOD
        interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
        interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
        interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : crBANKACNO
        interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
        interestIns['SI_FREQUENCY'] = ele.SI_FREQUENCY
        // M = MONTHLY / Q=QUARTERLY / H=HALF YEARLY / Y=YEARLY
        if (ele.SI_FREQUENCY == 'M')
          interestIns['SI_FREQUENCY'] = 'M'
        else if (ele.SI_FREQUENCY == 'Q')
          interestIns['SI_FREQUENCY'] = 'Q'
        else if (ele.SI_FREQUENCY == 'H')
          interestIns['SI_FREQUENCY'] = 'H'
        else
          interestIns['SI_FREQUENCY'] = 'F'
        interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
        interestIns['MIN_BAL'] = ele.MIN_BAL
        interestIns['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
        interestIns['PAYINT_AMOUNT'] = ele.PAYINT_AMOUNT
        interestIns['IS_AUTO_CUT_LNPGCOM'] = ele.IS_AUTO_CUT_LNPGCOM
        interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        interestIns['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.save(STANDINSTRUCTION, interestIns);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('STANDINSTRUCTION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //INTINSTRUCTION
  async INTINSTRUCTION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from INTINSTRUCTION order by instruction_date');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let CR_ACTYPE = null
        if (ele.CR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select * from schemast where S_APPL=${ele.CR_ACTYPE}`)
          CR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let DR_ACTYPE = null
        if (ele.DR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select * from schemast where S_APPL=${ele.DR_ACTYPE}`)
          DR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let drschemastData = DR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            AC_TYPE_PATA: DR_ACTYPE[0].S_APPL
          }
        }) : null
        let crschemastData = CR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            AC_TYPE_PATA: CR_ACTYPE[0].S_APPL
          }
        }) : null
        let drAC_NO = Number(ele.DR_AC_NO) + 100000
        let crAC_NO = Number(ele.CR_AC_NO) + 100000
        // let drAC_NO = String(ele.DR_AC_NO).padStart(6, '0');
        // let crAC_NO = String(ele.CR_AC_NO).padStart(6, '0');

        let drBANKACNO = DR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + drschemastData[0].S_APPL + drAC_NO : null
        let crBANKACNO = CR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + crschemastData[0].S_APPL + crAC_NO : null
        let interestIns = new INTINSTRUCTION()
        interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        interestIns['NEXT_EXE_DATE'] = ele.NEXT_EXE_DATE == '' || ele.NEXT_EXE_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
        // if (ele.EXECUTION_DAY == 'MB')
        //   interestIns['EXECUTION_DAY'] = 'Month Begin'
        // else if (ele.EXECUTION_DAY == 'ME')
        //   interestIns['EXECUTION_DAY'] = 'Month End'
        // else if (ele.EXECUTION_DAY == 'day')
        //   interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
        interestIns['EXECUTION_DAY'] = ele.EXECUTION_DAY
        interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : drschemastData[0].id
        interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : crschemastData[0].id
        interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : drBANKACNO
        interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : crBANKACNO
        // interestIns['DAYS'] = ele.SI_PERIOD
        interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
        interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
        if (ele.SI_FREQUENCY == 'M')
          interestIns['SI_FREQUENCY'] = 'M'
        else if (ele.SI_FREQUENCY == 'Q')
          interestIns['SI_FREQUENCY'] = 'Q'
        else if (ele.SI_FREQUENCY == 'H')
          interestIns['SI_FREQUENCY'] = 'H'
        else
          interestIns['SI_FREQUENCY'] = 'F'
        interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
        interestIns['TRAN_TYPE'] = ele.TRAN_TYPE == 'TR' ? 'Transfer' : 'Cash'
        interestIns['ADV_NARRATION'] = ele.ADV_NARRATION
        // interestIns['DEFAULT_INTEREST_APPLICABLE'] = ele.DEFAULT_INTEREST_APPLICABLE
        interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        interestIns['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.save(INTINSTRUCTION, interestIns);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('intinstruction')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //defination
  //interest rate for term deposit
  //INTRATETD grid table:TERMINTRATE
  async intrateTD() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      //let result = await connection2.execute(`select distinct intratetd.ACNOTYPE,intratetd.INT_CATEGORY,intratetd.EFFECT_DATE,intratetd.actype, schemast.typeid as ac_type  from INTRATETD left join schemast on intratetd.actype=schemast.s_appl order by intratetd.effect_date asc`)
      let result = await connection2.execute(`select * from INTRATETD order by intratetd.effect_date asc`)
      let data = await this.jsonConverter(result);

      let pgData = await this.intRateTDRepository.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let intCategory = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
          let int_category = await this.jsonConverter(intCategory);
          let int_cat
          int_category.forEach(eleme => {
            int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['NAME'] == eleme.NAME))
          })
          let InterestRate = new INTRATETD()
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          InterestRate['ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
          //InterestRate['INT_CATEGORY'] = int_cat.id
          InterestRate['INT_CATEGORY'] = ele.INT_CATEGORY
          InterestRate['TYPE'] = ele.ACNOTYPE
          InterestRate['EFFECT_DATE'] = effectDate;
          let tdRate = await queryRunner.manager.save(INTRATETD, InterestRate);
          //GRID QUERY
          let result1
          if (ele.ACTYPE == null) {
            result1 = await connection2.execute(`select * FROM INTRATETD WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
          }
          else {
            result1 = await connection2.execute(`select * FROM INTRATETD WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND ACTYPE=${ele.ACTYPE}`)
          }
          // select * FROM INTRATETD WHERE ACNOTYPE='TD' AND INT_CATEGORY=2 AND EFFECT_DATE=TO_DATE('01/10/2016','DD/MM/YYYY') AND ACTYPE=20100)
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new TERMINTRATE();
            newRate['FROM_DAYS'] = element.FROM_DAYS;
            newRate['FROM_MONTHS'] = element.FROM_MONTHS;
            newRate['TO_DAYS'] = element.TO_DAYS;
            newRate['TO_MONTHS'] = element.TO_MONTHS;
            newRate['INT_RATE'] = element.INT_RATE;
            newRate['PENAL_INT_RATE'] = element.PENAL_INT_RATE;
            newRate['idRateID'] = tdRate.id;
            await queryRunner.manager.insert(TERMINTRATE, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INTRATETD')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //interest rate for deposit interest rate 
  //INTRATETDMULTI grid table:INTMULTI
  async INTRATETDMULTI() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select distinct INTRATETDMULTI.INT_CATEGORY,INTRATETDMULTI.ac_type, schemast.typeid as actype from INTRATETDMULTI left join schemast on INTRATETDMULTI.ac_type=schemast.s_appl`)
      let data = await this.jsonConverter(result);
      let pgData = await this.intRateTDRepository.find()
      for (let ele of data) {
        if (pgData.some(date => date['ACNOTYPE'] == ele.ACNOTYPE && date['INT_CATEGORY'] == ele.INT_CATEGORY)) {
        }
        else {
          let InterestRate = new INTRATETDMULTI()
          InterestRate['ACNOTYPE'] = Number(ele.ACTYPE)
          InterestRate['INT_CATEGORY'] = Number(ele.INT_CATEGORY)
          let tdRate = await queryRunner.manager.save(INTRATETDMULTI, InterestRate);
          //GRID QUERY
          let result1 = await connection2.execute(`select * FROM INTRATETDMULTI WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND ACTYPE=${ele.ACTYPE}`)
          // select * FROM INTRATETDMULTI WHERE ACNOTYPE='TD' AND INT_CATEGORY=1 AND ACTYPE=20100
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new INTMULTI();
            let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
            newRate['EFFECT_DATE'] = effectDate;
            newRate['INT_RATE'] = element.INT_RATE;
            newRate['idRateID'] = tdRate.id;
            await queryRunner.manager.insert(INTMULTI, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INTRATETDMULTI')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //DEPRICIATION RATE MASTER
  //DEPRCATEGORY
  async DEPRRATE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from deprrate');
      let data = await this.jsonConverter(result);
      let pgData = await this.DEPRRATEService.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let newObj = new DEPRRATE();
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          newObj['EFFECT_DATE'] = effectDate;
          newObj['CATEGORY'] = ele.CATEGORY;
          newObj['DEPR_RATE'] = ele.DEPR_RATE;
          await queryRunner.manager.insert(DEPRRATE, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('DEPRRATE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //interest rate for loan anc cc
  // intrateloan-lnccloan
  async INTRATELOAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      //let result = await connection2.execute(`select distinct intrateLOAN.ACNOTYPE,intrateLOAN.INT_CATEGORY,intrateLOAN.EFFECT_DATE,intrateLOAN.actype, schemast.S_APPL as ac_type  from INTRATELOAN left join schemast on intrateLOAN.actype=schemast.s_appl order by intrateLOAN.effect_date asc`)
      let result = await connection2.execute(`select * from INTRATELOAN order by effect_date asc`)
      let data = await this.jsonConverter(result);
      let pgData = await this.INTRATELOANService.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let intCategory = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
          let int_category = await this.jsonConverter(intCategory);
          let int_cat
          int_category.forEach(eleme => {
            int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['CODE'] == eleme.CODE))
          })
          let InterestRate = new INTRATELOAN()
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          InterestRate['ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
          InterestRate['INT_CATEGORY'] = int_cat.id
          // InterestRate['INT_CATEGORY'] = Number(ele.INT_CATEGORY)
          InterestRate['EFFECT_DATE'] = effectDate;
          let rate = await queryRunner.manager.save(INTRATELOAN, InterestRate);
          //GRID QUERY
          let result1
          if (ele.ACTYPE != null) {
            result1 = await connection2.execute(`select * FROM INTRATELOAN WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YY')  AND ACTYPE=${ele.ACTYPE}`)
          }
          else {
            result1 = await connection2.execute(`select * FROM INTRATELOAN WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YY')`)
          }
          // select * FROM INTRATETD WHERE ACNOTYPE='TD' AND INT_CATEGORY=2 AND EFFECT_DATE=TO_DATE('01/10/2016','DD/MM/YYYY' AND ACTYPE=20100)
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new LNCCLOAN();
            newRate['FROM_AMOUNT'] = element.FROM_AMOUNT;
            newRate['TO_AMOUNT'] = element.TO_AMOUNT;
            newRate['INT_RATE'] = element.INT_RATE;
            newRate['PENAL_INT_RATE'] = element.PENAL_INT_RATE;
            newRate['idRateID'] = rate.id;
            await queryRunner.manager.insert(LNCCLOAN, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INTRATELOAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //pat scheme intrest rate
  //INTRATEPATSCHEMES-intrate
  async INTRATEPATSCHEMES() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select * from INTRATEPATSCHEMES order by effect_date asc`)
      let data = await this.jsonConverter(result);
      let pgData = await this.INTRATEPATSCHEMESService.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let intCategory = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
          let int_category = await this.jsonConverter(intCategory);
          let int_cat
          int_category.forEach(eleme => {
            int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['CODE'] == eleme.CODE))
          })
          let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.AC_TYPE);

          let InterestRate = new INTRATEPATSCHEMES()
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          InterestRate['AC_TYPE'] = schemastData[0].id
          InterestRate['INT_CATEGORY'] = int_cat.id
          InterestRate['EFFECT_DATE'] = effectDate;
          let tdRate = await queryRunner.manager.save(INTRATEPATSCHEMES, InterestRate);
          //GRID QUERY
          let result1
          if (ele.AC_TYPE == null) {
            result1 = await connection2.execute(`select * FROM INTRATEPATSCHEMES WHERE INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
          }
          else {
            result1 = await connection2.execute(`select * FROM INTRATEPATSCHEMES WHERE ac_type='${ele.AC_TYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
          }
          // select * FROM INTRATEPATSCHEMES WHERE ac_type='20200' AND INT_CATEGORY=1 AND EFFECT_DATE=TO_DATE('01/01/2001','DD/MM/YYYY')
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new INTRATE();
            newRate['MONTHS'] = element.MONTHS;
            newRate['DAYS'] = element.DAYS;
            newRate['INT_RATE'] = element.INT_RATE;
            newRate['idRateID'] = tdRate.id;
            await queryRunner.manager.insert(INTRATE, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INTRATEPATSCHEMES')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //prmature pigmy less int rate
  //PREMATULESSRATE:prematuless
  async PREMATULESSRATE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select distinct PREMATULESSRATE.EFFECT_DATE,PREMATULESSRATE.actype, schemast.S_APPL as ac_type  from PREMATULESSRATE left join schemast on PREMATULESSRATE.actype=schemast.s_appl order by PREMATULESSRATE.effect_date asc`)
      let data = await this.jsonConverter(result);
      let pgData = await this.PREMATULESSRATEService.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let InterestRate = new PREMATULESSRATE()
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          InterestRate['AC_ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
          InterestRate['EFFECT_DATE'] = effectDate;
          let tdRate = await queryRunner.manager.save(PREMATULESSRATE, InterestRate);
          //GRID QUERY
          let result1
          if (ele.ACTYPE == null) {
            result1 = await connection2.execute(`select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY') `)
          }
          else {
            result1 = await connection2.execute(`select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND ACTYPE=${ele.ACTYPE}`)
          }

          // select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('01/01/2000','DD/MM/YYYY')  AND ACTYPE=30500
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new PREMATULESS();
            newRate['FROM_MONTHS'] = element.FROM_MONTHS;
            newRate['TO_MONTHS'] = element.TO_MONTHS;
            newRate['LESS_INT_RATE'] = element.LESS_INT_RATE;
            newRate['idRateID'] = tdRate.id;
            await queryRunner.manager.insert(PREMATULESS, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('PREMATULESSRATE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //saving and pigmy interest rate
  //INTRATESBPG
  async INTRATESBPG() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      //let result = await connection2.execute('select INTRATESBPG.*, schemast.S_APPL as AC_TYPE from INTRATESBPG left join schemast on schemast.s_appl= intratesbpg.actype');
      let result = await connection2.execute('select * from INTRATESBPG ');
      let data = await this.jsonConverter(result);
      let pgData = await this.INTRATESBPGService.find()
      for (let ele of data) {
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE_PATA'] == ele.AC_TYPE);

        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let intCategory = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
          let int_category = await this.jsonConverter(intCategory);
          let int_cat
          int_category.forEach(eleme => {
            int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['CODE'] == eleme.CODE))
          })
          let newObj = new INTRATESBPG();
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          newObj['EFFECT_DATE'] = effectDate;
          newObj['INT_RATE'] = ele.INT_RATE;
          //newObj['ACNOTYPE'] = schemastData[0].id
          newObj['ACNOTYPE'] = 1
          newObj['TYPE'] = ele.ACNOTYPE;
          newObj['INT_CATEGORY'] = int_cat.id;
          await queryRunner.manager.insert(INTRATESBPG, newObj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('INTRATESBPG')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //security code
  //securitymaster
  async SECURITYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM SECURITYMASTER WHERE SECU_CODE > 8 order by SECU_CODE');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let security = new SECURITYMASTER()
        security['SECU_NAME'] = ele.SECU_NAME.replace("\x00", "")
        security['MARGIN'] = ele.MARGIN
        security['FIRE_POLICY'] = ele.FIRE_POLICY == 0 ? 0 : 1
        security['MARKET_SHARE'] = ele.MARKET_SHARE == 0 ? 0 : 1
        security['BOOK_DEBTS'] = ele.BOOK_DEBTS == 0 ? 0 : 1
        security['PLEDGE_STOCK'] = ele.PLEDGE_STOCK == 0 ? 0 : 1
        security['STOCK_STATEMENT'] = ele.STOCK_STATEMENT == 0 ? 0 : 1
        security['GOVT_SECU_LIC'] = ele.GOVT_SECU_LIC == 0 ? 0 : 1
        security['PLANT_MACHINARY'] = ele.PLANT_MACHINARY == 0 ? 0 : 1
        security['FURNITURE_FIXTURE'] = ele.FURNITURE_FIXTURE == 0 ? 0 : 1
        security['VEHICLE'] = ele.VEHICLE == 0 ? 0 : 1
        security['OWN_DEPOSIT'] = ele.OWN_DEPOSIT == 0 ? 0 : 1
        security['LAND_BUILDING'] = ele.LAND_BUILDING == 0 ? 0 : 1
        security['GOLD_SILVER'] = ele.GOLD_SILVER == 0 ? 0 : 1
        security['OTHER_SECURITY'] = ele.OTHER_SECURITY == 0 ? 0 : 1
        security['CUST_INSURANCE'] = ele.CUST_INSURANCE == 0 ? 0 : 1
        let sec = await queryRunner.manager.insert(SECURITYMASTER, security)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SECURITYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //tds interest rate
  //tdsrate
  async TDSRATE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from tdsrate');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let tds = new TDSRATE()
        tds['FIN_YEAR'] = ele.FIN_YEAR
        tds['INTEREST_AMOUNT'] = ele.INTEREST_AMOUNT
        tds['TDS_RATE'] = ele.TDS_RATE
        tds['SURCHARGE_RATE'] = ele.SURCHARGE_RATE
        tds['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        let tdsrates = await queryRunner.manager.insert(TDSRATE, tds)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('TDSRATE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //NPAMASTER
  async NPAMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT distinct effect_date,npa_base_days from NPAMASTER order by effect_date asc`)
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let InterestRate = new NPAMASTER()
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        InterestRate['NPA_BASE_DAYS'] = ele.NPA_BASE_DAYS
        InterestRate['EFFECT_DATE'] = effectDate;
        let npa = await queryRunner.manager.save(NPAMASTER, InterestRate);
        //GRID QUERY
        let result1 = await connection2.execute(`SELECT * from NPAMASTER where EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND NPA_BASE_DAYS=${ele.NPA_BASE_DAYS}`)
        // SELECT * from NPAMASTER where EFFECT_DATE=TO_DATE('01/04/2007','DD/MM/YYYY') AND npa_base_days=365
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let obj = new NPACLASSIFICATION();
          obj['SERIAL_NO'] = element.SERIAL_NO
          obj['NPA_CLASS'] = element.NPA_CLASS
          obj['SUB_CLASS_NO'] = element.SUB_CLASS_NO
          obj['NPA_DESCRIPTION'] = element.NPA_DESCRIPTION
          obj['FROM_MONTHS'] = element.FROM_MONTHS
          obj['FROM_DAYS'] = element.FROM_DAYS
          obj['TO_MONTHS'] = element.TO_MONTHS
          obj['TO_DAYS'] = element.TO_DAYS
          obj['SECURED_PERCENT'] = element.SECURED_PERCENT
          obj['UNSECURED_PERCENT'] = element.UNSECURED_PERCENT
          obj['NPAClassID'] = npa.id
          await queryRunner.manager.insert(NPACLASSIFICATION, obj);
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('NPAMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //COMMISSIONSLAB
  async COMMISSIONSLAB() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from COMMISSIONSLAB');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let slab = new COMMISSIONSLAB()
        slab['INSTRUMENT_TYPE'] = ele.INSTRUMENT_TYPE
        slab['EFFECTIVE_DATE'] = ele.EFFECTIVE_DATE == '' || ele.EFFECTIVE_DATE == null ? null : moment(ele.EFFECTIVE_DATE).format('DD/MM/YYYY')
        slab['FROM_AMOUNT'] = ele.FROM_AMOUNT
        slab['TO_AMOUNT'] = ele.TO_AMOUNT
        slab['RATE'] = ele.RATE
        slab['RATE_PER_UNIT'] = ele.RATE_PER_UNIT
        slab['RATE_PER_UNIT'] = ele.RATE_PER_UNIT
        slab['MIN_COMMISSION'] = ele.MIN_COMMISSION
        slab['MAX_COMMISSION'] = ele.MAX_COMMISSION
        let slabrates = queryRunner.manager.insert(COMMISSIONSLAB, slab)
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('COMMISSIONSLAB')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //pgMASTER with offset and limit
  async PGMASTERCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
          SELECT NOTFOUNDPGMASTER.*,  CATEGORYMASTER.CODE AS ACCATG ,  SCHEMAST.TYPEID AS AC_TYPE1 ,
                NOTFOUNDPGMASTER.AC_TYPE AS DPTYPE, OWNBRANCHMASTER.CODE AS ACINTROBRANCH ,   OPERATIONMASTER.CODE AS ACOPRCODE,
                INTCATEGORYMASTER.CODE AS ACINTCATA FROM NOTFOUNDPGMASTER  
                    left JOIN INTCATEGORYMASTER ON NOTFOUNDPGMASTER.AC_INTCATA=INTCATEGORYMASTER.CODE
                    left JOIN OPERATIONMASTER ON NOTFOUNDPGMASTER.AC_OPR_CODE=OPERATIONMASTER.CODE
                    left JOIN CATEGORYMASTER ON NOTFOUNDPGMASTER.AC_CATG=CATEGORYMASTER.CODE
                    left JOIN OWNBRANCHMASTER ON NOTFOUNDPGMASTER.AC_INTROBRANCH= OWNBRANCHMASTER.CODE 
                    left JOIN SCHEMAST ON NOTFOUNDPGMASTER.AC_TYPE= SCHEMAST.S_APPL ORDER BY NOTFOUNDPGMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDPGMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.PGMASTERSCRIPTWITHLIMIT(data);
  }
  //pgMASTER with offset and limit
  async PGmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT PGMASTER.*,  CATEGORYMASTER.CODE AS ACCATG ,  SCHEMAST.S_APPL ,
                PGMASTER.AC_TYPE AS DPTYPE, OWNBRANCHMASTER.CODE AS ACINTROBRANCH ,  
                 OPERATIONMASTER.CODE AS ACOPRCODE, INTCATEGORYMASTER.CODE AS ACINTCATA FROM PGMASTER  
                    left JOIN INTCATEGORYMASTER ON PGMASTER.AC_INTCATA=INTCATEGORYMASTER.CODE
                    left JOIN OPERATIONMASTER ON PGMASTER.AC_OPR_CODE=OPERATIONMASTER.CODE
                    left JOIN CATEGORYMASTER ON PGMASTER.AC_CATG=CATEGORYMASTER.CODE
                    left JOIN OWNBRANCHMASTER ON PGMASTER.AC_INTROBRANCH= OWNBRANCHMASTER.CODE 
                    left JOIN SCHEMAST ON PGMASTER.AC_TYPE= SCHEMAST.S_APPL 
                    WHERE PGMASTER.AC_OPDATE > TO_DATE('25/01/2026','DD/MM/YYYY')
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}
            ORDER BY offset DESC
            `
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PGMASTER WHERE PGMASTER.AC_OPDATE > TO_DATE('25/01/2026','DD/MM/YYYY')`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.PGMASTERSCRIPTWITHLIMIT(data);
  }
  async PGMASTERSCRIPTWITHLIMIT(data) {
    let operations = await this.OPERATIONMASTERService.find()
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let PGMASTERData = await this.PGMASTERService.find()
    for (let ele of data) {
      if (ele.AC_TYPE == null) {
        continue;
      }

      if (ele.AC_MEMBTYPE == 99200) {
        ele.AC_MEMBTYPE = 99020
      }

      let idmasterID
      if (ele.AC_CUSTID != null) {
        let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
        let IDMASTER = await this.jsonConverter(CUSTID);
        for (let eleme of IDMASTER) {
          idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        }
      }
      // if (idmasterID == undefined) {
      //   continue;
      // }
      let AGENT_TYPE = null
      if (ele.AGENT_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.AGENT_ACTYPE}`)
        AGENT_TYPE = await this.jsonConverter(AGENTTYPE);
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }

      //directormaster find
      let directorID = null
      if (ele.AC_DIRECT != null) {
        let direct = await connection2.execute(`select CODE from DIRECTORMASTER where CODE=${ele.AC_DIRECT}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['CODE'] == deleme.CODE))
        }
      }
      let categoryID = null
      if (ele.ACCATG != null) {
        //categorymaster find
        let categoryM = await connection2.execute(`select CODE from CATEGORYMASTER where CODE=${ele.ACCATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          categoryID = (this.PostCategoryMaster.find(category => category['CODE'] == celeme.CODE))
        }
      }
      let OperationID = null
      if (ele.AC_OPR_CODE != null) {
        //operationmaster find
        let categoryM = await connection2.execute(`select NAME from operationmaster where CODE=${ele.AC_OPR_CODE}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          OperationID = (operations.find(operations => operations['CODE'] == celeme.CODE))
        }
      }
      let intcategoryID = null
      if (ele.AC_INTCATA != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['CODE'] == celeme.CODE))
        }
      }
      let AC_INTROBRANCHID = null
      if (ele.AC_INTROBRANCH != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select CODE from OWNBRANCHMASTER where CODE=${ele.AC_INTROBRANCH}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          AC_INTROBRANCHID = (this.PostBranch.find(ownbranchmaster => ownbranchmaster['CODE'] == celeme.CODE))
        }
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.AC_TYPE);
      let agentData = null
      let AGENTBANKACNO = null
      let AGENTAC_NO = Number(ele.AGENT_ACNO) + 100000
      if (ele.AGENT_ACTYPE != null) {
        agentData = this.PostSchemast.filter(ele2 => ele2['AC_TYPE'] == AGENT_TYPE[0].S_APPL);
        if (agentData.length != 0)
          AGENTBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentData[0].S_APPL + AGENTAC_NO
      }
      let acno = Number(ele.AC_NO) + 100000
      let AC_MEMBNO = Number(ele.AC_MEMBNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let pgmasterDuplicate = PGMASTERData.filter(ele3 => ele3['BANKACNO'] == BANKACNO);

      if (pgmasterDuplicate.length != 0) {
        // newObj['AC_NAME'] = idmasterID.AC_NAME
        // let master = await this.PGMASTERService.update(newObj,pgmasterDuplicate[0].id)
        continue;
      }

      ele.AC_NAME = ele.AC_NAME
      let newObj = new PGMASTER();
      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = acno;
      newObj['REF_ID'] = ele.REF_ID;
      //newObj['ORA_AC_NAME'] = ele.AC_NAME
      newObj['ORA_AC_NAME'] = ele.AC_NAME == undefined || ele.AC_NAME == null ? null : ele.AC_NAME;
      newObj['ORA_CUSTID'] = ele.AC_CUSTID == 0 ? null : ele.AC_CUSTID;
      // newObj['AC_CUSTID'] =  idmasterID == undefined || idmasterID == null ? 1 : idmasterID.id;
      // newObj['AC_NAME'] = ele.AC_NAME  == undefined || ele.AC_NAME == null ? ele.AC_NAME :ele.AC_NAME;
      newObj['AC_CUSTID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined || idmasterID == undefined ? 1 : idmasterID.id;
      newObj['AC_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME : idmasterID.AC_NAME;
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_SHORT_NAME'] = ele.AC_SHORT_NAME;
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
      newObj['AC_MEMBNO'] = AC_MEMBNO;
      newObj['AC_AGE'] = ele.AC_AGE;
      newObj['AC_RENEW_DATE'] = ele.AC_RENEW_DATE == '' || ele.AC_RENEW_DATE == null ? null : moment(ele.AC_RENEW_DATE).format('DD/MM/YYYY');
      newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
      newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
      newObj['AC_MONTHS'] = ele.AC_MONTHS;
      newObj['AC_SCHMAMT'] = ele.AC_SCHMAMT == null ? 0 : ele.AC_SCHMAMT;
      newObj['AGENT_BRANCH'] = this.BRANCH_CODE
      newObj['AGENT_ACTYPE'] = agentData[0].id;
      newObj['AGENT_ACNO'] = AGENTBANKACNO
      newObj['AC_MBDATE'] = ele.AC_MBDATE == '' || ele.AC_MBDATE == null ? null : moment(ele.AC_MBDATE).format('DD/MM/YYYY');
      newObj['AC_GRDNAME'] = ele.AC_GRDNAME;
      newObj['AC_GRDRELE'] = ele.AC_GRDRELE;
      newObj['AC_INTRNAME'] = ele.AC_INTRNAME;
      newObj['PG_COMM_TYPE'] = ele.PG_COMM_TYPE == 0 ? '0' : '1';
      newObj['AC_MINOR'] = ele.AC_MINOR == 0 ? 0 : 1;
      newObj['SIGNATURE_AUTHORITY'] = ele.SIGNATURE_AUTHORITY == undefined ? null : ele.SIGNATURE_AUTHORITY;
      newObj['AC_REF_RECEIPTNO'] = ele.AC_REF_RECEIPTNO == undefined ? null : ele.AC_REF_RECEIPTNO;
      newObj['AC_ASON_DATE'] = ele.AC_ASON_DATE == '' || ele.AC_ASON_DATE == null ? null : moment(ele.AC_ASON_DATE).format('DD/MM/YYYY');
      newObj['AC_MATUAMT'] = ele.AC_MATUAMT == null ? 0 : ele.AC_MATUAMT;
      newObj['IS_DISCOUNTED_INT_RATE'] = false;
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == null ? 0 : ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
      newObj['AC_ODAMT'] = ele.AC_ODAMT == null ? 0 : ele.AC_ODAMT;
      newObj['AC_SODAMT'] = ele.AC_SODAMT == null ? 0 : ele.AC_SODAMT;
      newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
      newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
      newObj['BANKACNO'] = BANKACNO;
      newObj['status'] = 1;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null ? 0 : ele.AC_OP_BAL;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
      newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
      newObj['AC_PRODUCT'] = ele.AC_PRODUCT == null ? 0 : ele.AC_PRODUCT;
      newObj['AC_INTRATE'] = ele.AC_INTRATE;
      newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
      newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
      newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
      //relation
      newObj['AC_INTROBRANCH'] = AC_INTROBRANCHID == null ? null : AC_INTROBRANCHID.id;
      newObj['idmasterID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined
        || idmasterID == undefined || idmasterID == undefined ? 1 : idmasterID.id;
      newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID.id;
      newObj['AC_CATG'] = categoryID == null ? null : categoryID.id;
      newObj['AC_OPR_CODE'] = OperationID == null ? null : OperationID.id;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['AC_TYPE'] = schemastData[0].id
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP == null ? 0 : ele.AC_PAYBLEINT_OP
      let master = await this.PGMASTERService.save(newObj);
      let nomniee = await this.nomineelink('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id, master.BANKACNO)
      let attorney = await this.atteroney('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id)
      let joint = await this.jointAc('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id, master.BANKACNO)
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.PGmasterScript()
    } else if (this.flag == 1) {
      console.log('PGMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.PGmasterScript()
    }
  }

  //SHMASTER with offset and limit
  async SHmasterCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDSHMASTER.*,  
              CATEGORYMASTER.CODE AS ACCATG , 
               SCHEMAST.TYPEID AS ACTYPE1 ,
               NOTFOUNDSHMASTER.AC_TYPE AS SHTYPE,
               NOTFOUNDSHMASTER.AC_NO AS SHAC_NO, 
               OWNBRANCHMASTER.CODE AS BRANCH_CODE1 FROM NOTFOUNDSHMASTER 
               LEFT JOIN CATEGORYMASTER ON NOTFOUNDSHMASTER.AC_CATG=CATEGORYMASTER.CODE 
               LEFT JOIN OWNBRANCHMASTER ON NOTFOUNDSHMASTER.AC_BRANCH= OWNBRANCHMASTER.CODE  
               LEFT JOIN SCHEMAST ON NOTFOUNDSHMASTER.AC_TYPE= SCHEMAST.S_APPL order by NOTFOUNDSHMASTER.AC_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDSHMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.SHMASTERSCRIPTWITHLIMIT(data);
  }
  async SHmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT SHMASTER.*,  
              CATEGORYMASTER.CODE AS ACCATG , 
               SCHEMAST.S_APPL  ,
               SHMASTER.AC_TYPE AS SHTYPE,
               SHMASTER.AC_NO AS SHAC_NO, 
               OWNBRANCHMASTER.CODE AS BRANCH_CODE1 FROM SHMASTER 
               LEFT JOIN CATEGORYMASTER ON SHMASTER.AC_CATG=CATEGORYMASTER.CODE 
               LEFT JOIN OWNBRANCHMASTER ON SHMASTER.AC_BRANCH= OWNBRANCHMASTER.CODE  
               LEFT JOIN SCHEMAST ON SHMASTER.AC_TYPE= SCHEMAST.S_APPL
               ORDER BY  SHMASTER.REF_ID ASC
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.SHMASTERSCRIPTWITHLIMIT(data);
  }
  async SHMASTERSCRIPTWITHLIMIT(data) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let shmasterData = await this.SHMASTERService.find()
      for (let ele of data) {
        //idmaster find   
        if (ele.AC_TYPE == null) {
          continue;
        }

        if (ele.AC_MEMBTYPE == 99200) {
          ele.AC_MEMBTYPE = 99020
        }


        let idmasterID
        if (ele.AC_CUSTID != null || ele.AC_CUSTID == null) {
          let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
          let IDMASTER = await this.jsonConverter(CUSTID);
          for (let eleme of IDMASTER) {
            idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
          }
        }

        // if (idmasterID == undefined) {
        //   continue;
        // }

        //directormaster find
        let directorID = null
        if (ele.AC_DIRECT != null) {
          let direct = await connection2.execute(`select CODE from DIRECTORMASTER where CODE=${ele.AC_DIRECT}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['CODE'] == deleme.CODE))
          }
        }
        let categoryID = null
        if (ele.ACCATG != null) {
          //categorymaster find
          let categoryM = await connection2.execute(`select CODE from CATEGORYMASTER where CODE=${ele.ACCATG}`)
          let categoryMaster = await this.jsonConverter(categoryM);
          for (let celeme of categoryMaster) {
            categoryID = (this.PostCategoryMaster.find(category => category['CODE'] == celeme.CODE))
          }
        }
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE_PATA'] == ele.AC_TYPE);
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let dpmasterDuplicate = shmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);
        if (dpmasterDuplicate.length != 0) {
          continue;
        }
        ele.AC_NAME = ele.AC_NAME
        let newObj = new SHMASTER();
        newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
        newObj['AC_NO'] = acno;
        newObj['AC_CUSTID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 26 : idmasterID.id
        newObj['AC_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME : idmasterID.AC_NAME;
        newObj['ORA_CUSTID'] = ele.AC_CUSTID
        //newObj['ORA_AC_NAME'] = ele.AC_NAME
        newObj['ORA_AC_NAME'] = ele.AC_NAME == undefined || ele.AC_NAME == null ? null : ele.AC_NAME;
        newObj['EMP_NO'] = ele.EMP_NO;
        newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == null ? '0' : ele.AC_IS_RECOVERY;
        newObj['AC_INSTALLMENT'] = ele.AC_INSTALLMENT;
        newObj['AC_JOIN_DATE'] = ele.AC_JOIN_DATE == '' || ele.AC_JOIN_DATE == null ? null : moment(ele.AC_JOIN_DATE).format('DD/MM/YYYY');
        newObj['AC_RETIRE_DATE'] = ele.AC_RETIRE_DATE == '' || ele.AC_RETIRE_DATE == null ? null : moment(ele.AC_RETIRE_DATE).format('DD/MM/YYYY');
        newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
        newObj['AC_SHBALDATE'] = ele.AC_SHBALDATE == '' || ele.AC_SHBALDATE == null ? null : moment(ele.AC_SHBALDATE).format('DD/MM/YYYY');
        newObj['MEMBERSHIP_BY'] = ele.MEMBERSHIP_BY;
        newObj['AC_SREPRESENT'] = ele.AC_SREPRESENT == undefined ? null : ele.AC_SREPRESENT;
        newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
        newObj['DEATH_DATE'] = ele.DEATH_DATE == '' || ele.DEATH_DATE == null ? null : moment(ele.DEATH_DATE).format('DD/MM/YYYY');
        newObj['AC_SBNO'] = ele.AC_SBNO;
        newObj['AC_RESNO'] = ele.RESULATION_NO;
        newObj['REF_ACNO'] = ele.REF_ACNO;
        newObj['AC_NARR'] = ele.AC_NARR == undefined ? null : ele.AC_NARR;
        newObj['AC_OP_SHNO'] = ele.AC_OP_SHNO;
        newObj['AC_FACE_VALUE'] = ele.AC_FACE_VALUE;
        newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null ? 0 : ele.AC_OP_BAL;
        newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS == undefined ? null : ele.AC_FREEZE_STATUS;
        newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == undefined ? 0 : ele.AC_FREEZE_AMOUNT;
        newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == undefined || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
        newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON == undefined ? null : ele.AC_FREEZE_REASON;
        newObj['status'] = 1;
        newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
        newObj['AC_RESDT'] = ele.RESULATION_DATE == '' || ele.RESULATION_DATE == null ? null : moment(ele.RESULATION_DATE).format('DD/MM/YYYY');
        newObj['AC_OP_CD'] = ele.AC_OP_CD;
        newObj['AC_CLOSED'] = ele.AC_CLOSED == -1 ? '1' : ele.AC_CLOSED
        newObj['AC_DEV_NAME'] = ele.AC_DEV_NAME;
        newObj['AC_DEV_WARD'] = ele.AC_DEV_WARD;
        newObj['AC_DEV_ADD'] = ele.AC_DEV_ADD == undefined ? null : ele.AC_DEV_ADD;
        newObj['AC_DEV_GALLI'] = ele.AC_DEV_GALLI;
        newObj['AC_DEV_AREA'] = ele.AC_DEV_AREA;
        newObj['AC_DEV_CITYCODE'] = ele.AC_DEV_CITYCODE == undefined ? null : ele.AC_DEV_CITYCODE;
        newObj['AC_BRANCH'] = this.BRANCH_CODE + '';
        //relation
        newObj['DIV_TRANSFER_ACTYPE'] = ele.DIV_TRANSFER_ACTYPE;
        newObj['DIV_TRANSFER_ACNO'] = ele.DIV_TRANSFER_ACNO == 0 ? null : ele.DIV_TRANSFER_ACNO;
        newObj['DIV_TRANSFER_ACNOTYPE'] = ele.DIV_TRANSFER_ACNOTYPE;
        newObj['DIV_TRANSFER_BRANCH'] = this.BRANCH_CODE;
        newObj['AC_SALARYDIVISION_CODE'] = ele.AC_SALARYDIVISION_CODE == 0 ? null : ele.AC_SALARYDIVISION_CODE;
        newObj['SUB_SALARYDIVISION_CODE'] = ele.SUB_SALARYDIVISION_CODE == 0 ? null : ele.SUB_SALARYDIVISION_CODE;
        newObj['idmasterID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 26 : idmasterID.id
        //newObj['idmasterID'] = 0
        newObj['AC_DIRECT'] = directorID?.id;
        newObj['AC_CATG'] = categoryID?.id
        newObj['BRANCH_CODE'] = this.BRANCH_CODE
        newObj['AC_TYPE'] = schemastData[0].id
        newObj['BANKACNO'] = BANKACNO;
        newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE;
        newObj['REF_ID'] = ele.REF_ID
        let shmasterinsert = await this.SHMASTERService.save(newObj);
        let nomniee = await this.nomineelink('SHMASTER', 'SH', ele.SHTYPE, ele.SHAC_NO, shmasterinsert.id, shmasterinsert.BANKACNO)
      }
      await connection2.close()
      if (this.offset <= this.count && this.flag == 0) {
        this.offset = this.offset + 1000;
        // await queryRunner.commitTransaction();
        await this.SHmasterScript()
      } else if (this.flag == 1) {
        console.log('SHMASTER');
        this.offset = 0
        this.flag = 0
      }
      else if (this.flag == 0 && this.offset != 0) {
        this.offset = this.offset + 1000;
        this.flag = 1
        // await queryRunner.commitTransaction();
        await this.SHmasterScript()
      }

    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async updateBal(ele) {
    let strSQL = `update ACMASTER SET "AC_OP_BAL"='${ele.AC_OP_BAL}' , "AC_OP_CD"='${ele.AC_OP_CD}' WHERE ID=${ele.id}`;
    let result = await getManager().query(strSQL);
  }
  //DPMASTER WITH OFFSET AND LIMIT 
  async DPMASTERCorrection() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDDPMASTER.*, SCHEMAST.TYPEID AS AC_TYPE1         
     FROM NOTFOUNDDPMASTER  LEFT JOIN SCHEMAST ON NOTFOUNDDPMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY NOTFOUNDDPMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DPMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DPMASTERSCRIPTWITHLIMIT(data);
  }

  async DPMASTERScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT  DPMASTER.*,  SCHEMAST.S_APPL        
     FROM  DPMASTER  LEFT JOIN  SCHEMAST ON  DPMASTER.AC_TYPE=  SCHEMAST.S_APPL
     WHERE DPMASTER.REF_ID > 632
     ORDER BY  DPMASTER.REF_ID ASC
           ) rs
        ) where 
        rownum <= ${this.limit}
            and offset > ${this.offset}
            order by offset ASC
            `
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from  DPMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    console.log(this.count)
    await this.DPMASTERSCRIPTWITHLIMIT(data);
  }
  async DPMASTERSCRIPTWITHLIMIT(data) {

    let dpmasterData = await this.DPMASTERService.find()
    let balcata = await this.BALACATAService.find()
    let operations = await this.OPERATIONMASTERService.find()
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    for (let ele of data) {
      console.log('ele.AC_TYPE:', ele.AC_TYPE)
      if (ele.AC_TYPE == null) {
        continue;
      }

      if (ele.AC_MEMBTYPE == 99200) {
        ele.AC_MEMBTYPE = 99020
      }

      let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE_SANGALI'] == ele.AC_TYPE);
      console.log('schemast:', schemastData[0].S_APPL)
      let BANKACNO1
      let AC_NO1
      // let AC_MEMBNO
      let acno = Number(ele.AC_NO) + 100000
      // let acno = String(ele.AC_NO).padStart(6, '0');
      let TDACNO = Number(ele.TD_ACNO) + 100000
      let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000
      // if(ele.AC_MEMBNO != null){
      //   AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : String(ele.AC_MEMBNO).padStart(6, '0');
      // }else{
      //   AC_MEMBNO = null
      // }

      let TD_ACNO = null
      let schem = schemastData == undefined || schemastData == null ? '101' : schemastData[0].S_APPL
      // TD_ACTYPE == 0 || TD_ACTYPE == null ? TD_ACNO = null : TD_ACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schem + acno
      let dpmasterDuplicate = dpmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);

      if (dpmasterDuplicate.length != 0) {
        // let newObj = new DPMASTER();

        //   newObj['AC_NAME'] =  ele.AC_NAME == undefined || ele.AC_NAME == null ? ele.AC_NAME  :ele.AC_NAME == undefined ? ele.AC_NAME :ele.AC_NAME
        //   let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
        //   if (idmasterID == undefined && ele.AC_ACNOTYPE != 'IV') {
        // let ac_no = ele.AC_NO.toString()

        // if(ele.AC_NO.toString().length == 6 || ele.AC_NO.toString().length >= 6){
        //    BANKACNO1 = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schem + ele.AC_NO
        //    AC_NO1 = ele.AC_NO
        // }else{
        //              BANKACNO1 = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schem + acno
        //              AC_NO1 = acno

        // }

        // let newObj = new DPMASTER();
        // // newObj['ENG_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
        //  newObj['BANKACNO'] = BANKACNO1
        //  newObj['AC_NO'] = AC_NO1
        //  console.log('REF_ID:',ele.REF_ID)
        // let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
        continue;
      }

      let idmasterID
      let CUSTID
      if (ele.AC_CUSTID == null) {
        //  CUSTID = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined ? 36 : ele.AC_CUSTID
        CUSTID = await connection2.execute(`select * from IDMASTER where AC_NO='1'`)

      } else {
        CUSTID = await connection2.execute(`select * from  IDMASTER where AC_NO='${ele.AC_CUSTID}'`)
      }
      // let CUSTID2 = await connection2.execute(`select * from IDMASTER`)
      // let IDMASTER2 = await this.jsonConverter(CUSTID2);

      let IDMASTER = await this.jsonConverter(CUSTID);
      for (let eleme of IDMASTER) {
        idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO
          && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        // }
      }

      // if (idmasterID == undefined && ele.AC_ACNOTYPE != 'IV') {
      //   continue;
      // }

      let pigmy_TYPE = null
      if (ele.PIGMY_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select  S_APPL from  schemast where S_APPL=${ele.PIGMY_ACTYPE}`)
        let PG_ACTYPE = await this.jsonConverter(AGENTTYPE);

        let AGENTTYP = this.PostSchemast.filter(ele => ele['AC_TYPE_SANGALI'] == PG_ACTYPE[0].S_APPL);

        pigmy_TYPE = AGENTTYP
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select  S_APPL from  schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }
      let categoryID = null
      if (ele.AC_CATG != null) {
        //categorymaster find
        let categoryM = await connection2.execute(`select CODE from CATEGORYMASTER where CODE=${ele.AC_CATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          //categoryID = (this.PostCategoryMaster.find(category => category['NAME'] == celeme.NAME))
          categoryID = (this.PostCategoryMaster.find(category => category['CODE'] == celeme.CODE))
        }
      }
      let OperationID = null
      if (ele.AC_OPR_CODE != null) {
        //operationmaster find
        let categoryM = await connection2.execute(`select CODE from operationmaster where CODE=${ele.AC_OPR_CODE}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          //OperationID = (operations.find(operations => operations['NAME'] == celeme.NAME))
          OperationID = (operations.find(operations => operations['CODE'] == celeme.CODE))
        }
      }
      let intcategoryID = null
      if (ele.AC_INTCATA != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['CODE'] == celeme.CODE))
        }
      }
      let AC_INTROBRANCHID = null
      if (ele.AC_INTROBRANCH != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select CODE from OWNBRANCHMASTER where CODE=${ele.AC_INTROBRANCH}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          AC_INTROBRANCHID = (this.PostBranch.find(ownbranchmaster => ownbranchmaster['CODE'] == celeme.CODE))
        }
      }
      let BALCATAID = null
      if (ele.AC_BALCATG != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select BC_CODE from BALACATA where BC_CODE=${ele.AC_BALCATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          BALCATAID = (balcata.find(balcata => balcata['BC_CODE'] == celeme.BC_CODE))
        }
      }
      // let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.AC_TYPE);
      // console.log('schemast:',schemastData[0].S_APPL)
      let TD_ACTYPE = null
      if (ele.TD_ACTYPE != null && ele.TD_ACTYPE != ' ') {
        let AGENTTYPE = await connection2.execute(`select S_APPL from  schemast where S_APPL=${Number(ele.TD_ACTYPE)}`)
        TD_ACTYPE = await this.jsonConverter(AGENTTYPE);
      }
      let lockerSchemeData = null
      if (TD_ACTYPE != 0 && TD_ACTYPE != null) {
        lockerSchemeData = this.PostSchemast.filter(ele => ele['AC_TYPE_SANGALI'] == TD_ACTYPE[0].S_APPL);
      }
      // let acno = Number(ele.AC_NO) + 100000
      // let TDACNO = Number(ele.TD_ACNO) + 100000
      // let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000
      // let TD_ACNO = null
      // let schem = schemastData == undefined || schemastData == null ? '101' : schemastData[0].S_APPL
      // TD_ACTYPE == 0 || TD_ACTYPE == null ? TD_ACNO = null : TD_ACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
      // let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schem + acno
      // let dpmasterData = await this.DPMASTERService.find()

      // let dpmasterDuplicate = dpmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);
      // if (dpmasterDuplicate.length != 0) {
      //   // let newObj = new DPMASTER();

      //   //   newObj['AC_NAME'] =  ele.AC_NAME == undefined || ele.AC_NAME == null ? ele.AC_NAME  :ele.AC_NAME == undefined ? ele.AC_NAME :ele.AC_NAME
      //   //   let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
      //   //   if (idmasterID == undefined && ele.AC_ACNOTYPE != 'IV') {
      //   continue;
      //   // }
      //   // let newObj = new DPMASTER();
      //   // newObj['AC_CUSTID'] = idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
      //   // newObj['AC_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
      //   // newObj['idmasterID'] =idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
      //   // newObj['CUSTID'] = ele.AC_CUSTID == undefined || ele.AC_CUSTID == null ? 1:  ele.AC_CUSTID
      //   // // newObj['ENG_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
      //   //  newObj['ORA_AC_NAME'] =ele.AC_NAME  == undefined || ele.AC_NAME  == null ? null:  ele.AC_NAME 
      //   // let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
      //   // continue;
      // }


      // let font = 'DVBW-TTYogeshEn';

      if (ele.AC_NAME == null || ele.AC_NAME == undefined) {
        ele.AC_NAME = ''
      }

      // let marathiName = unidev(ele.AC_NAME, 'hindi', `${font}`);
      // // let marathiMnm = unidev(ele.Middle_name, 'hindi', `${font}`);

      //       if (font === 'DVBW-TTYogeshEn') {
      //   if (marathiName.includes('×')) {
      //     marathiName = marathiName.replace(/×(.)/g, '$1ि');
      //   }
      //   if (marathiName.includes('Ø')) {
      //     marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
      //   }
      //   if (marathiName.includes('Ô')) {

      //     marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
      //     marathiName = marathiName.replace(/Ô/g, 'र्');
      //   }
      // }

      // ENG_NAME = this.translatefullwords(marathiName)

      //  }


      ele.AC_NAME = ele.AC_NAME
      let newObj = new DPMASTER();
      let AC_INTRACNO = ele.AC_INTRACNO == null ? null : Number(ele.AC_INTRACNO) + 100000
      newObj['REF_ID'] = ele.REF_ID;

      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = Number(acno);
      newObj['AC_CUSTID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 1 : idmasterID.id
      // newObj['AC_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME 2
      // newObj['CUSTID'] = ele.AC_CUSTID == undefined || ele.AC_CUSTID == null ? 1:  ele.AC_CUSTID 3
      newObj['ORA_AC_NAME'] = ele.AC_NAME == undefined || ele.AC_NAME == null ? null : ele.AC_NAME;
      //newObj['BENEF_NAME'] = marathiLnm
      newObj['BENEF_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME : idmasterID.AC_NAME;
      // newObj['ONE'] = 1;
      // newObj['AC_CUSTID'] = ele.AC_ACNOTYPE == 'IV' ? null : idmasterID == undefined ? 1 : idmasterID.id;
      newObj['AC_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME : idmasterID.AC_NAME;
      //newObj['AC_NAME'] = marathiLnm
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_SCHMAMT'] = ele.AC_SCHMAMT == null ? 0 : ele.AC_SCHMAMT;
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_MBDATE'] = ele.AC_MBDATE == '' || ele.AC_MBDATE == null ? null : moment(ele.AC_MBDATE).format('DD/MM/YYYY');
      newObj['AC_GRDNAME'] = ele.AC_GRDNAME;
      newObj['AC_GRDRELE'] = ele.AC_GRDRELE;
      newObj['AC_INTROID'] = ele.AC_INTROID;
      newObj['AC_INTRACNO'] = AC_INTRACNO + '';
      newObj['AC_INTRNAME'] = ele.AC_INTRNAME;
      newObj['SIGNATURE_AUTHORITY'] = ele.SIGNATURE_AUTHORITY == undefined || ele.SIGNATURE_AUTHORITY == null ? null : ele.SIGNATURE_AUTHORITY.trim();
      newObj['AC_PROPRITOR_NAME'] = ele.AC_PROPRITOR_NAME;
      newObj['PIGMY_ACTYPE'] = pigmy_TYPE == null ? null : pigmy_TYPE[0].id;
      newObj['INVEST_BRANCH'] = ele.INVEST_BRANCH;
      newObj['INVEST_BANK'] = ele.INVEST_BANK;
      newObj['AC_REF_RECEIPTNO'] = ele.AC_REF_RECEIPTNO;
      newObj['AC_ASON_DATE'] = ele.AC_ASON_DATE == '' || ele.AC_ASON_DATE == null ? null : moment(ele.AC_ASON_DATE).format('DD/MM/YYYY');
      newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
      newObj['AC_MONTHS'] = ele.AC_MONTHS;
      newObj['AC_DAYS'] = ele.AC_DAYS;
      newObj['AC_INTRATE'] = ele.AC_INTRATE == null ? 0 : ele.AC_INTRATE;
      newObj['AC_MATUAMT'] = ele.AC_MATUAMT == null ? 0 : ele.AC_MATUAMT;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_PARTICULAR'] = ele.AC_PARTICULAR == undefined || ele.AC_PARTICULAR == null ? null : ele.AC_PARTICULAR.trim();;
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == null ? 0 : ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
      newObj['AC_ODAMT'] = ele.AC_ODAMT == null ? 0 : ele.AC_ODAMT;
      newObj['AC_SODAMT'] = ele.AC_SODAMT == null ? 0 : ele.AC_SODAMT;
      newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
      newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
      newObj['IS_DISCOUNTED_INT_RATE'] = ele.IS_DISCOUNTED_INT_RATE == 0 ? 0 : 1;
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
      newObj['AC_MEMBNO'] = Number(AC_MEMBNO);
      newObj['BANKACNO'] = BANKACNO;
      newObj['AC_MINOR'] = ele.AC_MINOR == 0 ? '0' : '1';
      newObj['REQ_RENEW'] = ele.REQ_RENEW == 0 ? 0 : 1;
      newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? 0 : 1;
      newObj['status'] = 1;
      newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null ? 0 : ele.AC_OP_BAL;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
      newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
      newObj['AC_PRODUCT'] = ele.AC_PRODUCT;
      newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
      newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
      newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
      newObj['AC_PINT_OP'] = ele.AC_PINT_OP == null ? 0 : ele.AC_PINT_OP;
      newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP == null ? 0 : ele.AC_PAYBLEINT_OP;
      newObj['AC_ODEPINS'] = ele.AC_ODEPINS == null ? 0 : ele.AC_ODEPINS;
      newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP == null ? 0 : ele.AC_PAID_INT_OP;
      newObj['OP_CR_INT_FIN_YEAR'] = ele.OP_CR_INT_FIN_YEAR;
      newObj['OP_INT_PAID_FIN_YEAR'] = ele.OP_INT_PAID_FIN_YEAR;
      newObj['AUTO_MATURED_PAYABLEAMT'] = ele.AUTO_MATURED_PAYABLEAMT == null ? 0 : ele.AUTO_MATURED_PAYABLEAMT;
      newObj['AUTO_MATURED_INTERESTAMT'] = ele.AUTO_MATURED_INTERESTAMT == null ? 0 : ele.AUTO_MATURED_INTERESTAMT;
      newObj['AC_KEYWORD'] = ele.AC_KEYWORD;
      newObj['LAST_TDS_DATE'] = ele.LAST_TDS_DATE == '' || ele.LAST_TDS_DATE == null ? null : moment(ele.LAST_TDS_DATE).format('DD/MM/YYYY');
      newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
      newObj['LOCKER_NO'] = ele.LOCKER_NO
      newObj['RACK_NO'] = ele.RACK_NO
      newObj['TD_ACTYPE'] = TD_ACTYPE == 0 || TD_ACTYPE == null ? null : TD_ACTYPE[0].S_APPL;
      newObj['TD_ACNO'] = ele.TD_ACNO == 0 ? null : TD_ACNO
      //RELATION
      //newObj['AC_INTROBRANCH'] = AC_INTROBRANCHID == null || AC_INTROBRANCHID == undefined ? null : AC_INTROBRANCHID?.id;
      newObj['AC_INTROBRANCH'] = 101
      newObj['ORA_CUSTID'] = ele.AC_CUSTID == 0 ? null : ele.AC_CUSTID;
      newObj['idmasterID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 1 : idmasterID.id

      newObj['AC_INTCATA'] = intcategoryID == null || intcategoryID == undefined ? null : intcategoryID?.id;
      // newObj['AC_INTCATA'] = ele.AC_INTCATA
      newObj['AC_CATG'] = categoryID == null || categoryID == undefined ? null : categoryID?.id;
      newObj['AC_BALCATG'] = BALCATAID == null || BALCATAID == undefined ? null : BALCATAID?.id;
      //newObj['AC_BALCATG'] = 3
      newObj['AC_OPR_CODE'] = OperationID == null || OperationID == undefined ? null : OperationID?.id;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['AC_TYPE'] = schemastData[0].id
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      //newObj['OID'] = ele.ID
      let master = await this.DPMASTERService.save(newObj);
      // let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);


      let nomniee = await this.nomineelink('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id, master.BANKACNO)
      let attorney = await this.atteroney('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
      let joint = await this.jointAc('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id, master.BANKACNO)
      continue;
      // }

    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DPMASTERScript()
    } else if (this.flag == 1) {
      console.log('DPMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DPMASTERScript()
    }

  }
  // async DPMASTERSCRIPTWITHLIMIT(data) {

  //   let dpmasterData = await this.DPMASTERService.find()
  //   let balcata = await this.BALACATAService.find()
  //   let operations = await this.OPERATIONMASTERService.find()
  //   let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
  //   for (let ele of data) {
  //     if (ele.AC_TYPE == null) {
  //       continue;
  //     }
  //     let idmasterID
  //     // if (ele.AC_NO != null) {
  //     let AC_CUSTID = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined ? 1 : ele.AC_CUSTID
  //     let CUSTID = await connection2.execute(`select * from IDMASTER where AC_NO='${ele.AC_CUSTID}'`)
  //     // let CUSTID2 = await connection2.execute(`select * from IDMASTER`)
  //     // let IDMASTER2 = await this.jsonConverter(CUSTID2);

  //     let IDMASTER = await this.jsonConverter(CUSTID);
  //     for (let eleme of IDMASTER) {
  //       idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO 
  //         && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
  //       // }
  //     }

  //     // if (idmasterID == undefined && ele.AC_ACNOTYPE != 'IV') {
  //     //   continue;
  //     // }

  //     let pigmy_TYPE = null
  //     if (ele.PIGMY_ACTYPE != null) {
  //       let AGENTTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.PIGMY_ACTYPE}`)
  //       let PG_ACTYPE = await this.jsonConverter(AGENTTYPE);

  //       let AGENTTYP = this.PostSchemast.filter(ele => ele['AC_TYPE'] == PG_ACTYPE[0].S_APPL);

  //       pigmy_TYPE = AGENTTYP
  //     }
  //     let mem_TYPE = null
  //     if (ele.AC_MEMBTYPE != null) {
  //       let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
  //       mem_TYPE = await this.jsonConverter(memTYPE);
  //     }
  //     let categoryID = null
  //     if (ele.AC_CATG != null) {
  //       //categorymaster find
  //       let categoryM = await connection2.execute(`select NAME from CATEGORYMASTER where CODE=${ele.AC_CATG}`)
  //       let categoryMaster = await this.jsonConverter(categoryM);
  //       for (let celeme of categoryMaster) {
  //         categoryID = (this.PostCategoryMaster.find(category => category['NAME'] == celeme.NAME))
  //       }
  //     }
  //     let OperationID = null
  //     if (ele.AC_OPR_CODE != null) {
  //       //operationmaster find
  //       let categoryM = await connection2.execute(`select NAME from operationmaster where CODE=${ele.AC_OPR_CODE}`)
  //       let categoryMaster = await this.jsonConverter(categoryM);
  //       for (let celeme of categoryMaster) {
  //         OperationID = (operations.find(operations => operations['NAME'] == celeme.NAME))
  //       }
  //     }
  //     let intcategoryID = null
  //     if (ele.AC_INTCATA != null) {
  //       //intrate category master find
  //       let categoryM = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
  //       let categoryMaster = await this.jsonConverter(categoryM);
  //       for (let celeme of categoryMaster) {
  //         intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['NAME'] == celeme.NAME))
  //       }
  //     }
  //     let AC_INTROBRANCHID = null
  //     if (ele.AC_INTROBRANCH != null) {
  //       //intrate category master find
  //       let categoryM = await connection2.execute(`select NAME from OWNBRANCHMASTER where CODE=${ele.AC_INTROBRANCH}`)
  //       let categoryMaster = await this.jsonConverter(categoryM);
  //       for (let celeme of categoryMaster) {
  //         AC_INTROBRANCHID = (this.PostBranch.find(ownbranchmaster => ownbranchmaster['NAME'] == celeme.NAME))
  //       }
  //     }
  //     let BALCATAID = null
  //     if (ele.AC_BALCATG != null) {
  //       //intrate category master find
  //       let categoryM = await connection2.execute(`select BC_NAME from BALACATA where BC_CODE=${ele.AC_BALCATG}`)
  //       let categoryMaster = await this.jsonConverter(categoryM);
  //       for (let celeme of categoryMaster) {
  //         BALCATAID = (balcata.find(balcata => balcata['BC_NAME'] == celeme.BC_NAME))
  //       }
  //     }
  //     let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.AC_TYPE);
  //     let TD_ACTYPE = null
  //     if (ele.TD_ACTYPE != null && ele.TD_ACTYPE != ' ') {
  //       let AGENTTYPE = await connection2.execute(`select AC_TYPE from schemast where S_APPL=${Number(ele.TD_ACTYPE)}`)
  //       TD_ACTYPE = await this.jsonConverter(AGENTTYPE);
  //     }
  //     let lockerSchemeData = null
  //     if (TD_ACTYPE != 0 && TD_ACTYPE != null) {
  //       lockerSchemeData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == TD_ACTYPE[0].S_APPL);
  //     }
  //     let acno = Number(ele.AC_NO) + 100000
  //     let TDACNO = Number(ele.TD_ACNO) + 100000
  //     let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000
  //     let TD_ACNO = null
  //     TD_ACTYPE == 0 || TD_ACTYPE == null ? TD_ACNO = null : TD_ACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
  //     let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
  //     // let dpmasterData = await this.DPMASTERService.find()

  //     let dpmasterDuplicate = dpmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);
  //     if (dpmasterDuplicate.length != 0) {
  //       // let newObj = new DPMASTER();

  //       //   newObj['AC_NAME'] =  ele.AC_NAME == undefined || ele.AC_NAME == null ? ele.AC_NAME  :ele.AC_NAME == undefined ? ele.AC_NAME :ele.AC_NAME
  //       //   let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
  //     //   if (idmasterID == undefined && ele.AC_ACNOTYPE != 'IV') {
  //       continue;
  //     // }
  //       // let newObj = new DPMASTER();
  //       // newObj['AC_CUSTID'] = idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
  //       // newObj['AC_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
  //       // newObj['idmasterID'] =idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
  //       // newObj['CUSTID'] = ele.AC_CUSTID == undefined || ele.AC_CUSTID == null ? 1:  ele.AC_CUSTID
  //       // // newObj['ENG_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
  //       //  newObj['ORA_AC_NAME'] =ele.AC_NAME  == undefined || ele.AC_NAME  == null ? null:  ele.AC_NAME 
  //       // let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);
  //       // continue;
  //     }

  //     ele.AC_NAME = ele.AC_NAME
  //     let newObj = new DPMASTER();
  //     let AC_INTRACNO = ele.AC_INTRACNO == null ? null : Number(ele.AC_INTRACNO) + 100000
  //     newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
  //     newObj['AC_NO'] = acno;
  //     newObj['AC_CUSTID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined? 4 :   idmasterID.id 
  //     // newObj['AC_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME 2
  //     // newObj['CUSTID'] = ele.AC_CUSTID == undefined || ele.AC_CUSTID == null ? 1:  ele.AC_CUSTID 3
  //     newObj['ORA_AC_NAME'] =ele.AC_NAME  == undefined || ele.AC_NAME  == null ? null:  ele.AC_NAME ;
  //     // newObj['ONE'] = 1;
  //     // newObj['AC_CUSTID'] = ele.AC_ACNOTYPE == 'IV' ? null : idmasterID == undefined ? 1 : idmasterID.id;
  //     newObj['AC_NAME'] =  idmasterID == undefined ||  idmasterID== null ? ele.AC_NAME :  idmasterID.AC_NAME;
  //     newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
  //     newObj['AC_SCHMAMT'] = ele.AC_SCHMAMT == null ? 0 : ele.AC_SCHMAMT;
  //     newObj['REF_ACNO'] = ele.REF_ACNO;
  //     newObj['AC_MBDATE'] = ele.AC_MBDATE == '' || ele.AC_MBDATE == null ? null : moment(ele.AC_MBDATE).format('DD/MM/YYYY');
  //     newObj['AC_GRDNAME'] = ele.AC_GRDNAME;
  //     newObj['AC_GRDRELE'] = ele.AC_GRDRELE;
  //     newObj['AC_INTROID'] = ele.AC_INTROID;
  //     newObj['AC_INTRACNO'] = AC_INTRACNO + '';
  //     newObj['AC_INTRNAME'] = ele.AC_INTRNAME;
  //     newObj['SIGNATURE_AUTHORITY'] =ele.SIGNATURE_AUTHORITY == undefined || ele.SIGNATURE_AUTHORITY == null? null: ele.SIGNATURE_AUTHORITY.trim();
  //     newObj['AC_PROPRITOR_NAME'] = ele.AC_PROPRITOR_NAME;
  //     newObj['PIGMY_ACTYPE'] = pigmy_TYPE == null ? null : pigmy_TYPE[0].id;
  //     newObj['INVEST_BRANCH'] = ele.INVEST_BRANCH;
  //     newObj['INVEST_BANK'] = ele.INVEST_BANK;
  //     newObj['AC_REF_RECEIPTNO'] = ele.AC_REF_RECEIPTNO;
  //     newObj['AC_ASON_DATE'] = ele.AC_ASON_DATE == '' || ele.AC_ASON_DATE == null ? null : moment(ele.AC_ASON_DATE).format('DD/MM/YYYY');
  //     newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
  //     newObj['AC_MONTHS'] = ele.AC_MONTHS;
  //     newObj['AC_DAYS'] = ele.AC_DAYS;
  //     newObj['AC_INTRATE'] = ele.AC_INTRATE == null ? 0 : ele.AC_INTRATE;
  //     newObj['AC_MATUAMT'] = ele.AC_MATUAMT == null ? 0 : ele.AC_MATUAMT;
  //     newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
  //     newObj['AC_PARTICULAR'] = ele.AC_PARTICULAR == undefined || ele.AC_PARTICULAR == null? null: ele.AC_PARTICULAR.trim();;
  //     newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
  //     newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == null ? 0 : ele.AC_FREEZE_AMOUNT;
  //     newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
  //     newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
  //     newObj['AC_ODAMT'] = ele.AC_ODAMT == null ? 0 : ele.AC_ODAMT;
  //     newObj['AC_SODAMT'] = ele.AC_SODAMT == null ? 0 : ele.AC_SODAMT;
  //     newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
  //     newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
  //     newObj['IS_DISCOUNTED_INT_RATE'] = ele.IS_DISCOUNTED_INT_RATE == 0 ? 0 : 1;
  //     newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
  //     newObj['AC_MEMBNO'] = AC_MEMBNO;
  //     newObj['BANKACNO'] = BANKACNO;
  //     newObj['AC_MINOR'] = ele.AC_MINOR == 0 ? '0' : '1';
  //     newObj['REQ_RENEW'] = ele.REQ_RENEW == 0 ? 0 : 1;
  //     newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? 0 : 1;
  //     newObj['status'] = 1;
  //     newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
  //     newObj['AC_OP_CD'] = ele.AC_OP_CD;
  //     newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null ? 0 : ele.AC_OP_BAL;
  //     newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
  //     newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
  //     newObj['AC_PRODUCT'] = ele.AC_PRODUCT;
  //     newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
  //     newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
  //     newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
  //     newObj['AC_PINT_OP'] = ele.AC_PINT_OP == null ? 0 : ele.AC_PINT_OP;
  //     newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP == null ? 0 : ele.AC_PAYBLEINT_OP;
  //     newObj['AC_ODEPINS'] = ele.AC_ODEPINS == null ? 0 : ele.AC_ODEPINS;
  //     newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP == null ? 0 : ele.AC_PAID_INT_OP;
  //     newObj['OP_CR_INT_FIN_YEAR'] = ele.OP_CR_INT_FIN_YEAR;
  //     newObj['OP_INT_PAID_FIN_YEAR'] = ele.OP_INT_PAID_FIN_YEAR;
  //     newObj['AUTO_MATURED_PAYABLEAMT'] = ele.AUTO_MATURED_PAYABLEAMT == null ? 0 : ele.AUTO_MATURED_PAYABLEAMT;
  //     newObj['AUTO_MATURED_INTERESTAMT'] = ele.AUTO_MATURED_INTERESTAMT == null ? 0 : ele.AUTO_MATURED_INTERESTAMT;
  //     newObj['AC_KEYWORD'] = ele.AC_KEYWORD;
  //     newObj['LAST_TDS_DATE'] = ele.LAST_TDS_DATE == '' || ele.LAST_TDS_DATE == null ? null : moment(ele.LAST_TDS_DATE).format('DD/MM/YYYY');
  //     newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
  //     newObj['LOCKER_NO'] = ele.LOCKER_NO
  //     newObj['RACK_NO'] = ele.RACK_NO
  //     newObj['TD_ACTYPE'] = TD_ACTYPE == 0 || TD_ACTYPE == null ? null : TD_ACTYPE[0].S_APPL;
  //     newObj['TD_ACNO'] = ele.TD_ACNO == 0 ? null : TD_ACNO
  //     //RELATION
  //     newObj['AC_INTROBRANCH'] = AC_INTROBRANCHID == null || AC_INTROBRANCHID == undefined ? null : AC_INTROBRANCHID?.id;
  //     newObj['ORA_CUSTID'] = ele.AC_CUSTID ==  0 ? null : ele.AC_CUSTID;
  //     newObj['idmasterID'] =ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 4 :  idmasterID.id

  //     newObj['AC_INTCATA'] = intcategoryID == null || intcategoryID == undefined ? null : intcategoryID?.id;
  //     newObj['AC_CATG'] = categoryID == null || categoryID == undefined ? null : categoryID?.id;
  //     newObj['AC_BALCATG'] = BALCATAID == null || BALCATAID == undefined ? null : BALCATAID?.id;
  //     newObj['AC_OPR_CODE'] = OperationID == null || OperationID == undefined ? null : OperationID?.id;
  //     newObj['BRANCH_CODE'] = this.BRANCH_CODE
  //     newObj['AC_TYPE'] = schemastData[0].id
  //     newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
  //     let master = await this.DPMASTERService.save(newObj);
  //     // let master = await this.DPMASTERService.update(dpmasterDuplicate[0].id,newObj);


  //     let nomniee = await this.nomineelink('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
  //     let attorney = await this.atteroney('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
  //     let joint = await this.jointAc('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
  //     continue;
  //     // }

  //   }
  //   await connection2.close()
  //   if (this.offset <= this.count && this.flag == 0) {
  //     this.offset = this.offset + 1000;
  //     await this.DPMASTERScript()
  //   } else if (this.flag == 1) {
  //     console.log('DPMASTER');
  //     this.offset = 0
  //     this.flag = 0
  //   }
  //   else if (this.flag == 0 && this.offset != 0) {
  //     this.offset = this.offset + 1000;
  //     this.flag = 1
  //     await this.DPMASTERScript()
  //   }

  // }
  //lnmaster with offset and limit
  async lnmasterCorrection() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDLNMASTER.*,  SCHEMAST.TYPEID AS AC_TYPE1  from NOTFOUNDLNMASTER  
              LEFT JOIN SCHEMAST ON NOTFOUNDLNMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY NOTFOUNDLNMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDLNMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LNMASTERSCRIPTWITHLIMIT(data);
  }
  //lnmaster with offset and limit
  async lnmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
               SELECT LNMASTER.*,  SCHEMAST.S_APPL  from LNMASTER  
               LEFT JOIN SCHEMAST ON LNMASTER.AC_TYPE= SCHEMAST.S_APPL
               ORDER BY  LNMASTER.REF_ID ASC
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}
            order by offset ASC
            `);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LNMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LNMASTERSCRIPTWITHLIMIT(data);
  }
  async LNMASTERSCRIPTWITHLIMIT(data) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let authorityMaster = await this.AUTHORITYMASTERService.find()
      let recovercleark = await this.RECOVERYCLEARKMASTERService.find()
      let priorityMaster = await this.PRIORITYSECTORMASTERService.find()
      let WEAKERMASTER = await this.WEAKERMASTERService.find()
      let purpose = await this.PURPOSEMASTERService.find()
      let industry = await this.INDUSTRYMASTERService.find()
      let health = await this.HEALTHMASTERService.find()
      let dpmasterData = await this.SHMASTERService.find()

      for (let ele of data) {
        if (ele.AC_TYPE == null) {
          continue;
        }

        if (ele.AC_MEMBTYPE == 99200) {
          ele.AC_MEMBTYPE = 99020
        }

        let idmasterID
        let guaranterCustId
        if (ele.AC_CUSTID != null) {
          let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
          let IDMASTER = await this.jsonConverter(CUSTID);
          for (let eleme of IDMASTER) {
            idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
          }




        }

        // if (idmasterID == undefined) {
        //   continue;
        // }
        let authorityID = null
        if (ele.AC_AUTHORITY != null) {
          //let categoryM = await connection2.execute(`select NAME from AUTHORITYMASTER where CODE=${ele.AC_AUTHORITY}`)
          let categoryM = await connection2.execute(`select CODE from AUTHORITYMASTER where CODE=${ele.AC_AUTHORITY}`)
          let categoryMaster = await this.jsonConverter(categoryM);
          for (let celeme of categoryMaster) {
            authorityID = (authorityMaster.find(authorityMaster => authorityMaster['CODE'] == celeme.CODE))
          }
        }
        let intcategoryID = null
        if (ele.AC_INTCATA != null) {
          //intrate category master find
          let categoryM = await connection2.execute(`select CODE from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
          let categoryMaster = await this.jsonConverter(categoryM);
          for (let celeme of categoryMaster) {
            intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['CODE'] == celeme.CODE))
          }
        }
        //directormaster find
        let directorID = null
        if (ele.AC_RECOMMEND_BY != null) {
          let direct = await connection2.execute(`select CODE from DIRECTORMASTER where CODE=${ele.AC_RECOMMEND_BY}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['CODE'] == deleme.CODE))
          }
        }
        //directormaster find
        let directormastID = null
        if (ele.AC_DIRECTOR != null && ele.AC_DIRECTOR != 0) {
          let direct = await connection2.execute(`select CODE from DIRECTORMASTER where CODE=${ele.AC_DIRECTOR}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            directormastID = (this.PostdirectorMaster.find(directorMaster => directorMaster['CODE'] == deleme.CODE))
          }
        }
        //directormaster find
        let recoverclearkID = null
        if (ele.AC_RECOVERY_CLERK != null) {
          let direct = await connection2.execute(`select CODE from recoveryclearkmaster where CODE=${ele.AC_RECOVERY_CLERK}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            recoverclearkID = (recovercleark.find(recovercleark => recovercleark['CODE'] == deleme.CODE))
          }
        }
        let priorityID = null
        if (ele.AC_PRIORITY != null) {
          let direct = await connection2.execute(`select CODE from PRIORITYMASTER where CODE=${ele.AC_PRIORITY}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            priorityID = (priorityMaster.find(priorityMaster => priorityMaster['CODE'] == deleme.CODE))
          }
        }
        let AC_WEAKERID = null
        if (ele.AC_WEAKER != null) {
          let direct = await connection2.execute(`select CODE from weakermaster where CODE=${ele.AC_WEAKER}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            AC_WEAKERID = (WEAKERMASTER.find(WEAKERMASTER => WEAKERMASTER['CODE'] == deleme.CODE))
          }
        }
        let AC_PURPOSE = null
        if (ele.AC_WEAKER != null) {
          let direct = await connection2.execute(`select CODE from purposemaster where CODE=${ele.AC_PURPOSE}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            AC_PURPOSE = (purpose.find(purpose => purpose['CODE'] == deleme.CODE))
          }
        }
        let AC_INDUSTRY = null
        if (ele.AC_INDUSTRY != null) {
          let direct = await connection2.execute(`select CODE from industrymaster where CODE=${ele.AC_INDUSTRY}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            AC_INDUSTRY = (industry.find(industry => industry['CODE'] == deleme.CODE))
          }
        }
        let AC_HEALTH = null
        if (ele.AC_HEALTH != null) {
          let direct = await connection2.execute(`select CODE from healthmaster where CODE=${ele.AC_HEALTH}`)
          let directormaster = await this.jsonConverter(direct);
          for (let deleme of directormaster) {
            AC_HEALTH = (health.find(health => health['CODE'] == deleme.CODE))
          }
        }
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE_SANGALI'] == ele.AC_TYPE);

        let acno = Number(ele.AC_NO) + 100000
        let AC_MEMBNO = Number(ele.AC_MEMBNO) + 100000
        // let acno = String(ele.AC_NO).padStart(6, '0');
        // let AC_MEMBNO
        // if(ele.AC_MEMBNO != null){
        //   AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : String(ele.AC_MEMBNO).padStart(6, '0');
        // }else{
        //   AC_MEMBNO = null
        // }
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        this.lndata = await this.LNMASTERService.query('select * from lnmaster')


        let mem_TYPE = null
        if (ele.AC_MEMBTYPE != null) {
          let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
          mem_TYPE = await this.jsonConverter(memTYPE);
        }
        let lnmasterDuplicate = this.lndata.filter(ele4 => ele4['BANKACNO'] == BANKACNO && ele4['AC_TYPE_SANGALI'] == schemastData[0].id && ele4['AC_ACNOTYPE'] == ele.AC_ACNOTYPE);


        if (lnmasterDuplicate.length != 0) {
          // let newObj = new LNMASTER();
          // newObj['AC_INTRATE'] = ele.AC_INTRATE == null ? 0 : ele.AC_INTRATE;
          // let master = await this.LNMASTERService.update(lnmasterDuplicate[0].id, newObj);

          continue;
        }
        // if (dpmasterDuplicate.length != 0) {
        //   // let newObj = new LNMASTER();
        //   // newObj['ORA_CUSTID'] = 1
        //   // newObj['ENG_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME
        //   //    let master = await this.LNMASTERService.update(dpmasterDuplicate[0].id,newObj);
        //   continue;
        // }
        // this.lndata = await this.LNMASTERService.query('select * from lnmaster')
        // let lnmasterDuplicate = this.lndata.filter(ele4 => ele4['BANKACNO'] == BANKACNO && ele4['AC_TYPE'] == schemastData[0].id && ele4['AC_ACNOTYPE'] == ele.AC_ACNOTYPE);
        // if (lnmasterDuplicate.length != 0) {
        //   let newObj = new LNMASTER();
        //   newObj['AC_CUSTID'] = idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
        //    newObj['AC_NAME'] =  idmasterID == undefined ||idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
        //   newObj['idmasterID'] =idmasterID == undefined || idmasterID == null ? 1:  idmasterID.id
        //   newObj['ORA_CUSTID'] = ele.AC_CUSTID == undefined || ele.AC_CUSTID == null ? 1:  ele.AC_CUSTID
        //   // newObj['ENG_NAME'] =  idmasterID == undefined || idmasterID == null ? ele.AC_NAME  :idmasterID.AC_NAME == undefined ? ele.AC_NAME :idmasterID.AC_NAME
        //    newObj['ENG_NAME'] =idmasterID.AC_NAME;
        //    newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
        //    newObj['AC_NO'] = acno;
        //   //  newObj['AC_CUSTID'] = idmasterID == undefined ? 1:  idmasterID.id;
        //   //  newObj['AC_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME :idmasterID.AC_NAME  ;
        //    newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? '' : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
        //    newObj['AC_OPEN_OLD_DATE'] = ele.AC_OPEN_OLD_DATE == '' || ele.AC_OPEN_OLD_DATE == null ? null : moment(ele.AC_OPEN_OLD_DATE).format('DD/MM/YYYY');
        //    newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? 0 : 1;
        //    newObj['REF_ACNO'] = ele.REF_ACNO;
        //    newObj['AC_SANCTION_AMOUNT'] = ele.AC_SANCTION_AMOUNT == null ? 0 : ele.AC_SANCTION_AMOUNT;
        //    newObj['AC_SANCTION_DATE'] = ele.AC_SANCTION_DATE == '' || ele.AC_SANCTION_DATE == null ? null : moment(ele.AC_SANCTION_DATE).format('DD/MM/YYYY');
        //    newObj['AC_DRAWPOWER_AMT'] = ele.AC_DRAWPOWER_AMT == null ? 0 : ele.AC_DRAWPOWER_AMT;
        //    newObj['AC_MONTHS'] = ele.AC_MONTHS == null ? 0 : ele.AC_MONTHS;
        //    newObj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
        //    newObj['AC_INTRATE'] = ele.AC_INTRATE == null ? 0 : ele.AC_INTRATE;
        //    newObj['AC_REPAYMODE'] = ele.AC_REPAYMODE;
        //    newObj['INSTALLMENT_METHOD'] = ele.INSTALLMENT_METHOD;
        //    newObj['AC_INSTALLMENT'] = ele.AC_INSTALLMENT == null ? 0 : ele.AC_INSTALLMENT;
        //    newObj['AC_MORATORIUM_PERIOD'] = ele.AC_MORATORIUM_PERIOD;
        //    newObj['AC_GRACE_PERIOD'] = ele.AC_GRACE_PERIOD;
        //    newObj['AC_PRIORITY_SUB1'] = ele.AC_PRIORITY_SUB1;
        //    newObj['AC_PRIORITY_SUB2'] = ele.AC_PRIORITY_SUB2;
        //    newObj['AC_PRIORITY_SUB3'] = ele.AC_PRIORITY_SUB3;
        //    newObj['AC_RELATION_TYPE'] = ele.AC_RELATION_TYPE;
        //    newObj['AC_DIRECTOR_RELATION'] = ele.AC_DIRECTOR_RELATION;
        //    newObj['AC_COREG_NO'] = ele.AC_COREG_NO;
        //    newObj['AC_COREG_DATE'] = ele.AC_COREG_DATE == '' || ele.AC_COREG_DATE == null ? null : moment(ele.AC_COREG_DATE).format('DD/MM/YYYY');
        //    newObj['AC_COREG_AMT'] = ele.AC_COREG_AMT == null ? 0 : ele.AC_COREG_AMT;
        //    newObj['AC_RESO_NO'] = ele.AC_RESO_NO;
        //    newObj['AC_RESO_DATE'] = ele.AC_RESO_DATE == '' || ele.AC_RESO_DATE == null ? null : moment(ele.AC_RESO_DATE).format('DD/MM/YYYY');
        //    newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
        //    newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == null ? 0 : ele.AC_FREEZE_AMOUNT;
        //    newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
        //    newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
        //    newObj['AC_ODAMT'] = ele.AC_ODAMT == null ? 0 : ele.AC_ODAMT;
        //    newObj['AC_SODAMT'] = ele.AC_SODAMT == null ? 0 : ele.AC_SODAMT;
        //    newObj['AC_ODDAYS'] = ele.AC_ODDAYS == null ? 0 : ele.AC_ODDAYS;
        //    newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
        //    newObj['status'] = 1;
        //    newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
        //    newObj['AC_OP_CD'] = ele.AC_OP_CD;
        //    newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
        //    newObj['IS_AGGRI_LOAN'] = ele.IS_AGGRI_LOAN == 0 ? 0 : 1;
        //    newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
        //    newObj['IS_WEAKER'] = ele.IS_WEAKER == 0 ? 0 : 1
        //    newObj['AC_REMARK'] = ele.AC_REMARK;
        //    newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
        //    newObj['AC_OP_TOTAL_DEPOSITAMT'] = ele.AC_OP_TOTAL_DEPOSITAMT == null ? 0 : ele.AC_OP_TOTAL_DEPOSITAMT;
        //    newObj['OP_POSTED_INT'] = ele.OP_POSTED_INT == null ? 0 : ele.OP_POSTED_INT;
        //    newObj['IS_DISPUTE_LOAN'] = ele.IS_DISPUTE_LOAN == 0 ? '0' : '1';
        //    newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
        //    newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
        //    newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
        //    newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP;
        //    newObj['AC_RECBLEODUEINT_OP'] = ele.AC_RECBLEODUEINT_OP;
        //    newObj['AC_SECURITY_AMT'] = ele.AC_SECURITY_AMT;
        //    newObj['OP_NPA_DATE'] = ele.OP_NPA_DATE == '' || ele.OP_NPA_DATE == null ? null : moment(ele.OP_NPA_DATE).format('DD/MM/YYYY');
        //    newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
        //    newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
        //    newObj['AC_MEMBNO'] = AC_MEMBNO
        //    newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null || ele.AC_OP_BAL == undefined ? 0 : ele.AC_OP_BAL;
        //    newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP == null ? 0 : ele.ele.AC_PAYBLEINT_OP;
        //    newObj['AC_PINT_OP'] = ele.AC_PINT_OP == null ? 0 : ele.AC_PINT_OP;
        //    newObj['AC_RECBLEINT_OP'] = ele.AC_RECBLEINT_OP;
        //    //relation
        //   //  newObj['idmasterID'] = idmasterID == undefined ? 1:  idmasterID.id;
        //    newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID?.id;
        //    newObj['AC_AUTHORITY'] = authorityID == null ? null : authorityID?.id;
        //    newObj['AC_RECOMMEND_BY'] = directorID == null ? null : directorID?.id;
        //    newObj['AC_RECOVERY_CLERK'] = recoverclearkID == null ? null : recoverclearkID?.id;
        //    newObj['AC_PRIORITY'] = priorityID == null ? null : priorityID?.id;
        //    newObj['AC_WEAKER'] = AC_WEAKERID == null ? null : AC_WEAKERID?.id;
        //    newObj['AC_PURPOSE'] = AC_PURPOSE == null ? null : AC_PURPOSE?.id;
        //    newObj['AC_INDUSTRY'] = AC_INDUSTRY == null ? null : AC_INDUSTRY?.id;
        //    newObj['AC_DIRECTOR'] = directormastID == null ? null : directormastID?.id;
        //    newObj['AC_HEALTH'] = AC_HEALTH == null ? null : AC_HEALTH?.id;
        //    newObj['BRANCH_CODE'] = this.BRANCH_CODE
        //    newObj['BANKACNO'] = BANKACNO;
        //    newObj['AC_TYPE'] = schemastData[0].id;
        //    newObj['ORA_CUSTID'] = ele.AC_CUSTID
        //    newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
        //    let master = await this.LNMASTERService.update(lnmasterDuplicate[0].id,newObj);
        //   continue;
        //   // continue;
        // }
        ele.AC_NAME = ele.AC_NAME
        let newObj = new LNMASTER();
        newObj['ORA_CUSTID'] = ele.AC_CUSTID == 0 ? 0 : ele.AC_CUSTID;
        newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
        newObj['REF_ID'] = ele.REF_ID
        newObj['AC_NO'] = Number(acno);
        newObj['AC_CUSTID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 1 : idmasterID.id
        // newObj['ORA_CUSTID'] = ele.AC_CUSTID;
        newObj['AC_NAME'] = idmasterID == undefined || idmasterID == null ? ele.AC_NAME : idmasterID.AC_NAME;
        newObj['ORA_AC_NAME'] = ele.AC_NAME
        // newObj['ENG_NAME'] =ele.AC_NAME 
        newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? '' : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
        newObj['AC_OPEN_OLD_DATE'] = ele.AC_OPEN_OLD_DATE == '' || ele.AC_OPEN_OLD_DATE == null ? null : moment(ele.AC_OPEN_OLD_DATE).format('DD/MM/YYYY');
        newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? 0 : 1;
        newObj['REF_ACNO'] = ele.REF_ACNO;
        newObj['AC_SANCTION_AMOUNT'] = ele.AC_SANCTION_AMOUNT == null ? 0 : ele.AC_SANCTION_AMOUNT;
        newObj['AC_SANCTION_DATE'] = ele.AC_SANCTION_DATE == '' || ele.AC_SANCTION_DATE == null ? null : moment(ele.AC_SANCTION_DATE).format('DD/MM/YYYY');
        newObj['AC_DRAWPOWER_AMT'] = ele.AC_DRAWPOWER_AMT == null ? 0 : ele.AC_DRAWPOWER_AMT;
        newObj['AC_MONTHS'] = ele.AC_MONTHS == null ? 0 : ele.AC_MONTHS;
        newObj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
        newObj['AC_INTRATE'] = ele.AC_INTRATE == null ? 0 : ele.AC_INTRATE;
        newObj['AC_REPAYMODE'] = ele.AC_REPAYMODE;
        newObj['INSTALLMENT_METHOD'] = ele.INSTALLMENT_METHOD;
        newObj['AC_INSTALLMENT'] = ele.AC_INSTALLMENT == null ? 0 : ele.AC_INSTALLMENT;
        newObj['AC_MORATORIUM_PERIOD'] = ele.AC_MORATORIUM_PERIOD;
        newObj['AC_GRACE_PERIOD'] = ele.AC_GRACE_PERIOD;
        newObj['AC_PRIORITY_SUB1'] = ele.AC_PRIORITY_SUB1;
        newObj['AC_PRIORITY_SUB2'] = ele.AC_PRIORITY_SUB2;
        newObj['AC_PRIORITY_SUB3'] = ele.AC_PRIORITY_SUB3;
        newObj['AC_RELATION_TYPE'] = ele.AC_RELATION_TYPE;
        newObj['AC_DIRECTOR_RELATION'] = ele.AC_DIRECTOR_RELATION;
        newObj['AC_COREG_NO'] = ele.AC_COREG_NO;
        newObj['AC_COREG_DATE'] = ele.AC_COREG_DATE == '' || ele.AC_COREG_DATE == null ? null : moment(ele.AC_COREG_DATE).format('DD/MM/YYYY');
        newObj['AC_COREG_AMT'] = ele.AC_COREG_AMT == null ? 0 : ele.AC_COREG_AMT;
        newObj['AC_RESO_NO'] = ele.AC_RESO_NO;
        newObj['AC_RESO_DATE'] = ele.AC_RESO_DATE == '' || ele.AC_RESO_DATE == null ? null : moment(ele.AC_RESO_DATE).format('DD/MM/YYYY');
        newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
        newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == null ? 0 : ele.AC_FREEZE_AMOUNT;
        newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
        newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
        newObj['AC_ODAMT'] = ele.AC_ODAMT == null ? 0 : ele.AC_ODAMT;
        newObj['AC_SODAMT'] = ele.AC_SODAMT == null ? 0 : ele.AC_SODAMT;
        newObj['AC_ODDAYS'] = ele.AC_ODDAYS == null ? 0 : ele.AC_ODDAYS;
        newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
        newObj['status'] = 1;
        newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
        newObj['AC_OP_CD'] = ele.AC_OP_CD;
        newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
        newObj['IS_AGGRI_LOAN'] = ele.IS_AGGRI_LOAN == 0 ? 0 : 1;
        newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
        newObj['IS_WEAKER'] = ele.IS_WEAKER == 0 ? 0 : 1
        newObj['AC_REMARK'] = ele.AC_REMARK;
        newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
        newObj['AC_OP_TOTAL_DEPOSITAMT'] = ele.AC_OP_TOTAL_DEPOSITAMT == null ? 0 : ele.AC_OP_TOTAL_DEPOSITAMT;
        newObj['OP_POSTED_INT'] = ele.OP_POSTED_INT == null ? 0 : ele.OP_POSTED_INT;
        newObj['IS_DISPUTE_LOAN'] = ele.IS_DISPUTE_LOAN == 0 ? '0' : '1';
        newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
        newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
        newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
        newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP;
        newObj['AC_RECBLEODUEINT_OP'] = ele.AC_RECBLEODUEINT_OP;
        newObj['AC_SECURITY_AMT'] = ele.AC_SECURITY_AMT;
        newObj['OP_NPA_DATE'] = ele.OP_NPA_DATE == '' || ele.OP_NPA_DATE == null ? null : moment(ele.OP_NPA_DATE).format('DD/MM/YYYY');
        newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
        newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].S_APPL;
        newObj['AC_MEMBNO'] = AC_MEMBNO
        newObj['AC_OP_BAL'] = ele.AC_OP_BAL == null || ele.AC_OP_BAL == undefined ? 0 : ele.AC_OP_BAL;
        newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP == null ? 0 : ele.ele.AC_PAYBLEINT_OP;
        newObj['AC_PINT_OP'] = ele.AC_PINT_OP == null ? 0 : ele.AC_PINT_OP;
        newObj['AC_RECBLEINT_OP'] = ele.AC_RECBLEINT_OP;
        //relation
        newObj['idmasterID'] = ele.AC_CUSTID == 0 || ele.AC_CUSTID == null || ele.AC_CUSTID == undefined || idmasterID == undefined ? 1 : idmasterID.id;
        newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID?.id;
        newObj['AC_AUTHORITY'] = authorityID == null ? null : authorityID?.id;
        newObj['AC_RECOMMEND_BY'] = directorID == null ? null : directorID?.id;
        newObj['AC_RECOVERY_CLERK'] = recoverclearkID == null ? null : recoverclearkID?.id;
        newObj['AC_PRIORITY'] = priorityID == null ? null : priorityID?.id;
        //newObj['AC_PRIORITY'] = 12;
        newObj['AC_WEAKER'] = AC_WEAKERID == null ? null : AC_WEAKERID?.id;
        newObj['AC_PURPOSE'] = AC_PURPOSE == null ? null : AC_PURPOSE?.id;
        newObj['AC_INDUSTRY'] = AC_INDUSTRY == null ? null : AC_INDUSTRY?.id;
        newObj['AC_DIRECTOR'] = directormastID == null ? null : directormastID?.id;
        newObj['AC_HEALTH'] = AC_HEALTH == null ? null : AC_HEALTH?.id;
        newObj['BRANCH_CODE'] = this.BRANCH_CODE
        newObj['BANKACNO'] = BANKACNO;
        newObj['AC_TYPE'] = schemastData[0].id;
        newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
        console.log('REF_ID:', ele.REF_ID)
        //newObj['OID'] = ele.ID
        let LNAC = await this.LNMASTERService.save(newObj);
        // let LNAC = await queryRunner.manager.save(LNMASTER, newObj);

        //SECURITYDETAILS TABLE
        let securitydetails = await connection2.execute(`SELECT SECURITYDETAILS .*, schemast.S_APPL  from  
      SECURITYDETAILS left join schemast on securitydetails.ac_type=schemast.s_appl where SECURITYDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND SECURITYDETAILS.AC_TYPE = ${ele.AC_TYPE} AND SECURITYDETAILS.AC_NO = ${ele.AC_NO}`)
        let security = await this.jsonConverter(securitydetails);
        for (let element of security) {
          let security = new SECURITYDETAILS();
          security['AC_ACNOTYPE'] = element.AC_ACNOTYPE;
          security['AC_TYPE'] = schemastData[0].id;
          security['AC_NO'] = BANKACNO;
          security['SECURITY_CODE'] = element.SECURITY_CODE;
          security['SECURITY_VALUE'] = element.SECURITY_VALUE;
          security['lnmasterID'] = LNAC.id;
          await this.SECURITYDETAILSService.insert(security);
          // await queryRunner.manager.insert(SECURITYDETAILS, security);
        }
        //GUARANTERDETAILS
        let guaranterdetails = await connection2.execute(`SELECT GUARANTERDETAILS .*, schemast.S_APPL  from  GUARANTERDETAILS left join schemast on GUARANTERDETAILS.ac_type=schemast.s_appl where GUARANTERDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND GUARANTERDETAILS.AC_TYPE = ${ele.AC_TYPE} AND GUARANTERDETAILS.AC_NO = ${ele.AC_NO}`)
        let guaranterdetail = await this.jsonConverter(guaranterdetails);
        for (let guaranter of guaranterdetail) {
          let newObj = new GUARANTERDETAILS();
          let mem_TYPE = null
          if (ele.MEMBER_TYPE != null) {
            let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${guaranter.MEMBER_TYPE}`)
            mem_TYPE = await this.jsonConverter(memTYPE);
          }
          let idmasterID
          if (ele.AC_CUSTID != null) {
            let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${guaranter.AC_CUSTID}`)
            let IDMASTER = await this.jsonConverter(CUSTID);
            for (let eleme of IDMASTER) {
              idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
            }
          }
          // if (idmasterID == undefined) {
          //   continue;
          // }
          let AC_MEMBNO = Number(guaranter.MEMBER_NO) + 100000
          // if(guaranter.MEMBER_NO != null){
          //   AC_MEMBNO = guaranter.MEMBER_NO == 0 ? null : String(guaranter.MEMBER_NO).padStart(6, '0');
          // }else{
          //   AC_MEMBNO = null
          // }

          newObj['REF_ID'] = guaranter.REF_ID;
          newObj['AC_ACNOTYPE'] = guaranter.AC_ACNOTYPE;
          newObj['AC_NO'] = BANKACNO;
          newObj['AC_TYPE'] = LNAC.AC_TYPE + '';
          newObj['MEMBER_TYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
          newObj['MEMBER_NO'] = AC_MEMBNO + '';
          newObj['EXP_DATE'] = guaranter.EXP_DATE == '' || guaranter.EXP_DATE == null ? null : moment(guaranter.EXP_DATE).format('DD/MM/YYYY');
          newObj['AC_NAME'] = guaranter.NAME.replace("\x00", "");
          newObj['GAC_CUSTID'] = idmasterID == undefined ? 0 : idmasterID.id;
          newObj['lnmasterID'] = LNAC.id;
          newObj['ORA_GCUSTID'] = guaranter.AC_CUSTID
          await this.GUARANTERDETAILSService.save(newObj);
          // await queryRunner.manager.save(GUARANTERDETAILS, newObj);
        }

        //COBORROWER
        let coborrowerDeatils = await connection2.execute(`SELECT COBORROWER.*, schemast.S_APPL  from  COBORROWER left join schemast on COBORROWER.ac_type = schemast.s_appl where COBORROWER.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND COBORROWER.AC_TYPE = ${ele.AC_TYPE} AND COBORROWER.AC_NO = ${ele.AC_NO}`)
        let coborrower = await this.jsonConverter(coborrowerDeatils);
        for (let coborrow of coborrower) {
          let idmasterID
          if (ele.AC_CUSTID != null) {
            let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${coborrow.AC_CUSTID}`)
            let IDMASTER = await this.jsonConverter(CUSTID);
            for (let eleme of IDMASTER) {
              idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
            }
          }
          // if (idmasterID == undefined) {
          //   continue;
          // }
          let CoBorrower = new COBORROWER();

          CoBorrower['REF_ID'] = coborrow.REF_ID;
          CoBorrower['AC_TYPE'] = LNAC.AC_TYPE + '';
          CoBorrower['AC_ACNOTYPE'] = coborrow.AC_ACNOTYPE
          CoBorrower['CAC_CUSTID'] = idmasterID == undefined ? 0 : idmasterID.id
          CoBorrower['AC_NAME'] = coborrow.NAME.replace("\x00", "")
          CoBorrower['AC_NO'] = BANKACNO
          CoBorrower['lnmasterID'] = LNAC.id;
          CoBorrower['ORA_CCUSTID'] = coborrow.AC_CUSTID;

          const coborr = await this.COBORROWERService.insert(CoBorrower);
          // const coborr = queryRunner.manager.insert(COBORROWER, CoBorrower);
        }
        //LNACINTRATE
        let lnacint = await connection2.execute(`SELECT * FROM LNACINTRATE WHERE AC_ACNOTYPE='${ele.AC_ACNOTYPE}' AND AC_TYPE= ${ele.AC_TYPE} AND AC_NO=${ele.AC_NO} order by serial_no`)
        // SELECT * FROM LNACINTRATE WHERE AC_ACNOTYPE='LN' AND AC_TYPE=70400 AND AC_NO=400266
        let lnaccountint = await this.jsonConverter(lnacint);
        for (let ele of lnaccountint) {

          // let acno = String(ele.AC_NO).padStart(6, '0');
          let newObj = new LNACINTRATE();
          newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
          newObj['AC_NO'] = ele.AC_NO + 100000;
          newObj['AC_TYPE'] = LNAC.AC_TYPE
          newObj['OPENING_ENTRY'] = ele.OPENING_ENTRY == 0 ? 0 : 1;
          newObj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
          newObj['SERIAL_NO'] = ele.SERIAL_NO;
          newObj['INT_RATE'] = ele.INT_RATE;
          newObj['PENAL_INT_RATE'] = ele.PENAL_INT_RATE;
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          newObj['UPDATEFLAG'] = 1;
          newObj['LNMASTERID'] = LNAC.id;
          newObj['BANKACNO'] = BANKACNO;
          await this.LNACINTRATEService.save(newObj);
          // await queryRunner.manager.save(LNACINTRATE, newObj);
        }
      }
      await connection2.close()
      if (this.offset <= this.count && this.flag == 0) {
        this.offset = this.offset + 1000;
        // console.log(data[data.length - 1])
        await queryRunner.commitTransaction();
        await this.lnmasterScript()
      } else if (this.flag == 1) {
        console.log('LNMASTER');
        this.offset = 0
        this.flag = 0
      }
      else if (this.flag == 0 && this.offset != 0) {
        this.offset = this.offset + 1000;
        this.flag = 1
        await queryRunner.commitTransaction();
        console.log(data[data.length - 1])
        await this.lnmasterScript()
      }

    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //RENEWALHISTORY
  async RENEWALHISTORY() {

    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select renewalhistory.*, schemast.S_APPL as actype from renewalhistory left join schemast on renewalhistory.ac_type=schemast.s_appl`)
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let ele of data) {
      let renew = new RENEWALHISTORY()
      let acno
      let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == ele.ACTYPE);
      // acno = 100000 + Number(ele.AC_NO)
      acno = String(ele.AC_NO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      renew['RENEWAL_DATE'] = ele.RENEWAL_DATE == '' || ele.RENEWAL_DATE == null ? null : moment(ele.RENEWAL_DATE).format('DD/MM/YYYY');
      renew['AC_RENEWAL_COUNTER'] = ele.AC_RENEWAL_COUNTER
      renew['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
      renew['AC_TYPE'] = schemastData[0].id
      renew['AC_NO'] = BANKACNO
      renew['OLD_MONTH'] = ele.OLD_MONTH
      renew['OLD_EXPIRY_DATE'] = ele.OLD_EXPIRY_DATE == '' || ele.OLD_EXPIRY_DATE == null ? null : moment(ele.OLD_EXPIRY_DATE).format('DD/MM/YYYY')
      renew['OLD_AC_ACNOTYPE'] = ele.AC_ACNOTYPE
      renew['OLD_SANCTION_LIMIT'] = ele.OLD_SANCTION_LIMIT
      renew['OLD_SANCTION_DATE'] = ele.OLD_SANCTION_DATE == '' || ele.OLD_SANCTION_DATE == null ? null : moment(ele.OLD_SANCTION_DATE).format('DD/MM/YYYY')
      renew['OLD_SECURITY_AMOUNT'] = ele.OLD_SECURITY_AMOUNT
      renew['OLD_DRAWING_POWER'] = ele.OLD_DRAWING_POWER
      renew['USER_CODE'] = ele.USER_CODE
      renew['NEW_MONTH'] = ele.NEW_MONTH
      renew['NEW_DAYS'] = ele.NEW_DAYS
      renew['NEW_OPEN_DATE'] = ele.NEW_OPEN_DATE == '' || ele.NEW_OPEN_DATE == null ? null : moment(ele.NEW_OPEN_DATE).format('DD/MM/YYYY');
      renew['NEW_ASON_DATE'] = ele.NEW_ASON_DATE == '' || ele.NEW_ASON_DATE == null ? null : moment(ele.NEW_ASON_DATE).format('DD/MM/YYYY');
      renew['NEW_EXPIRY_DATE'] = ele.NEW_EXPIRY_DATE == '' || ele.NEW_EXPIRY_DATE == null ? null : moment(ele.NEW_EXPIRY_DATE).format('DD/MM/YYYY')
      renew['NEW_INTEREST_RATE'] = ele.NEW_INTEREST_RATE
      renew['OLD_AC_OPEN_DATE'] = ele.OLD_AC_OPEN_DATE == '' || ele.OLD_AC_OPEN_DATE == null ? null : moment(ele.OLD_AC_OPEN_DATE).format('DD/MM/YYYY');
      renew['OLD_AC_SCHMAMT'] = ele.OLD_AC_SCHEME_AMT
      renew['OLD_MATUAMT'] = ele.OLD_MATUAMT
      renew['OLD_DAYS'] = ele.OLD_DAYS
      renew['OLD_INTEREST_RATE'] = ele.OLD_INTEREST_RATE
      renew['BRANCH_CODE'] = this.BRANCH_CODE
      renew['OLD_AC_INSTALLMENT'] = ele.OLD_AC_INSTALLMENT
      renew['RENEWAL_AMOUNT'] = ele.RENEWAL_AMOUNT
      renew['NEW_RECEIPTNO'] = ele.NEW_RECEIPTNO
      renew['NEW_INT_CODE'] = ele.NEW_INT_CODE
      renew['NEW_MATURITY_AMOUNT'] = ele.NEW_MATURITY_AMOUNT
      renew['OLD_AC_SCHEME_AMT'] = ele.OLD_AC_SCHEME_AMT
      renew['OLD_RECEIPT_NO'] = ele.OLD_RECEIPT_NO
      renew['PENAL_INTEREST'] = ele.PENAL_INTEREST
      renew['NORMAL_INTEREST'] = ele.NORMAL_INTEREST
      renew['PAYABLE_INTEREST'] = ele.PAYABLE_INTEREST
      renew['INTEREST_PAID_AMT'] = ele.INTEREST_PAID_AMT
      renew['OFFICER_CODE'] = ele.OFFICER_CODE
      renew['INTEREST_DATE'] = ele.INTEREST_DATE == '' || ele.INTEREST_DATE == null ? null : moment(ele.INTEREST_DATE).format('DD/MM/YYYY');
      renew['IS_ASON_AC'] = ele.IS_ASON_AC
      if (ele.TRAN_STATUS == 'UP') {
        renew['TRAN_STATUS'] = '0'
        renew['SYSCHNG_LOGIN'] = null
      }
      else if (ele.TRAN_STATUS == 'PS') {
        renew['TRAN_STATUS'] = '1'
        renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
      }
      else if (ele.TRAN_STATUS == 'RJ') {
        renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
        renew['TRAN_STATUS'] = '2'
      }
      renew['TRAN_NO'] = ele.TRAN_NO
      renew['NORMAL_INT_TRTYPE'] = ele.NORMAL_INT_TRTYPE
      renew['NEW_LAST_TRNDATE'] = ele.NEW_LAST_TRNDATE == '' || ele.NEW_LAST_TRNDATE == null ? null : moment(ele.NEW_LAST_TRNDATE).format('DD/MM/YYYY');
      renew['OLD_LAST_TRNDATE'] = ele.OLD_LAST_TRNDATE == '' || ele.OLD_LAST_TRNDATE == null ? null : moment(ele.OLD_LAST_TRNDATE).format('DD/MM/YYYY');
      renew['OLD_ASON_DATE'] = ele.OLD_ASON_DATE == '' || ele.OLD_ASON_DATE == null ? null : moment(ele.OLD_ASON_DATE).format('DD/MM/YYYY');
      renew['OLD_INT_CODE'] = ele.OLD_INT_CODE
      renew['OLD_INTEREST_DATE'] = ele.OLD_INTEREST_DATE == '' || ele.OLD_INTEREST_DATE == null ? null : moment(ele.OLD_INTEREST_DATE).format('DD/MM/YYYY');
      renew['TRAN_TYPE'] = ele.TRAN_TYPE
      await this.RENEWALHISTORYService.insert(renew);
    }
    console.log('RENEWALHISTORY')

  }

  //DIVPAIDTRAN
  async DIVPAIDTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT DIVPAIDTRAN.* , SCHEMAST.S_APPL AS ACTYPE 
        FROM DIVPAIDTRAN LEFT JOIN SCHEMAST ON DIVPAIDTRAN.TRAN_ACTYPE=SCHEMAST.S_APPL`)
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let ele of data) {
        let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == ele.ACTYPE);


        // let acno = Number(ele.TRAN_ACNO) + 100000
        let acno = String(ele.TRAN_ACNO).padStart(6, '0');
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new DIVPAIDTRAN()
        // let acno: number = 0
        // acno = 100000 + ele.TRAN_ACNO
        obj['TRAN_NO'] = ele.TRAN_NO
        obj['SERIAL_NO'] = ele.SERIAL_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY');
        obj['TRAN_TIME'] = ele.TRAN_TIME
        obj['TRAN_TYPE'] = ele.TRAN_TYPE
        obj['TRAN_MODE'] = ele.TRAN_MODE
        obj['TRAN_DRCR'] = ele.TRAN_DRCR
        obj['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = schemastData[0].id
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
        obj['TRAN_GLACNO'] = ele.TRAN_GLACNO
        obj['NO_OF_SHARES'] = ele.NO_OF_SHARES
        obj['NARRATION'] = ele.NARRATION?.replace("\x00", "")
        obj['CERTIFICATE_NO'] = ele.CERTIFICATE_NO
        obj['SHARES_FROM_NO'] = ele.SHARES_FROM_NO
        obj['SHARES_TO_NO'] = ele.SHARES_TO_NO
        obj['FACE_VALUE'] = ele.FACE_VALUE
        obj['TRANSFER_ACTYPE_FROM'] = ele.TRANSFER_ACTYPE_FROM
        obj['TRANSFER_MEMBER_NO_FROM'] = ele.TRANSFER_MEMBER_NO_FROM
        obj['TRANSFER_ACTYPE_TO'] = ele.TRANSFER_ACTYPE_TO
        obj['TRANSFER_MEMBER_NO_TO'] = ele.TRANSFER_MEMBER_NO_TO
        obj['SHARES_TRANSFER_DATE'] = ele.SHARES_TRANSFER_DATE == '' || ele.SHARES_TRANSFER_DATE == null ? null : moment(ele.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
        obj['SHARES_RETURN_DATE'] = ele.SHARES_RETURN_DATE == '' || ele.SHARES_RETURN_DATE == null ? null : moment(ele.SHARES_RETURN_DATE).format('DD/MM/YYYY');
        obj['RESULATION_DATE'] = ele.RESULATION_DATE == '' || ele.RESULATION_DATE == null ? null : moment(ele.RESULATION_DATE).format('DD/MM/YYYY');
        obj['RESULATION_NO'] = ele.RESULATION_NO
        obj['AC_CLOSED'] = ele.AC_CLOSED
        obj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
        obj['CHEQUE_DATE'] = ele.CHEQUE_DATE == '' || ele.CHEQUE_DATE == null ? null : moment(ele.CHEQUE_DATE).format('DD/MM/YYYY');
        obj['CHEQUE_SERIES'] = ele.CHEQUE_SERIES
        obj['CHEQUE_NO'] = ele.CHEQUE_NO
        obj['DIVIDEND_YEAR'] = ele.DIVIDEND_YEAR
        obj['DIVIDEND_ENTRY'] = ele.DIVIDEND_ENTRY
        obj['CASHIER_CODE'] = ele.CASHIER_CODE
        obj['USER_CODE'] = ele.USER_CODE
        obj['OFFICER_CODE'] = ele.OFFICER_CODE
        obj['BONUS_AMOUNT'] = ele.BONUS_AMOUNT
        await queryRunner.manager.insert(DIVPAIDTRAN, obj);
      }
      await queryRunner.commitTransaction();
      console.log('DIVPAIDTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  // TRANSACTION - ACCOTRAN
  async ACCOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
              select ACCOTRAN.*, SCHEMAST.s_appl  from ACCOTRAN LEFT JOIN SCHEMAST ON ACCOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL 
              WHERE ACCOTRAN.TRAN_DATE > TO_DATE('27/12/2025','DD/MM/YYYY')
              order by ACCOTRAN.TRAN_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}
            `);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from ACCOTRAN WHERE ACCOTRAN.TRAN_DATE > TO_DATE('27/12/2025','DD/MM/YYYY')`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.ACCOTRANSUB(data);
  }

  async ACCOTRANSUB(data) {
    for (let item of data) {

      if (item.TRAN_ACTYPE == null) {
        continue
      }

      // let acmas = await this.ACMASTERService.query(`select * from acmaster WHERE "GL_SHEDGE"='${item.TRAN_ACNO}'`)

      //  let acmas = await this.ACMASTERService.query(`select * from acmaster WHERE "V_ACNO"='${item.TRAN_ACNO}'`)
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.TRAN_ACTYPE);

      // let obj = await this.ACCOTRANService.query(`select * from accotran where "BRANCH_CODE"='101'`)
      let tranamt = Number(item.TRAN_AMOUNT).toFixed(2)

      // // let accotranDuplicte = obj.filter(obj => obj['TRAN_ACNO'] == acmas[0].AC_NO  && obj['TRAN_TIME'] == item.TRAN_TIME && obj['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && obj['TRAN_ACTYPE'] == schemastData[0].id && obj['TRAN_GLACNO'] == item.TRAN_GLACNO && obj['TRAN_AMOUNT'] == tranamt && obj['NARRATION'] == ele.AC_NAMEATION && obj['USER_CODE'] == item.USER_CODE )
      //  let DEPOTRANDuplicate = data.filter(ele2 => ele2['GL_PARGAON'] == item.TRAN_ACNO && ele2['TRAN_TIME'] == item.TRAN_TIME && ele2['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && ele2['TRAN_ACTYPE'] == schemastData[0].id && ele2['TRAN_GLACNO'] == item.TRAN_GLACNO && ele2['BRANCH_CODE'] == this.BRANCH_CODE && ele2['TRAN_AMOUNT'] == tranamt );

      // if (accotranDuplicte.length != 0) {
      //   continue;
      // }
      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let engNarration;

      let narration = item.NARRATION?.replace("\x00", "");

      if (narration != null) {

        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)

      }

      let loanObj = new ACCOTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = 'GL';
      loanObj['TRAN_ACTYPE'] = schemastData[0].id
      // loanObj['TRAN_ACNO'] = acmas[0].AC_NO;
      loanObj['TRAN_ACNO'] = item.TRAN_ACNO
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT
      loanObj['TRAN_CONTRA'] = item.TRAN_CONTRA;
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = engNarration
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['CLOSING_ENTRY'] = item.CLOSING_ENTRY == 0 ? 0 : 1;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      // loanObj['AC_NO'] = acmas[0].GL_SHEDGE
      loanObj['STATEMENT_DATE'] = item.STATEMENT_DATE == '' || item.STATEMENT_DATE == null ? null : moment(item.STATEMENT_DATE).format('DD/MM/YYYY');
      await this.ACCOTRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.ACCOTRAN()
    } else if (this.flag == 1) {
      console.log('ACCOTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.ACCOTRAN()
    }
  }
  //----------- DEPOTRAN
  async DEPOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOTRAN.*, SCHEMAST.S_APPL from DEPOTRAN LEFT JOIN SCHEMAST ON DEPOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by DEPOTRAN.REF_ID 
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}
      order by offset asc
      `);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DEPOTRANSUB(data);
  }
  async DEPOTRANSUB(data) {
    for (let item of data) {
      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let engNarration;
      if (item.TRAN_ACTYPE == null) {
        continue
      }

      let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == item.TRAN_ACTYPE);
      // let acno = Number(item.TRAN_ACNO) + 100000
      let acno = String(item.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno

      // let data = await this.DEPOTRANService.query(`select * from DEPOTRAN where "TRAN_DATE"='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}'`)
      // // console.log(`
      // // select * from DEPOTRAN where CAST("TRAN_DATE" AS DATE) ='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}'
      // // `);
      //   let tranamt = Number(item.TRAN_AMOUNT).toFixed(2)
      // let DEPOTRANDuplicate = data.filter(ele2 => ele2['TRAN_ACNO'] == BANKACNO && ele2['TRAN_TIME'] == item.TRAN_TIME && ele2['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && ele2['TRAN_ACTYPE'] == schemastData[0].id && ele2['TRAN_GLACNO'] == item.TRAN_GLACNO && ele2['BRANCH_CODE'] == this.BRANCH_CODE && ele2['TRAN_AMOUNT'] == tranamt );

      // if (DEPOTRANDuplicate.length != 0) {
      //   continue;
      // }
      let narration = item.NARRATION?.replace("\x00", "") == undefined || item.NARRATION?.replace("\x00", "") == null ? null : item.NARRATION?.replace("\x00", "").trim();

      if (narration != null) {

        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)

      }

      let loanObj = new DEPOTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = schemastData[0].id;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = engNarration;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == null ? 0 : item.INTEREST_AMOUNT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['PENAL_INTEREST'] = item.PENAL_INTEREST == null ? 0 : item.PENAL_INTEREST;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? '0' : '1';
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == null ? 0 : item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT == null ? 0 : item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT == null ? 0 : item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT == null ? 0 : item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT == null ? 0 : item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT == null ? 0 : item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT == null ? 0 : item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT == null ? 0 : item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT == null ? 0 : item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT == null ? 0 : item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT == null ? 0 : item.OTHER10_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['ADDED_PENAL_INTEREST'] = item.ADDED_PENAL_INTEREST == null ? 0 : item.ADDED_PENAL_INTEREST;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT == null ? 0 : item.REC_PENAL_INT_AMOUNT;
      loanObj['IS_DORMANT'] = item.IS_DORMANT == 0 ? 0 : 1;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT == null ? 0 : item.OTHER11_AMOUNT;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 1 ? 1 : 0;
      loanObj['REF_ID'] = item.REF_ID
      console.log("REF_ID:", item.REF_ID)
      await this.DEPOTRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DEPOTRAN()
    } else if (this.flag == 1) {
      console.log('DEPOTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DEPOTRAN()
    }
  }

  //loantran
  async LOANTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select LOANTRAN.*, SCHEMAST.S_APPL AS ACTYPE from LOANTRAN
         LEFT JOIN SCHEMAST ON LOANTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
      order by LOANTRAN.TRAN_DATE
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LOANTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LOANTRANSUB(data);
  }
  async LOANTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      // let schemastData = this.PostSchemast.filter(ele => ele['ACTYPE'] == item.ACTYPE);

      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let engNarration;

      let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == item.TRAN_ACTYPE);

      // let acno = Number(item.TRAN_ACNO) + 100000
      let acno = String(item.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno

      let narration = item.NARRATION?.replace("\x00", "");

      if (narration != null) {

        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)

      }

      let loanObj = new LOANTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = schemastData[0].id;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = engNarration;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['NORMAL_INTEREST'] = item.NORMAL_INTEREST == null ? 0 : (item.NORMAL_INTEREST);
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == null ? 0 : (item.INTEREST_AMOUNT);
      loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO == null ? 0 : parseInt(item.INTEREST_GLACNO)
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['PENAL_INTEREST'] = item.PENAL_INTEREST == null ? 0 : item.PENAL_INTEREST;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? '0' : '1';
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == null ? 0 : item.RECPAY_INT_AMOUNT
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT == null ? 0 : item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT == null ? 0 : item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT == null ? 0 : item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT == null ? 0 : item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT == null ? 0 : item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT == null ? 0 : item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT == null ? 0 : item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT == null ? 0 : item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT == null ? 0 : item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT == null ? 0 : item.OTHER10_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['ADDED_PENAL_INTEREST'] = item.ADDED_PENAL_INTEREST == null ? 0 : item.ADDED_PENAL_INTEREST;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT == null ? 0 : item.REC_PENAL_INT_AMOUNT;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT == null ? 0 : item.OTHER11_AMOUNT;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 1 ? '1' : '0';
      //loanObj['OID'] = item.ID;
      await this.LOANTRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.LOANTRAN()
    } else if (this.flag == 1) {
      console.log('LOANTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.LOANTRAN()
    }
  }

  // ------------------- PIGMYTRAN
  async PIGMYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select PIGMYTRAN.*, SCHEMAST.S_APPL from PIGMYTRAN
         LEFT JOIN SCHEMAST ON PIGMYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
         WHERE PIGMYTRAN.TRAN_DATE > TO_DATE('23-11-2025','DD/MM/YYYY')
        order by PIGMYTRAN.TRAN_DATE ASC
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PIGMYTRAN WHERE PIGMYTRAN.TRAN_DATE > TO_DATE('23-11-2025','DD/MM/YYYY')`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close();
    this.count = result1[0].COUNT;
    await this.PIGMYTRANSUB(data);
  }
  async PIGMYTRANSUB(data) {
    for (let item of data) {
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.TRAN_ACTYPE);
      let AGENT_ACTYPE = null
      let agentschemastData = null
      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let engNarration;
      if (item.AGENT_ACTYPE != null) {
        // AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.AGENT_ACTYPE);
      }
      let agentBANKACNO = null
      if (item.AGENT_ACNO != 0 && agentschemastData != null) {
        // let agentacno = Number(item.AGENT_ACNO) + 100000
        let agentacno = String(item.AGENT_ACNO).padStart(6, '0');
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      // let data = await this.PIGMYTRANService.query(`select * from PIGMYTRAN where "TRAN_DATE"='${moment(item.TRAN_DATE).format(Z'DD/MM/YYYY')}' and "BRANCH_CODE"=104 `)
      // // console.log(`
      // // select * from DEPOTRAN where CAST("TRAN_DATE" AS DATE) ='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}'
      // // `);
      //   let tranamt = Number(item.TRAN_AMOUNT).toFixed(2)
      // let histranDuplicate = data.filter(ele2 => ele2['TRAN_ACNO'] == BANKACNO && ele2['TRAN_TIME'] == item.TRAN_TIME && ele2['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && ele2['TRAN_ACTYPE'] == schemastData[0].id && ele2['TRAN_GLACNO'] == item.TRAN_GLACNO && ele2['BRANCH_CODE'] == this.BRANCH_CODE && ele2['TRAN_AMOUNT'] == tranamt );

      let narration = item.NARRATION == undefined || item.NARRATION == null ? null : item.NARRATION?.replace("\x00", "")

      if (narration != null) {

        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)

      }


      // let acno = Number(item.TRAN_ACNO) + 100000
      let acno = String(item.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new PIGMYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO == undefined || item.TRAN_NO == null ? 0 : item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO == undefined || item.TRAN_NO == null ? 0 : item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = 2
      }
      loanObj['ENTRY_TYPE'] = item.ENTRY_TYPE;
      loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
      loanObj['AGENT_ACTYPE'] = agentschemastData == null ? 0 : agentschemastData[0].id;
      loanObj['AGENT_ACNO'] = agentBANKACNO == null ? 0 : agentBANKACNO;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = schemastData == null ? 0 : schemastData[0].id;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO == null ? 0 : item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES == null ? 0 : item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO == null ? 0 : item.CHEQUE_NO;
      loanObj['NARRATION'] = engNarration
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE == null ? 0 : item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE == null ? 0 : item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE == null ? 0 : item.OFFICER_CODE;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == null ? 0 : item.INTEREST_AMOUNT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == null ? 0 : item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT == null ? 0 : item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT == null ? 0 : item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT == null ? 0 : item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT == null ? 0 : item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT == null ? 0 : item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT == null ? 0 : item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT == null ? 0 : item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT == null ? 0 : item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT == null ? 0 : item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT == null ? 0 : item.OTHER10_AMOUNT;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT == null ? 0 : item.OTHER11_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE == 0 ? 0 : item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO == null ? 0 : item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['CHART_NO'] = item.CHART_NO == null ? 0 : item.CHART_NO;
      loanObj['RECEIPT_NO'] = item.RECEIPT_NO == null ? 0 : item.RECEIPT_NO;
      loanObj['EDIT_USER'] = item.EDIT_USER == null ? 0 : item.EDIT_USER;
      loanObj['EDIT_DATE'] = item.EDIT_DATE == '' || item.EDIT_DATE == null ? null : moment(item.EDIT_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_DATE'] = item.AUTO_VOUCHER_DATE == '' || item.AUTO_VOUCHER_DATE == null ? null : moment(item.AUTO_VOUCHER_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_NO'] = item.AUTO_VOUCHER_NO == null ? 0 : item.AUTO_VOUCHER_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      await this.pigmytran3Repository.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.PIGMYTRAN()
    } else if (this.flag == 1) {
      console.log('PIGMYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.PIGMYTRAN()
    }

  }
  //----------------- SHARETRAN
  async SHARETRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select SHARETRAN.*, SCHEMAST.S_APPL from SHARETRAN LEFT JOIN SCHEMAST ON SHARETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
      order by SHARETRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHARETRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.SHARETRANSUB(data);
  }
  async SHARETRANSUB(data) {
    for (let item of data) {
      if (item.TRAN_ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.TRAN_ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      // let acno = String(item.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno

      let font = 'DVBW-TTYogeshEn';
      let marathiName;
      let engNarration;

      let narration = item.NARRATION?.replace("\x00", "");

      if (narration != null) {

        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)

      }

      let loanObj = new SHARETRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = schemastData[0].id;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
      loanObj['NARRATION'] = engNarration
      loanObj['CERTIFICATE_NO'] = item.CERTIFICATE_NO;
      loanObj['SHARES_FROM_NO'] = item.SHARES_FROM_NO;
      loanObj['SHARES_TO_NO'] = item.SHARES_TO_NO;
      loanObj['FACE_VALUE'] = item.FACE_VALUE;
      loanObj['TRANSFER_ACTYPE_FROM'] = item.TRANSFER_ACTYPE_FROM;
      loanObj['TRANSFER_MEMBER_NO_FROM'] = item.TRANSFER_MEMBER_NO_FROM == 0 ? null : item.TRANSFER_MEMBER_NO_FROM;
      loanObj['TRANSFER_ACTYPE_TO'] = item.TRANSFER_ACTYPE_TO;
      loanObj['TRANSFER_MEMBER_NO_TO'] = item.TRANSFER_MEMBER_NO_TO == 0 ? null : item.TRANSFER_MEMBER_NO_TO;
      loanObj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE == '' || item.SHARES_TRANSFER_DATE == null ? null : moment(item.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
      loanObj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE == '' || item.SHARES_RETURN_DATE == null ? null : moment(item.SHARES_RETURN_DATE).format('DD/MM/YYYY');
      loanObj['RESULATION_DATE'] = item.RESULATION_DATE == '' || item.RESULATION_DATE == null ? null : moment(item.RESULATION_DATE).format('DD/MM/YYYY');
      loanObj['RESULATION_NO'] = item.RESULATION_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      loanObj['AC_CLOSEDT'] = item.AC_CLOSEDT == '' || item.AC_CLOSEDT == null ? null : moment(item.AC_CLOSEDT).format('DD/MM/YYYY');
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED;
      loanObj['NEW_DATE'] = item.NEW_DATE == '' || item.NEW_DATE == null ? null : moment(item.NEW_DATE).format('DD/MM/YYYY');
      await this.SHARETRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.SHARETRAN()
    } else if (this.flag == 1) {
      console.log('SHARETRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.SHARETRAN()
    }

  }
  //----------------- INTERESTTRAN
  async INTERESTTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select INTERESTTRAN.*, SCHEMAST.S_APPL AS ACTYPE from INTERESTTRAN LEFT JOIN SCHEMAST ON INTERESTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        WHERE INTERESTTRAN.REF_ID > 9000
        order by INTERESTTRAN.REF_ID
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from INTERESTTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.INTERESTTRANSUB(data);
  }
  async INTERESTTRANSUB(data) {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.ACTYPE);
        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let loanObj = new INTERESTTRAN();
        loanObj['TRAN_NO'] = item.TRAN_NO;
        loanObj['SERIAL_NO'] = item.SERIAL_NO;
        loanObj['BRANCH_CODE'] = 101;
        loanObj['TRAN_DATE'] = moment(item.TRAN_DATE).format('DD/MM/YYYY');
        loanObj['TRAN_TIME'] = item.TRAN_TIME;
        loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
        loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
        loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
        loanObj['TRAN_ACTYPE'] = schemastData[0].id;
        loanObj['TRAN_ACNO'] = BANKACNO;
        loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
        loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO;
        loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
        loanObj['NARRATION'] = item.NARRATION?.replace("\x00", "");
        loanObj['CERTIFICATE_NO'] = item.CERTIFICATE_NO;
        loanObj['SHARES_FROM_NO'] = item.SHARES_FROM_NO;
        loanObj['SHARES_TO_NO'] = item.SHARES_TO_NO;
        loanObj['FACE_VALUE'] = item.FACE_VALUE;
        loanObj['TRANSFER_ACTYPE_FROM'] = item.TRANSFER_ACTYPE_FROM;
        loanObj['TRANSFER_MEMBER_NO_FROM'] = item.TRANSFER_MEMBER_NO_FROM;
        loanObj['TRANSFER_ACTYPE_TO'] = item.TRANSFER_ACTYPE_TO;
        loanObj['TRANSFER_MEMBER_NO_TO'] = item.TRANSFER_MEMBER_NO_TO;
        loanObj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE;
        loanObj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE;
        loanObj['RESULATION_DATE'] = item.RESULATION_DATE;
        loanObj['RESULATION_NO'] = item.RESULATION_NO;
        loanObj['AC_CLOSED'] = item.AC_CLOSED;
        loanObj['AC_CLOSEDT'] = item.AC_CLOSEDT;
        loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? '' : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
        loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
        loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
        loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
        loanObj['DIVIDEND_ENTRY'] = item.DIVIDEND_ENTRY;
        loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
        loanObj['USER_CODE'] = item.USER_CODE;
        loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
        loanObj['TRAN_SOURCETYPE'] = item.TRAN_SOURCETYPE;
        loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
        loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
        loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
        loanObj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED;
        loanObj['NEW_DATE'] = item.NEW_DATE == '' || item.NEW_DATE == null ? '' : moment(item.NEW_DATE).format('DD/MM/YYYY');
        loanObj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO
        loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
        loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
        loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
        loanObj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
        loanObj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
        loanObj['TRAN_STATUS'] = 0
        loanObj['INTEREST_DATE'] = moment(item.INTEREST_DATE).format('DD/MM/YYYY');
        loanObj['LAST_INTEREST_DATE'] = moment(item.LAST_INTEREST_DATE).format('DD/MM/YYYY');
        loanObj['INTEREST_RATE'] = item.INTEREST_RATE
        loanObj['TD_SCHEME_AMOUNT'] = item.TD_SCHEME_AMOUNT
        loanObj['LEDGER_BALANCE'] = item.LEDGER_BALANCE
        loanObj['TOTAL_PRODUCTS'] = item.TOTAL_PRODUCTS

        loanObj['AC_OPEN_DATE'] = moment(item.AC_OPEN_DATE).format('DD/MM/YYYY');
        loanObj['EXPIRY_DATE'] = moment(item.EXPIRY_DATE).format('DD/MM/YYYY');
        loanObj['MONTHS'] = item.MONTHS
        loanObj['DAYS'] = item.DAYS
        loanObj['POST_TO_INDIVIDUAL_AC'] = item.POST_TO_INDIVIDUAL_AC
        loanObj['POST_PENALINT_IN_INTEREST'] = item.POST_PENALINT_IN_INTEREST
        loanObj['DAILYTRAN_POST_NO'] = item.DAILYTRAN_POST_NO
        loanObj['ODUE_INT_AMOUNT'] = item.ODUE_INT_AMOUNT
        loanObj['ODUE_INT_GLACNO'] = item.ODUE_INT_GLACNO
        loanObj['IS_POST_PENAL_TO_AC'] = item.IS_POST_PENAL_TO_AC
        loanObj['RECPAY_INT_OPENING'] = item.RECPAY_INT_OPENING
        loanObj['ODUE_INT_AMOUNT'] = item.ODUE_INT_AMOUNT

        loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
        loanObj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO
        loanObj['RECPENAL_INT_OPENING'] = item.RECPENAL_INT_OPENING
        loanObj['TRAN_MODE'] = item.TRAN_MODE
        loanObj['REF_ID'] = item.REF_ID
        console.log(item.REF_ID)
        await this.INTERESTTRANService.save(loanObj)
        // await queryRunner.manager.save(INTERESTTRAN, loanObj);
      }
      if (this.offset <= this.count && this.flag == 0) {
        this.offset = this.offset + 1000;
        await this.INTERESTTRAN()
      } else if (this.flag == 1) {
        console.log('INTERESTTRAN');
        this.offset = 0
        this.flag = 0
      }
      else if (this.flag == 0 && this.offset != 0) {
        this.offset = this.offset + 1000;
        this.flag = 1
        await this.INTERESTTRAN()
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DIVIDEND() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select dividend.*, SCHEMAST.TYPEID AS ACTYPE1 from dividend LEFT JOIN SCHEMAST ON dividend.ACTYPE= SCHEMAST.S_APPL order by dividend.WARRENT_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new DIVIDEND()
        let acno = Number(item.AC_NO) + 100000
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE1);
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        obj['WARRENT_DATE'] = item.WARRENT_DATE == '' || item.WARRENT_DATE == null ? '' : moment(item.WARRENT_DATE).format('DD/MM/YYYY');
        obj['WARRENT_NO'] = item.WARRENT_NO
        obj['DIV_FROM_YEAR'] = item.DIV_FROM_YEAR
        obj['DIV_TO_YEAR'] = item.DIV_TO_YEAR
        obj['DIV_FROM_MONTH'] = item.DIV_FROM_MONTH
        obj['DIV_TO_MONTH'] = item.DIV_TO_MONTH
        obj['ACNOTYPE'] = item.ACNOTYPE
        obj['ACTYPE'] = item.ACTYPE
        obj['AC_NO'] = BANKACNO
        obj['TOTAL_SHARES'] = item.TOTAL_SHARES
        obj['TOTAL_SHARES_AMOUNT'] = item.TOTAL_SHARES_AMOUNT
        obj['DIVIDEND_AMOUNT'] = item.DIVIDEND_AMOUNT
        if (item.DIVIDEND_STATUS == 'UP') {
          obj['DIVIDEND_STATUS'] = 0
        }
        else if (item.DIVIDEND_STATUS == 'PS') {
          obj['DIVIDEND_STATUS'] = 1
        }
        else if (item.DIVIDEND_STATUS == 'RJ') {
          obj['DIVIDEND_STATUS'] = 2
        }
        obj['DIV_PAID_DATE'] = item.DIV_PAID_DATE == '' || item.DIV_PAID_DATE == null ? '' : moment(item.DIV_PAID_DATE).format('DD/MM/YYYY');
        obj['DIV_TRANSFER_DATE'] = item.DIV_TRANSFER_DATE == '' || item.DIV_TRANSFER_DATE == null ? '' : moment(item.DIV_TRANSFER_DATE).format('DD/MM/YYYY');
        obj['DIV_TRANSFER_BRANCH'] = item.DIV_TRANSFER_BRANCH
        obj['DIV_TRANSFER_ACNOTYPE'] = item.DIV_TRANSFER_ACNOTYPE
        obj['DIV_TRANSFER_ACTYPE'] = item.DIV_TRANSFER_ACTYPE
        obj['DIV_TRANSFER_ACNO'] = item.DIV_TRANSFER_ACNO
        obj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE == '' || item.MEMBER_CLOSE_DATE == null ? '' : moment(item.MEMBER_CLOSE_DATE).format('DD/MM/YYYY');
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['BONUS_AMOUNT'] = item.BONUS_AMOUNT
        await queryRunner.manager.insert(DIVIDEND, obj)
      }
      await queryRunner.commitTransaction();
      console.log('dividend')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //------------- HISTORYDIVIDEND
  async HISTORYDIVIDEND() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select HISTORYDIVIDEND.*, SCHEMAST.S_APPL AS ACTYPE1 from HISTORYDIVIDEND 
        LEFT JOIN SCHEMAST ON HISTORYDIVIDEND.ACTYPE= SCHEMAST.S_APPL
        order by HISTORYDIVIDEND.WARRENT_DATE
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from HISTORYDIVIDEND`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.HISTORYDIVIDENDSUB(data);
  }
  async HISTORYDIVIDENDSUB(data) {

    for (let item of data) {
      if (item.ACTYPE1 == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.ACTYPE);

      // let schemastData = this.PostSchemast.ACTYPE == item.ACTYPE1;
      // let acno = Number(item.AC_NO) + 100000
      let acno = String(item.AC_NO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      // let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + '901' + acno
      let loanObj = new HISTORYDIVIDEND();
      loanObj['WARRENT_DATE'] = moment(item.WARRENT_DATE).format('DD/MM/YYYY');
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['ACNOTYPE'] = item.ACNOTYPE;
      loanObj['ACTYPE'] = schemastData[0].id;
      // loanObj['ACTYPE'] = 1
      loanObj['AC_NO'] = BANKACNO
      loanObj['TOTAL_SHARES'] = item.TOTAL_SHARES;
      loanObj['TOTAL_SHARES_AMOUNT'] = item.TOTAL_SHARES_AMOUNT == null ? 0 : item.TOTAL_SHARES_AMOUNT;
      loanObj['DIV_PAID_DATE'] = item.DIV_PAID_DATE;
      loanObj['DIV_TRANSFER_DATE'] = item.DIV_TRANSFER_DATE;
      loanObj['DIV_TRANSFER_BRANCH'] = item.DIV_TRANSFER_BRANCH;
      loanObj['DIV_TRANSFER_ACNOTYPE'] = item.DIV_TRANSFER_ACNOTYPE;
      loanObj['DIV_TRANSFER_ACTYPE'] = item.DIV_TRANSFER_ACTYPE;
      loanObj['DIV_TRANSFER_ACNO'] = item.DIV_TRANSFER_ACNO == null ? 0 : item.DIV_TRANSFER_ACNO;
      loanObj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['IS_LESS_EXPIRE_DATE'] = item.IS_LESS_EXPIRE_DATE;
      loanObj['AC_SALARYDIVISION_CODE'] = item.AC_SALARYDIVISION_CODE;
      loanObj['SUB_SALARYDIVISION_CODE'] = item.SUB_SALARYDIVISION_CODE;
      loanObj['WARRENT_NO'] = item.WARRENT_NO;
      loanObj['DIVIDEND_AMOUNT'] = item.DIVIDEND_AMOUNT == null ? 0 : item.DIVIDEND_AMOUNT;
      loanObj['DIVIDEND_STATUS'] = item.STATUS;
      loanObj['BONUS_AMOUNT'] = item.BONUS_AMOUNT == null ? 0 : item.BONUS_AMOUNT;
      loanObj['DIV_FROM_YEAR'] = item.DIV_FROM_YEAR;
      loanObj['DIV_TO_YEAR'] = item.DIV_TO_YEAR;
      await this.HISTORYDIVIDENDService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.HISTORYDIVIDEND()
    } else if (this.flag == 1) {
      console.log('HISTORYDIVIDEND');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.HISTORYDIVIDEND()
    }
  }
  //------------- HISTORYTRAN
  async HISTORYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select HISTORYTRAN.*, SCHEMAST.S_APPL from HISTORYTRAN LEFT JOIN SCHEMAST 
        ON HISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by HISTORYTRAN.TRAN_DATE   
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}
      `);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from HISTORYTRAN `);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.HISTORYTRANSUB(data);
  }
  async HISTORYTRANSUB(data) {

    let font = 'DVBW-TTYogeshEn';
    let marathiName;
    let engNarration;

    for (let item of data) {
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.S_APPL);
      let AGENT_ACTYPE = null
      let agentschemastData = null
      if (item.AGENT_ACTYPE != null && item.AGENT_ACTYPE != '0') {
        // AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.AGENT_ACTYPE);
      }
      let acno
      let BANKACNO
      if (item.TRAN_ACNOTYPE == 'GL') {
        acno = item.TRAN_ACNO
        BANKACNO = item.TRAN_ACNO
      }
      else {
        acno = Number(item.TRAN_ACNO) + 100000
        // let acno = String(item.TRAN_ACNO).padStart(6, '0');
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      }
      let agentBANKACNO = null
      if (item.AGENT_ACTYPE != null && item.AGENT_ACTYPE != '0') {
        let agentacno = Number(item.AGENT_ACNO) + 100000
        // let agentacno = String(item.AGENT_ACNO).padStart(6, '0');
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      //let data = await this.HISTORYTRANService.query(`select * from historytran where "TRAN_DATE"='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}' and "BRANCH_CODE"=101 `)
      // console.log(`
      // select * from DEPOTRAN where CAST("TRAN_DATE" AS DATE) ='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}'
      // `);
      let tranamt = Number(item.TRAN_AMOUNT).toFixed(2)
      let histranDuplicate = data.filter(ele2 => ele2['TRAN_ACNO'] == BANKACNO && ele2['TRAN_TIME'] == item.TRAN_TIME && ele2['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && ele2['TRAN_ACTYPE'] == schemastData[0].id && ele2['TRAN_GLACNO'] == item.TRAN_GLACNO && ele2['BRANCH_CODE'] == this.BRANCH_CODE && ele2['TRAN_AMOUNT'] == tranamt);

      if (histranDuplicate.length != 0) {
        continue;
      }

      let narration = item?.NARRATION?.replace("\x00", "");

      if (narration != null) {
        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)
      }


      let loanObj = new HISTORYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['TRAN_BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['SYSTRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = schemastData[0].id;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TOTAL_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO == null ? 0 : item.TRAN_GLACNO
      loanObj['AGENT_ACNOTYPE'] = 'AG';
      loanObj['AGENT_ACTYPE'] = AGENT_ACTYPE == null ? null : AGENT_ACTYPE[0]?.TYPEID;
      loanObj['AGENT_ACNO'] = agentBANKACNO == null ? null : agentBANKACNO;
      loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO == null ? 0 : item.INTEREST_GLACNO
      loanObj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO == null ? 0 : item.RECPAY_INT_GLACNO
      loanObj['DD_COMMISSION_ACNO'] = item.DD_COMMISSION_ACNO == null ? 0 : item.DD_COMMISSION_ACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = 2
      }
      loanObj['NARRATION'] = engNarration
      loanObj['TOKEN_NO'] = item.TOKEN_NO == null ? 0 : item.TOKEN_NO;
      loanObj['DD_PREPARED'] = item.DD_PREPARED == 0 ? 0 : 1;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES == null ? 0 : item.NO_OF_SHARES
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == null || item.RECPAY_INT_AMOUNT == undefined ? 0 : item.RECPAY_INT_AMOUNT
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == '' || item.INTEREST_AMOUNT == null || item.INTEREST_AMOUNT == undefined ? 0 : item.INTEREST_AMOUNT;
      loanObj['DD_COMMISSION_AMT'] = item.DD_COMMISSION_AMT == null || item.DD_COMMISSION_AMT == undefined ? 0 : item.DD_COMMISSION_AMT

      // loanObj['DD_COMMISSION_AMT'] = item.DD_COMMISSION_AMT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['OTHER1_ACNO'] = item.OTHER1_ACNO == null ? 0 : item.OTHER1_ACNO;
      loanObj['OTHER2_ACNO'] = item.OTHER2_ACNO == null ? 0 : item.OTHER2_ACNO;
      loanObj['OTHER3_ACNO'] = item.OTHER3_ACNO == null ? 0 : item.OTHER3_ACNO;
      loanObj['OTHER4_ACNO'] = item.OTHER4_ACNO == null ? 0 : item.OTHER4_ACNO;
      loanObj['OTHER5_ACNO'] = item.OTHER5_ACNO == null ? 0 : item.OTHER5_ACNO;
      loanObj['OTHER6_ACNO'] = item.OTHER6_ACNO == null ? 0 : item.OTHER6_ACNO;
      loanObj['OTHER7_ACNO'] = item.OTHER7_ACNO == null ? 0 : item.OTHER7_ACNO;
      loanObj['OTHER8_ACNO'] = item.OTHER8_ACNO == null ? 0 : item.OTHER8_ACNO;
      loanObj['OTHER9_ACNO'] = item.OTHER9_ACNO == null ? 0 : item.OTHER9_ACNO;
      loanObj['OTHER10_ACNO'] = item.OTHER10_ACNO == null ? 0 : item.OTHER10_ACNO;
      loanObj['OTHER11_ACNO'] = item.OTHER11_ACNO == null ? 0 : item.OTHER11_ACNO;

      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT == null ? 0 : item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT == null ? 0 : item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT == null ? 0 : item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT == null ? 0 : item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT == null ? 0 : item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT == null ? 0 : item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT == null ? 0 : item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT == null ? 0 : item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT == null ? 0 : item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT == null ? 0 : item.OTHER10_AMOUNT;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT == null ? 0 : item.OTHER11_AMOUNT;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? 0 : 1;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT == null ? 0 : item.PENAL_INT_AMOUNT;
      loanObj['EXP_AMOUNT_FROM_PREPARATION'] = item.EXP_AMOUNT_FROM_PREPARATION;
      loanObj['TRAN_SOURCE_TYPE'] = item.TRAN_SOURCE_TYPE;
      loanObj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO == null ? 0 : item.TRAN_SOURCE_NO;
      loanObj['CASH_REMITANCE_STATUS'] = item.CASH_REMITANCE_STATUS;
      loanObj['CASH_SEND_WITH_PERSON'] = item.CASH_SEND_WITH_PERSON;
      loanObj['DENO_TRAN_NO'] = item.DENO_TRAN_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['CLOSING_ENTRY'] = item.CLOSING_ENTRY == 0 ? 0 : 1;
      loanObj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO == null ? 0 : item.HO_SUB_GLACNO;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['IS_DDPAYORDER_ENTRY'] = item.IS_DDPAYORDER_ENTRY == 0 ? 0 : 1;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT == null ? 0 : item.REC_PENAL_INT_AMOUNT;
      loanObj['DIV_PAID_YEARS'] = item.DIV_PAID_YEARS;
      loanObj['OD_INT_DATE'] = item.OD_INT_DATE == '' || item.OD_INT_DATE == null ? null : moment(item.OD_INT_DATE).format('DD/MM/YYYY');
      loanObj['IS_DORMANT'] = item.IS_DORMANT == 0 ? 0 : 1;
      loanObj['NARR_TYPE'] = item.NARR_TYPE;
      loanObj['SANCTIONED_CASH_LIMIT'] = item.SANCTIONED_CASH_LIMIT == null ? 0 : item.SANCTIONED_CASH_LIMIT;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 1 ? 1 : 0;
      loanObj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO == null ? 0 : item.PENAL_INT_GLACNO
      loanObj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO == null ? 0 : item.REC_PENAL_INT_GLACNO
      loanObj['TRANSFER_BRANCH'] = item.TRANSFER_BRANCH == 0 ? null : item.TRANSFER_BRANCH;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      //loanObj['REF_ID'] = item.REF_ID;
      await this.HISTORYTRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.HISTORYTRAN()
    } else if (this.flag == 1) {
      console.log('HISTORYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.HISTORYTRAN()
    }

  }
  //----------- DAILYTRAN
  async DAILYTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      // let result = await connection2.execute('select HISTORYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from HISTORYTRAN LEFT JOIN SCHEMAST ON HISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by HISTORYTRAN.TRAN_NO')
      let result = await connection2.execute(`select dailytran.*, SCHEMAST.S_APPL AS ACTYPE from dailytran LEFT JOIN SCHEMAST ON dailytran.TRAN_ACTYPE= SCHEMAST.S_APPL
        WHERE dailytran.TRAN_NO > 57
        order by dailytran.TRAN_NO`)
      //get maxcount of row
      let datacount = await connection2.execute(`select count(*) as count from dailytran  WHERE dailytran.TRAN_NO > 57`);
      await connection2.close()
      var result1 = await this.jsonConverter(datacount);
      this.count = result1[0].COUNT;
      let data = await this.jsonConverter(result);
      let marathiName
      let font = 'DVBW-TTYogeshEn';
      let engNarration

      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }

        let narration = item.NARRATION?.replace("\x00", "");

        if (narration != null) {
          marathiName = unidev(narration, 'hindi', `${font}`);

          if (font === 'DVBW-TTYogeshEn') {
            if (marathiName.includes('×')) {
              marathiName = marathiName.replace(/×(.)/g, '$1ि');
            }
            if (marathiName.includes('Ø')) {
              marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
            }
            if (marathiName.includes('Ô')) {

              marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
              marathiName = marathiName.replace(/Ô/g, 'र्');
            }
          }

          engNarration = this.translatefullwords(marathiName)
        }

        let schemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.ACTYPE);
        let AGENT_ACTYPE = null
        let agentschemastData = null
        if (item.AGENT_ACTYPE != null) {
          //  AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
          agentschemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.AGENT_ACTYPE);
          // let AGENTTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${item.AGENT_ACTYPE}`);

          // let AGENTTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${item.AGENT_ACTYPE}`)
          // AGENT_ACTYPE = await this.jsonConverter(AGENT_ACTYPE);
          // agentschemastData = await this.SCHEMASTService.find({
          //   where: {
          //     AC_TYPE: AGENT_ACTYPE[0].S_APPL
          //   }
          // })
        }
        let acno
        let BANKACNO
        if (item.TRAN_ACNOTYPE == 'GL') {
          acno = item.TRAN_ACNO
          BANKACNO = item.TRAN_ACNO
        }
        else {
          // acno = Number(item.TRAN_ACNO) + 100000
          acno = String(item.TRAN_ACNO).padStart(6, '0');
          BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        }
        let agentBANKACNO = null
        if (item.AGENT_ACNO != 0 && agentschemastData != null) {
          // let agentacno = Number(item.AGENT_ACNO) + 100000
          let agentacno = String(item.TRAN_ACNO).padStart(6, '0');
          agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
        }
        let loanObj = new DAILYTRAN();
        loanObj['TRAN_NO'] = item.TRAN_NO;
        loanObj['SERIAL_NO'] = item.SERIAL_NO;
        loanObj['TRAN_BRANCH_CODE'] = this.BRANCH_CODE;
        loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
        loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        loanObj['TRAN_TIME'] = item.TRAN_TIME;
        loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
        loanObj['SYSTRAN_TYPE'] = item.TRAN_TYPE;
        loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
        loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
        loanObj['TRAN_ACTYPE'] = schemastData[0].id
        loanObj['TRAN_ACNO'] = BANKACNO;
        loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
        loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
        loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
        loanObj['AGENT_ACTYPE'] = AGENT_ACTYPE == null ? null : AGENT_ACTYPE[0].id;
        loanObj['AGENT_ACNO'] = agentBANKACNO;
        loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
        loanObj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO
        loanObj['DD_COMMISSION_ACNO'] = item.DD_COMMISSION_ACNO
        loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
        loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
        loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
        if (item.TRAN_STATUS == 'UP') {
          loanObj['TRAN_STATUS'] = 0
        }
        else if (item.TRAN_STATUS == 'PS') {
          loanObj['TRAN_STATUS'] = 1
        }
        else if (item.TRAN_STATUS == 'RJ') {
          loanObj['TRAN_STATUS'] = 2
        }
        //item.NARRATION?.replace("\x00", "");
        loanObj['NARRATION'] = engNarration
        loanObj['TOKEN_NO'] = item.TOKEN_NO;
        loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;

        loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == '' || item.RECPAY_INT_AMOUNT == undefined ? 0 : item.RECPAY_INT_AMOUNT;
        loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
        loanObj['DD_COMMISSION_AMT'] = item.DD_COMMISSION_AMT;
        loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
        loanObj['OTHER1_ACNO'] = item.OTHER1_ACNO;
        loanObj['OTHER2_ACNO'] = item.OTHER2_ACNO;
        loanObj['OTHER3_ACNO'] = item.OTHER3_ACNO;
        loanObj['OTHER4_ACNO'] = item.OTHER4_ACNO;
        loanObj['OTHER5_ACNO'] = item.OTHER5_ACNO;
        loanObj['OTHER6_ACNO'] = item.OTHER6_ACNO;
        loanObj['OTHER7_ACNO'] = item.OTHER7_ACNO;
        loanObj['OTHER8_ACNO'] = item.OTHER8_ACNO;
        loanObj['OTHER9_ACNO'] = item.OTHER9_ACNO;
        loanObj['OTHER10_ACNO'] = item.OTHER10_ACNO;
        loanObj['OTHER11_ACNO'] = item.OTHER11_ACNO;
        loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
        loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
        loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
        loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
        loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
        loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
        loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
        loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
        loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
        loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
        loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
        loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
        loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
        loanObj['USER_CODE'] = item.USER_CODE;
        loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
        loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
        loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
        loanObj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
        loanObj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT;
        loanObj['TRAN_SOURCE_TYPE'] = item.TRAN_SOURCE_TYPE;
        loanObj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO;
        loanObj['CASH_REMITANCE_STATUS'] = item.CASH_REMITANCE_STATUS;
        loanObj['CASH_SEND_WITH_PERSON'] = item.CASH_SEND_WITH_PERSON;
        loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
        loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
        loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
        loanObj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO
        loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
        loanObj['TRANSFER_BRANCH'] = item.TRANSFER_BRANCH == 0 ? null : item.TRANSFER_BRANCH;
        loanObj['TRAN_MODE'] = item.TRAN_MODE;

        await this.DAILYTRANService.save(loanObj)
        // await queryRunner.manager.save(DAILYTRAN, loanObj);
      }
      await queryRunner.commitTransaction();
      await connection2.close()
      console.log('Dailytran');
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async AGENTCHANGEHISTORY() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select AGENTCHANGEHISTORY.*, SCHEMAST.TYPEID AS ACTYPE from AGENTCHANGEHISTORY LEFT JOIN SCHEMAST ON AGENTCHANGEHISTORY.AC_TYPE= SCHEMAST.S_APPL  order by AGENTCHANGEHISTORY.change_date')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let AGENT_ACTYPE = null
        let agentschemastData = null
        if (item.AGENT_ACTYPE != null) {
          let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${item.AGENT_ACTYPE}`)
          AGENT_ACTYPE = await this.jsonConverter(AGENTTYPE);
          agentschemastData = this.PostSchemast.filter(ele => ele['id'] == AGENT_ACTYPE[0].TYPEID);
        }
        let acno = Number(item.AGENT_ACNO) + 100000
        let agentACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + acno
        let obj = new AGENTCHANGEHISTORY()
        obj['CHANGE_DATE'] = item.CHANGE_DATE == '' || item.CHANGE_DATE == null ? null : moment(item.CHANGE_DATE).format('DD/MM/YYYY');
        obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
        obj['AC_TYPE'] = item.ACTYPE
        obj['AC_NO'] = Number(item.AC_NO) + 100000 + ''
        obj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE
        obj['AGENT_ACTYPE'] = agentschemastData[0].id
        obj['AGENT_ACNO'] = agentACNO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = '0'
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = '1'
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = '2'
        }
        await queryRunner.manager.insert(AGENTCHANGEHISTORY, obj)
      }
      await queryRunner.commitTransaction();
      console.log('AGENTCHANGEHISTORY');
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async BANKBRANCHMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BANKBRANCHMASTER')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new BANKBRANCHMASTER()
        obj['BANK_CODE'] = item.BANK_CODE
        obj['BRANCH_CODE'] = item.BRANCH_CODE
        obj['HOLIDAYOPEN'] = item.HOLIDAYOPEN
        obj['CLEARINGDAY'] = item.CLEARINGDAY
        obj['HOLIDAY'] = item.HOLIDAY
        obj['CLEARINGDAYS'] = item.CLEARINGDAYS
        obj['PHONE'] = item.PHONE
        obj['ADDRESS'] = item.ADDRESS
        obj['HALF_DAY'] = item.HALF_DAY
        obj['CLEARING_HOUSE'] = item.CLEARING_HOUSE
        obj['SBI_BANKCODE'] = item.SBI_BANKCODE
        await queryRunner.manager.insert(BANKBRANCHMASTER, obj)
      }
      await queryRunner.commitTransaction();
      console.log('BANKBRANCHMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async BANKCOMMISSION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM BANKCOMMISSION')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new BANKCOMMISSION()
        obj['BANK_CODE'] = item.BANK_CODE
        obj['EFFECTIVE_DATE'] = item.EFFECTIVE_DATE == '' || item.EFFECTIVE_DATE == null ? null : moment(item.EFFECTIVE_DATE).format('DD/MM/YYYY');
        obj['FROM_AMOUNT'] = item.FROM_AMOUNT
        obj['TO_AMOUNT'] = item.TO_AMOUNT
        obj['RATE'] = item.RATE
        obj['RATE_PER_UNIT'] = item.RATE_PER_UNIT
        obj['MIN_COMMISSION'] = item.MIN_COMMISSION
        obj['MAX_COMMISSION'] = item.MAX_COMMISSION
        await queryRunner.manager.insert(BANKCOMMISSION, obj)
      }
      await queryRunner.commitTransaction();
      console.log('BANKCOMMISSION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async BANKDEPOTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select BANKDEPOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from BANKDEPOTRAN LEFT JOIN SCHEMAST ON BANKDEPOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by BANKDEPOTRAN.TRAN_NO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let obj = new BANKDEPOTRAN()
        let acno = Number(item.TRAN_ACNO) + 100000
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let DEBIT_ACTYPE = null
        let agentschemastData = null
        if (item.DEBIT_ACTYPE != null && item.DEBIT_ACTYPE != 0) {
          DEBIT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.DEBIT_ACTYPE);
          agentschemastData = this.PostSchemast.filter(ele => ele['id'] == DEBIT_ACTYPE[0]?.TYPEID);
        }

        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['TRAN_NO'] = item.TRAN_NO
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
        obj['AC_LINTEDT'] = item.AC_LINTEDT == '' || item.AC_LINTEDT == null ? null : moment(item.AC_LINTEDT).format('DD/MM/YYYY');
        obj['CREDIT_GLACNO'] = item.CREDIT_GLACNO
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = 0
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = 1
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = 2
        }
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['IS_CLOSING_ENTRY'] = item.IS_CLOSING_ENTRY == 0 ? 0 : 1
        obj['DEBIT_ACTYPE'] = agentschemastData == null ? null : agentschemastData[0]?.id
        obj['DEBIT_GLACNO'] = item.DEBIT_GLACNO
        await queryRunner.manager.insert(BANKDEPOTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('BANKDEPOTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async BATCHVOUCHERTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from BATCHVOUCHERTRAN')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new BATCHVOUCHERTRAN()
        obj['TRAN_NO'] = item.TRAN_NO
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['TRAN_TIME'] = item.TRAN_TIME
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = 0
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = 1
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = 2
        }
        obj['COMP_CODE'] = item.COMP_CODE
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
        obj['CHEQUE_SERIES'] = null
        obj['CHEQUE_NO'] = item.CHEQUE_NO
        obj['FILE_IMPORT'] = 0
        await queryRunner.manager.insert(BATCHVOUCHERTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('BATCHVOUCHERTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async BUDGETMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from BUDGETMASTER')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new BUDGETMASTER()
        obj['FIN_YEAR'] = item.FIN_YEAR
        obj['AC_NO'] = item.AC_NO
        obj['BUDGET_AMOUNT'] = item.BUDGET_AMOUNT
        obj['USER_CODE'] = item.USER_CODE
        await queryRunner.manager.insert(BUDGETMASTER, obj)
      }
      await queryRunner.commitTransaction();
      console.log('BUDGETMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async CASHINTINSTRUCTIONS() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select CASHINTINSTRUCTIONS.*, SCHEMAST.TYPEID AS ACTYPE from CASHINTINSTRUCTIONS LEFT JOIN SCHEMAST ON CASHINTINSTRUCTIONS.TRAN_ACTYPE= SCHEMAST.S_APPL order by CASHINTINSTRUCTIONS.INSTRUCTION_NO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new CASHINTINSTRUCTIONS()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['MONTHS'] = item.MONTHS
        obj['DAYS'] = item.DAYS
        obj['PAID_DATE'] = item.PAID_DATE == '' || item.PAID_DATE == null ? null : moment(item.PAID_DATE).format('DD/MM/YYYY');
        obj['PAID_VOUCHER_NO'] = item.PAID_VOUCHER_NO
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        await queryRunner.manager.insert(CASHINTINSTRUCTIONS, obj)
      }
      await queryRunner.commitTransaction();
      console.log('CASHINTINSTRUCTIONS')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async CDRATIO() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from CDRATIO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new CDRATIO()
        obj['CODE'] = item.CODE
        obj['STATUS_DP'] = item.STATUS_DP
        obj['STATUS_LN'] = item.STATUS_LN
        obj['STATUS_A'] = item.STATUS_A
        obj['STATUS_B'] = item.STATUS_B
        await queryRunner.manager.insert(CDRATIO, obj)
      }
      await queryRunner.commitTransaction();
      console.log('CDRATIO')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async CHARGES() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select distinct acnotype,effect_date,charges_type, charges_gl_acno from charges order by effect_date`)
      let data = await this.jsonConverter(result);
      let pgData = await this.CHARGESService.find()
      for (let ele of data) {
        if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
        }
        else {
          let obj = new CHARGES()
          obj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
          obj['ACNOTYPE'] = ele.ACNOTYPE
          obj['CHARGES_TYPE'] = ele.CHARGES_TYPE
          obj['CHARGES_GL_ACNO'] = ele.CHARGES_GL_ACNO
          let tdRate = await this.CHARGESService.save(obj);
          //GRID QUERY
          let result1
          result1 = await connection2.execute(`select * FROM CHARGES WHERE ACNOTYPE='${ele.ACNOTYPE}' AND CHARGES_TYPE=${ele.CHARGES_TYPE}  AND CHARGES_GL_ACNO=${ele.CHARGES_GL_ACNO} AND EFFECT_DATE=${ele.EFFECT_DATE}`)
          let grid = await this.jsonConverter(result1);
          for (let element of grid) {
            let newRate = new CHARGESAMT();
            newRate['FROM_RANGE'] = element.FROM_RANGE;
            newRate['TO_RANGE'] = element.TO_RANGE;
            newRate['CHARGES_AMT'] = element.CHARGES_AMT;
            newRate['idRateID'] = tdRate.id;
            await queryRunner.manager.insert(CHARGESAMT, newRate);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('CHARGES')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async CHARGESNOTING() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select CHARGESNOTING.*, SCHEMAST.s_appl AS ACTYPE from CHARGESNOTING LEFT JOIN SCHEMAST ON CHARGESNOTING.TRAN_ACTYPE= SCHEMAST.S_APPL order by CHARGESNOTING.tran_date')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.ACTYPE);
        // let schemastData = this.PostSchemast.filter(ele1 => ele1['AC_TYPE'] == ele.AC_TYPE);

        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new CHARGESNOTING()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = schemastData[0].id
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        obj['AMOUNT_TYPE'] = item.AMOUNT_TYPE
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT
        obj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT
        obj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT
        obj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT
        obj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT
        obj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT
        obj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT
        obj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT
        obj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT
        obj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['GL_ENTRY'] = item.GL_ENTRY == 0 ? '0' : '1'
        obj['TRAN_GLACNO'] = item.TRAN_GLACNO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(CHARGESNOTING, obj)
      }
      await queryRunner.commitTransaction();
      console.log('CHARGESNOTING')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DAILYSHRTRAN() {

    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select DAILYSHRTRAN.*, SCHEMAST.S_APPL AS ACTYPE from DAILYSHRTRAN LEFT JOIN SCHEMAST ON DAILYSHRTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by DAILYSHRTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.ACTYPE);
      let acno
      let BANKACNO
      acno = Number(item.TRAN_ACNO) + 100000
      BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let TRANSFER_ACTYPE_FROM = null
      let TRANSFER_ACTYPE_TO = null
      let agentschemastData = null
      let TRANSFER_MEMBER_NO_FROM = null
      let BANKTRANSFER_MEMBER_NO_FROM = null
      let TRANSFER_MEMBER_NO_TO = null
      let BANKTRANSFER_MEMBER_NO_TO = null
      acno = Number(item.TRAN_ACNO) + 100000
      BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      if (item.TRANSFER_ACTYPE_FROM != null && item.TRANSFER_ACTYPE_FROM != 0) {
        TRANSFER_ACTYPE_FROM = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_FROM);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_FROM[0]?.TYPEID);
        TRANSFER_MEMBER_NO_FROM = Number(item.TRANSFER_MEMBER_NO_FROM) + 100000
        BANKTRANSFER_MEMBER_NO_FROM = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_FROM
      }
      if (item.TRANSFER_MEMBER_NO_TO != null && item.TRANSFER_MEMBER_NO_TO != 0) {
        TRANSFER_ACTYPE_TO = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_TO);
        let agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_TO[0]?.TYPEID);
        TRANSFER_MEMBER_NO_TO = Number(item.TRANSFER_MEMBER_NO_TO) + 100000
        BANKTRANSFER_MEMBER_NO_TO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_TO
      }
      let obj = new DAILYSHRTRAN();
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['NO_OF_SHARES'] = item.NO_OF_SHARES
      obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
      obj['CERTIFICATE_NO'] = item.CERTIFICATE_NO
      obj['SHARES_FROM_NO'] = item.SHARES_FROM_NO
      obj['SHARES_TO_NO'] = item.SHARES_TO_NO
      obj['FACE_VALUE'] = item.FACE_VALUE
      obj['TRANSFER_ACTYPE_FROM'] = TRANSFER_ACTYPE_FROM == null ? null : TRANSFER_ACTYPE_FROM[0]?.TYPEID
      obj['TRANSFER_MEMBER_NO_FROM'] = BANKTRANSFER_MEMBER_NO_FROM
      obj['TRANSFER_ACTYPE_TO'] = TRANSFER_ACTYPE_TO == null ? null : TRANSFER_ACTYPE_TO[0]?.TYPEID
      obj['TRANSFER_MEMBER_NO_TO'] = BANKTRANSFER_MEMBER_NO_TO
      obj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE == '' || item.SHARES_TRANSFER_DATE == null ? null : moment(item.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
      obj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE == '' || item.SHARES_RETURN_DATE == null ? null : moment(item.SHARES_RETURN_DATE).format('DD/MM/YYYY');
      obj['RESULATION_DATE'] = item.RESULATION_DATE == '' || item.RESULATION_DATE == null ? null : moment(item.RESULATION_DATE).format('DD/MM/YYYY');
      obj['RESULATION_NO'] = item.RESULATION_NO
      obj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
      obj['AC_CLOSEDT'] = item.AC_CLOSEDT == '' || item.AC_CLOSEDT == null ? null : moment(item.AC_CLOSEDT).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      obj['IS_AUTO_TRF_ENTRY'] = item.IS_AUTO_TRF_ENTRY
      obj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO
      obj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED == 0 ? 0 : 1
      await this.DAILYSHRTRANService.insert(obj)
    }
    console.log('DAILYSHRTRAN')

  }
  async NPALOCK() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from NPALOCK ORDER BY PROCESS_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new NPALOCK()
        obj['PROCESS_DATE'] = item.PROCESS_DATE == '' || item.PROCESS_DATE == null ? null : moment(item.PROCESS_DATE).format('DD/MM/YYYY');
        obj['LOCK_DATE'] = item.LOCK_DATE == '' || item.LOCK_DATE == null ? null : moment(item.LOCK_DATE).format('DD/MM/YYYY');
        obj['USER_CODE'] = item.USER_CODE
        await queryRunner.manager.insert(NPALOCK, obj)
      }
      await queryRunner.commitTransaction();
      console.log('NPALOCK')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async EXCESSCASH() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from EXCESSCASH ORDER BY TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new EXCESSCASH()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['CASH_LIMIT'] = item.CASH_LIMIT
        obj['CLOSING_BALANCE'] = item.CLOSING_BALANCE
        obj['EXCESS_CASH'] = item.EXCESS_CASH
        obj['REASON'] = item.REASON
        await queryRunner.manager.insert(EXCESSCASH, obj)
      }
      await queryRunner.commitTransaction();
      console.log('EXCESSCASH')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async CRARTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from CRARTRAN ORDER BY TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new CRARTRAN()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['REPORT_TYPE'] = item.REPORT_TYPE
        obj['TRAN_CRARCODE'] = item.TRAN_CRARCODE
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        await queryRunner.manager.insert(CRARTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('CRARTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DENOMINATION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from DENOMINATION ORDER BY TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new DENOMINATION()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['DENO_TRAN_NO'] = item.DENO_TRAN_NO
        obj['TOKEN_NO'] = item.TOKEN_NO
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['CREDIT_AMOUNT'] = item.CREDIT_AMOUNT
        obj['DEBIT_AMOUNT'] = item.DEBIT_AMOUNT
        obj['DENO_TYPE'] = item.DENO_TYPE
        obj['ACCEPT_1000'] = item.ACCEPT_1000
        obj['ACCEPT_500'] = item.ACCEPT_500
        obj['ACCEPT_100'] = item.ACCEPT_100
        obj['ACCEPT_50'] = item.ACCEPT_50
        obj['ACCEPT_20'] = item.ACCEPT_20
        obj['ACCEPT_10'] = item.ACCEPT_10
        obj['ACCEPT_5'] = item.ACCEPT_5
        obj['ACCEPT_2'] = item.ACCEPT_2
        obj['ACCEPT_1'] = item.ACCEPT_1
        obj['ACCEPT_COINS'] = item.ACCEPT_COINS
        obj['PAYMENT_1000'] = item.PAYMENT_1000
        obj['PAYMENT_500'] = item.PAYMENT_500
        obj['PAYMENT_100'] = item.PAYMENT_100
        obj['PAYMENT_50'] = item.PAYMENT_50
        obj['PAYMENT_20'] = item.PAYMENT_20
        obj['PAYMENT_10'] = item.PAYMENT_10
        obj['PAYMENT_5'] = item.PAYMENT_5
        obj['PAYMENT_2'] = item.PAYMENT_2
        obj['PAYMENT_1'] = item.PAYMENT_1
        obj['PAYMENT_COINS'] = item.PAYMENT_COINS
        obj['CASHIER_CODE'] = item.CASHIER_CODE
        obj['ACCEPT_2000'] = item.ACCEPT_2000
        obj['PAYMENT_2000'] = item.PAYMENT_2000
        obj['ACCEPT_200'] = item.ACCEPT_200
        obj['PAYMENT_200'] = item.PAYMENT_200
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(DENOMINATION, obj)
      }
      await queryRunner.commitTransaction();
      console.log('DENOMINATION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async USERDENOMINATION() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from USERDENOMINATION')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new USERDENOMINATION()
        obj['CASHIER_CODE'] = item.CASHIER_CODE
        obj['DENO_2000'] = item.DENO_2000
        obj['DENO_1000'] = item.DENO_1000
        obj['DENO_500'] = item.DENO_500
        obj['DENO_100'] = item.DENO_100
        obj['DENO_200'] = item.DENO_200
        obj['DENO_50'] = item.DENO_50
        obj['DENO_20'] = item.DENO_20
        obj['DENO_10'] = item.DENO_10
        obj['DENO_5'] = item.DENO_5
        obj['DENO_2'] = item.DENO_2
        obj['DENO_1'] = item.DENO_1
        obj['DENO_COINS_CASH'] = item.DENO_COINS_CASH
        obj['TOTAL_AMOUNT'] = item.TOTAL_AMOUNT
        obj['OPENING_CASH'] = item.OPENING_CASH
        obj['DEPOSITS'] = item.DEPOSITS
        obj['WITHDRAWAL'] = item.WITHDRAWAL
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(USERDENOMINATION, obj)
      }
      await queryRunner.commitTransaction();
      console.log('USERDENOMINATION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async SCHEMDATA() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from SCHEMDATA')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let ele of data) {
        let obj = new SCHEMDATA()
        obj['S_ACNOTYPE'] = ele.S_ACNOTYPE
        obj['S_NAME'] = ele.S_NAME?.replace("\x00", "")
        obj['S_LOCAL_CLEARING'] = ele.S_LOCAL_CLEARING == 0 ? '0' : '1'
        obj['S_CHEQUE_BOOK'] = ele.S_CHEQUE_BOOK == 0 ? '0' : '1'
        obj['S_TEMP_OVERDRFT'] = ele.S_TEMP_OVERDRFT == 0 ? '0' : '1'
        obj['S_PERIODCL_OVERDRFT'] = ele.S_PERIODCL_OVERDRFT == 0 ? '0' : '1'
        obj['S_SPECIAL_INSTRUCTION'] = ele.S_SPECIAL_INSTRUCTION == 0 ? '0' : '1'
        obj['S_SINGLE_VOUCHER'] = ele.S_SINGLE_VOUCHER == 0 ? '0' : '1'
        obj['S_MULTY_VOUCHER'] = ele.S_MULTY_VOUCHER == 0 ? '0' : '1'
        obj['S_DEMAND_DRAFT'] = ele.S_DEMAND_DRAFT == 0 ? '0' : '1'
        obj['S_FREEZE_APPLICABLE'] = ele.S_FREEZE_APPLICABLE == 0 ? '0' : '1'
        obj['S_CASH_PAID_MIN_AMT'] = ele.S_CASH_PAID_MIN_AMT
        obj['IS_PO_APPL'] = ele.IS_PO_APPL == 0 ? '0' : '1'
        obj['S_SUB_PRINT'] = ele.S_SUB_PRINT == 0 ? '0' : '1'
        obj['S_CASH_PAID_LOCK'] = ele.S_CASH_PAID_LOCK == 0 ? '0' : '1'
        await queryRunner.manager.insert(SCHEMDATA, obj)
      }
      await queryRunner.commitTransaction();
      console.log('SCHEMDATA')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async HISTORYDENO() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from HISTORYDENO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new HISTORYDENO()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['CASHIER_CODE'] = item.CASHIER_CODE
        obj['DENO_1000'] = item.DENO_1000
        obj['TOTAL_AMOUNT'] = item.TOTAL_AMOUNT
        obj['DENO_COINES_AMT'] = item.DENO_COINES_AMT
        obj['DENO_2000'] = item.DENO_2000
        obj['DENO_500'] = item.DENO_500
        obj['DENO_100'] = item.DENO_100
        obj['DENO_200'] = item.DENO_200
        obj['DENO_50'] = item.DENO_50
        obj['DENO_20'] = item.DENO_20
        obj['DENO_10'] = item.DENO_10
        obj['DENO_5'] = item.DENO_5
        obj['DENO_2'] = item.DENO_2
        obj['DENO_1'] = item.DENO_1
        obj['DENO_COINS_CASH'] = item.DENO_COINS_CASH
        obj['OPENING_CASH'] = item.OPENING_CASH
        obj['DEPOSITS'] = item.DEPOSITS
        obj['WITHDRAWAL'] = item.WITHDRAWAL
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(HISTORYDENO, obj)
      }
      await queryRunner.commitTransaction();
      console.log('HISTORYDENO')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async HISTORYGENERALMEETING() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from HISTORYGENERALMEETING ORDER BY MEETING_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new HISTORYGENERALMEETING()
        obj['MEETING_DATE'] = item.MEETING_DATE == '' || item.MEETING_DATE == null ? null : moment(item.MEETING_DATE).format('DD/MM/YYYY');
        obj['MEETING_FROM_YEAR'] = item.MEETING_FROM_YEAR
        obj['MEETING_TO_YEAR'] = item.MEETING_TO_YEAR
        obj['ACNOTYPE'] = item.ACNOTYPE
        obj['ACTYPE'] = item.ACTYPE
        obj['AC_NO'] = item.AC_NO
        obj['MEETING_STATUS'] = item.MEETING_STATUS
        obj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE == '' || item.MEMBER_CLOSE_DATE == null ? null : moment(item.MEMBER_CLOSE_DATE).format('DD/MM/YYYY');
        obj['AC_SALARYDIVISION_CODE'] = item.AC_SALARYDIVISION_CODE
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        await queryRunner.manager.insert(HISTORYGENERALMEETING, obj)
      }
      await queryRunner.commitTransaction();
      console.log('HISTORYGENERALMEETING')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async INTHISTORYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select INTHISTORYTRAN.*, SCHEMAST.S_APPL from INTHISTORYTRAN LEFT JOIN SCHEMAST ON INTHISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by INTHISTORYTRAN.TRAN_DATE
     ) rs
  )
   where rownum <= ${this.limit}
      and offset > ${this.offset}
      `);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from INTHISTORYTRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.INTHISTORYTRANSUB(data);
  }
  async INTHISTORYTRANSUB(data) {

    for (let item of data) {
      if (item.TRAN_ACTYPE == null) {
        continue
      }

      let narration = item.NARRATION?.replace("\x00", "")
      let marathiName
      let font = 'DVBW-TTYogeshEn';
      let engNarration

      if (narration != null) {
        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)
      }

      let schemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.TRAN_ACTYPE);
      // let acno = Number(item.TRAN_ACNO) + 100000
      let acno = String(item.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new INTHISTORYTRAN()
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = schemastData[0].id
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['INTEREST_GLACNO'] = item.INTEREST_GLACNO == undefined || item.INTEREST_GLACNO == null ? 0 : item.INTEREST_GLACNO
      obj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO == undefined || item.RECPAY_INT_GLACNO == null ? 0 : item.RECPAY_INT_GLACNO
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = 2
      }
      obj['NARRATION'] = engNarration
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT
      obj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == undefined || item.RECPAY_INT_AMOUNT == null ? 0 : item.RECPAY_INT_AMOUNT
      obj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == undefined || item.INTEREST_AMOUNT == null ? 0 : item.INTEREST_AMOUNT
      obj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
      obj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT == undefined || item.PENAL_INT_AMOUNT == null ? 0 : item.PENAL_INT_AMOUNT
      obj['LAST_INTEREST_DATE'] = item.LAST_INTEREST_DATE == '' || item.LAST_INTEREST_DATE == null ? null : moment(item.LAST_INTEREST_DATE).format('DD/MM/YYYY');
      obj['INTEREST_RATE'] = item.INTEREST_RATE
      obj['TD_SCHEME_AMOUNT'] = item.TD_SCHEME_AMOUNT
      obj['LEDGER_BALANCE'] = item.LEDGER_BALANCE
      obj['TOTAL_PRODUCTS'] = item.TOTAL_PRODUCTS
      obj['AC_OPEN_DATE'] = item.AC_OPEN_DATE == '' || item.AC_OPEN_DATE == null ? null : moment(item.AC_OPEN_DATE).format('DD/MM/YYYY');
      obj['EXPIRY_DATE'] = item.EXPIRY_DATE == '' || item.EXPIRY_DATE == null ? null : moment(item.EXPIRY_DATE).format('DD/MM/YYYY');
      obj['MONTHS'] = item.MONTHS
      obj['DAYS'] = item.DAYS
      obj['POST_TO_INDIVIDUAL_AC'] = item.POST_TO_INDIVIDUAL_AC == 0 ? 0 : 1
      obj['DAILYTRAN_POST_NO'] = item.DAILYTRAN_POST_NO == undefined || item.DAILYTRAN_POST_NO == null ? 0 : item.DAILYTRAN_POST_NO
      obj['POST_PENALINT_IN_INTEREST'] = item.POST_PENALINT_IN_INTEREST == undefined || item.POST_PENALINT_IN_INTEREST == null ? 0 : item.POST_PENALINT_IN_INTEREST
      obj['ODUE_INT_GLACNO'] = item.ODUE_INT_GLACNO == undefined || item.ODUE_INT_GLACNO == null ? 0 : item.ODUE_INT_GLACNO
      obj['ODUE_INT_AMOUNT'] = item.ODUE_INT_AMOUNT == undefined || item.ODUE_INT_AMOUNT == null ? 0 : item.ODUE_INT_AMOUNT
      obj['IS_POST_PENAL_TO_AC'] = item.IS_POST_PENAL_TO_AC == undefined || item.POST_PENALINT_IN_INTEREST == null ? 0 : item.POST_PENALINT_IN_INTEREST
      obj['RECPAY_INT_OPENING'] = item.RECPAY_INT_OPENING == null || item.RECPAY_INT_OPENING == undefined ? 0 : item.RECPAY_INT_OPENING
      obj['ODUE_INT_OPENING'] = item.ODUE_INT_OPENING == null || item.ODUE_INT_OPENING == undefined ? 0 : item.ODUE_INT_OPENING
      obj['OD_INT_AMOUNT'] = item.OD_INT_AMOUNT == null || item.OD_INT_AMOUNT == undefined ? 0 : item.OD_INT_AMOUNT
      obj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT == null || item.REC_PENAL_INT_AMOUNT == undefined ? 0 : item.REC_PENAL_INT_AMOUNT
      obj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO == null || item.REC_PENAL_INT_GLACNO == undefined ? 0 : item.REC_PENAL_INT_GLACNO
      obj['RECPENAL_INT_OPENING'] = item.RECPENAL_INT_OPENING == null || item.RECPENAL_INT_OPENING == undefined ? 0 : item.RECPENAL_INT_OPENING
      await this.INTHISTORYTRANService.insert(obj)
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.INTHISTORYTRAN()
      // await this.INTHISTORYTRANSUB(data);

    } else if (this.flag == 1) {
      console.log('INTHISTORYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.INTHISTORYTRAN()
    }

  }
  async TDSTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select TDSTRAN.*, SCHEMAST.TYPEID AS ACTYPE from TDSTRAN LEFT JOIN SCHEMAST ON TDSTRAN.AC_TYPE = SCHEMAST.S_APPL order by TDSTRAN.TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new TDSTRAN()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['FIN_YEAR'] = item.FIN_YEAR
        obj['AC_CUSTID'] = item.AC_CUSTID
        obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
        obj['AC_TYPE'] = item.ACTYPE
        obj['AC_NO'] = item.AC_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['LAST_TDS_DATE'] = item.LAST_TDS_DATE == '' || item.LAST_TDS_DATE == null ? null : moment(item.LAST_TDS_DATE).format('DD/MM/YYYY')
        obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
        obj['TDS_AMOUNT'] = item.TDS_AMOUNT
        obj['TDS_RATE'] = item.TDS_RATE
        obj['IS_TDS_DEDUCTED'] = item.IS_TDS_DEDUCTED == 0 ? 0 : 1
        obj['FINANCIAL_INTEREST'] = item.FINANCIAL_INTEREST
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = '0'
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = '1'
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = '2'
        }
        obj['USER_CODE'] = item.USER_CODE
        await queryRunner.manager.insert(TDSTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('TDSTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async OIRTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select OIRTRAN.*, SCHEMAST.TYPEID AS ACTYPE from OIRTRAN LEFT JOIN SCHEMAST ON OIRTRAN.TRAN_ACTYPE = SCHEMAST.S_APPL order by OIRTRAN.TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new OIRTRAN()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['SERIAL_NO'] = item.SERIAL_NO
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = 0
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = 1
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = 2
        }
        obj['USER_CODE'] = item.USER_CODE
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_GLACNO'] = item.TRAN_GLACNO
        obj['TRAN_MODE'] = item.TRAN_MODE
        obj['OIR_AMOUNT'] = item.OIR_AMOUNT
        obj['OVERDUE_AMOUNT'] = item.OVERDUE_AMOUNT
        obj['DUE_INSTALLMENT'] = item.DUE_INSTALLMENT
        obj['NPA_DATE'] = item.NPA_DATE == '' || item.NPA_DATE == null ? null : moment(item.NPA_DATE).format('DD/MM/YYYY')
        await queryRunner.manager.insert(OIRTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('OIRTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async RECOTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select RECOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from RECOTRAN LEFT JOIN SCHEMAST ON RECOTRAN.TRAN_ACTYPE = SCHEMAST.S_APPL order by RECOTRAN.TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new RECOTRAN()
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['TRAN_ACNO'] = BANKACNO
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['CHEQUE_NO'] = item.CHEQUE_NO
        obj['STATEMENT_DATE'] = item.STATEMENT_DATE == '' || item.STATEMENT_DATE == null ? null : moment(item.STATEMENT_DATE).format('DD/MM/YYYY')
        await queryRunner.manager.insert(RECOTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('RECOTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async TDRECEIPTISSUE() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select TDRECEIPTISSUE.*, SCHEMAST.S_APPL AS ACTYPE from TDRECEIPTISSUE LEFT JOIN SCHEMAST ON TDRECEIPTISSUE.AC_TYPE = SCHEMAST.S_APPL order by TDRECEIPTISSUE.PRINT_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.ACTYPE);
        let acno = Number(item.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new TDRECEIPTISSUE()
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['PRINT_DATE'] = item.PRINT_DATE == '' || item.PRINT_DATE == null ? null : moment(item.PRINT_DATE).format('DD/MM/YYYY')
        obj['PRINT_TIME'] = item.PRINT_TIME
        obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
        obj['AC_TYPE'] = schemastData[0].id
        obj['AC_NO'] = BANKACNO
        obj['PRINT_TYPE'] = item.PRINT_TYPE
        obj['RECEIPT_NO'] = item.RECEIPT_NO
        obj['REASON_OF_DUPLICATE'] = item.REASON_OF_DUPLICATE
        obj['USER_CODE'] = item.USER_CODE
        await queryRunner.manager.insert(TDRECEIPTISSUE, obj)
      }
      await queryRunner.commitTransaction();
      console.log('TDRECEIPTISSUE')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async NPADATA() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select NPADATA.*, SCHEMAST.S_APPL AS ACTYPE from NPADATA LEFT JOIN SCHEMAST ON NPADATA.AC_TYPE = SCHEMAST.S_APPL order by NPADATA.REPORT_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AJARA_ACTYPE'] == item.ACTYPE);
      // let acno = Number(item.AC_NO) + 100000
      let acno = String(item.AC_NO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new NPADATA()
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['REPORT_DATE'] = item.REPORT_DATE == '' || item.REPORT_DATE == null ? null : moment(item.REPORT_DATE).format('DD/MM/YYYY')
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = schemastData[0].id
      obj['AC_NO'] = BANKACNO
      obj['SECU_STATUS'] = item.SECU_STATUS
      obj['AC_NPA_DATE'] = item.AC_NPA_DATE == '' || item.AC_NPA_DATE == null ? null : moment(item.AC_NPA_DATE).format('DD/MM/YYYY')
      obj['AC_OPDATE'] = item.AC_OPDATE == '' || item.AC_OPDATE == null ? null : moment(item.AC_OPDATE).format('DD/MM/YYYY')
      obj['AC_EXPIRE_DATE'] = item.AC_EXPIRE_DATE == '' || item.AC_EXPIRE_DATE == null ? null : moment(item.AC_EXPIRE_DATE).format('DD/MM/YYYY')
      obj['AC_SANCTION_AMOUNT'] = item.AC_SANCTION_AMOUNT == null ? 0 : item.AC_SANCTION_AMOUNT
      obj['AC_SECURITY_AMT'] = item.AC_SECURITY_AMT == null ? 0 : item.AC_SECURITY_AMT
      obj['LEDGER_BALANCE'] = item.LEDGER_BALANCE == null ? 0 : item.LEDGER_BALANCE
      obj['OVERDUE_AMOUNT'] = item.OVERDUE_AMOUNT == null ? 0 : item.OVERDUE_AMOUNT
      obj['DUE_INSTALLMENT'] = item.DUE_INSTALLMENT == null ? 0 : item.DUE_INSTALLMENT
      obj['NPA_PROVISION_AMT'] = item.NPA_PROVISION_AMT == null ? 0 : item.NPA_PROVISION_AMT
      obj['RECEIVABLE_INTEREST'] = item.RECEIVABLE_INTEREST == null ? 0 : item.RECEIVABLE_INTEREST
      obj['NPA_CLASS'] = item.NPA_CLASS
      obj['NPA_MONTHS'] = item.NPA_MONTHS == null ? 0 : item.NPA_MONTHS
      obj['NPA_PERCENTAGE'] = item.NPA_PERCENTAGE == null ? 0 : item.NPA_PERCENTAGE
      obj['NPA_DAYS'] = item.NPA_DAYS == null ? 0 : item.NPA_DAYS
      obj['SUB_CLASS_NO'] = item.SUB_CLASS_NO
      obj['OVERDUE_DATE'] = item.OVERDUE_DATE == '' || item.OVERDUE_DATE == null ? null : moment(item.OVERDUE_DATE).format('DD/MM/YYYY')
      obj['TOBE_RECOVER_AMT'] = item.TOBE_RECOVER_AMT == null ? 0 : item.TOBE_RECOVER_AMT
      obj['USER_CODE'] = item.USER_CODE
      obj['UNSECURE_PROV_AMT'] = item.UNSECURE_PROV_AMT == null ? 0 : item.UNSECURE_PROV_AMT
      obj['UNSECURE_PERCENTAGE'] = item.UNSECURE_PERCENTAGE == null ? 0 : item.UNSECURE_PERCENTAGE
      obj['PROV_ON_AMT'] = item.PROV_ON_AMT == null ? 0 : item.PROV_ON_AMT
      obj['OVERDUE_INTEREST'] = item.OVERDUE_INTEREST == null ? 0 : item.OVERDUE_INTEREST
      obj['CURRENT_INTEREST'] = item.CURRENT_INTEREST == null ? 0 : item.CURRENT_INTEREST
      obj['AC_INSTALLMENT'] = item.AC_INSTALLMENT == null ? 0 : item.AC_INSTALLMENT
      obj['AMT_TOBE_RECOVER'] = item.AMT_TOBE_RECOVER == null ? 0 : item.AMT_TOBE_RECOVER
      await this.NPADATAService.insert(obj)
    }
    console.log('NPADATA')
  }
  async MORATORIUMPERIOD() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select MORATORIUMPERIOD.*, SCHEMAST.TYPEID AS ACTYPE from MORATORIUMPERIOD LEFT JOIN SCHEMAST ON MORATORIUMPERIOD.AC_TYPE = SCHEMAST.S_APPL order by MORATORIUMPERIOD.TRAN_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno = Number(item.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new MORATORIUMPERIOD()
        obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
        obj['AC_TYPE'] = item.ACTYPE
        obj['AC_NO'] = BANKACNO
        obj['INSTALLMENT_NO'] = item.INSTALLMENT_NO
        obj['PERIOD'] = item.PERIOD
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['AC_RESO_DATE'] = item.AC_RESO_DATE == '' || item.AC_RESO_DATE == null ? null : moment(item.AC_RESO_DATE).format('DD/MM/YYYY')
        obj['AC_RESO_NO'] = item.AC_RESO_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(MORATORIUMPERIOD, obj)
      }
      await queryRunner.commitTransaction();
      console.log('MORATORIUMPERIOD')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async STANDINSTRUCTIONLOG() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from STANDINSTRUCTIONLOG order by TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new STANDINSTRUCTIONLOG()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
      obj['SUCCESS_STATUS'] = item.SUCCESS_STATUS
      obj['DAILYTRAN_TRAN_NO'] = item.DAILYTRAN_TRAN_NO
      obj['EXPECTED_EXECUTION_DATE'] = item.EXPECTED_EXECUTION_DATE == '' || item.EXPECTED_EXECUTION_DATE == null ? null : moment(item.EXPECTED_EXECUTION_DATE).format('DD/MM/YYYY')
      obj['PARTICULARS'] = item.PARTICULARS?.replace("\x00", "")
      obj['OVERDUE_INT'] = item.OVERDUE_INT
      obj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['PAYINT_AMOUNT'] = item.PAYINT_AMOUNT
      obj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT
      obj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
      await this.STANDINSTRUCTIONLOGService.insert(obj)
    }
    console.log('STANDINSTRUCTIONLOG')
  }
  async INTINSTRUCTIONSLOG() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from INTINSTRUCTIONSLOG order by REF_ID ASC`)
    let data = await this.jsonConverter(result);

    for (let item of data) {
      let CR_ACTYPE = null
      if (item.CR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${item.CR_ACTYPE}`)
        CR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let DR_ACTYPE = null
      if (item.DR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select S_APPL from schemast where S_APPL=${item.DR_ACTYPE}`)
        DR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let drschemastData = DR_ACTYPE != null ? await this.SCHEMASTService.find({
        where: {
          AJARA_ACTYPE: DR_ACTYPE[0].S_APPL
        }
      }) : null
      let crschemastData = CR_ACTYPE != null ? await this.SCHEMASTService.find({
        where: {
          AJARA_ACTYPE: CR_ACTYPE[0].S_APPL
        }
      }) : null
      // let drAC_NO = Number(item.DR_AC_NO) + 100000
      // let crAC_NO = Number(item.CR_AC_NO) + 100000
      let drAC_NO = String(item.DR_AC_NO).padStart(6, '0');
      let crAC_NO = String(item.CR_AC_NO).padStart(6, '0');
      let drBANKACNO = DR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + drschemastData[0].S_APPL + drAC_NO : null
      let crBANKACNO = CR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + crschemastData[0].S_APPL + crAC_NO : null
      let obj = new INTINSTRUCTIONSLOG()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
      obj['SUCCESS_STATUS'] = item.SUCCESS_STATUS
      obj['DAILYTRAN_TRAN_NO'] = item.DAILYTRAN_TRAN_NO
      obj['ADV_NARRATION'] = item.ADV_NARRATION
      obj['EXPECTED_EXECUTION_DATE'] = item.EXPECTED_EXECUTION_DATE == '' || item.EXPECTED_EXECUTION_DATE == null ? null : moment(item.EXPECTED_EXECUTION_DATE).format('DD/MM/YYYY')
      obj['LAST_INT_DATE'] = item.LAST_INT_DATE == '' || item.LAST_INT_DATE == null ? null : moment(item.LAST_INT_DATE).format('DD/MM/YYYY')
      obj['PARTICULARS'] = item.PARTICULARS?.replace("\x00", "")
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['CR_ACNOTYPE'] = item.CR_ACNOTYPE
      obj['DR_ACNOTYPE'] = item.DR_ACNOTYPE
      obj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
      obj['DR_ACTYPE'] = DR_ACTYPE == null ? null : drschemastData[0].id
      obj['CR_ACTYPE'] = CR_ACTYPE == null ? null : crschemastData[0].id
      obj['DR_AC_NO'] = DR_ACTYPE == null ? null : drBANKACNO
      obj['CR_AC_NO'] = CR_ACTYPE == null ? null : crBANKACNO
      obj['REF_ID'] = item.REF_ID
      console.log('REF_ID:', item.REF_ID)
      await this.INTINSTRUCTIONSLOGService.insert(obj)
    }
    await connection2.close()
    console.log('INTINSTRUCTIONSLOG')
  }
  async PASSBOOKPRINT() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from PASSBOOKPRINT order by PASSBOOKPRINT.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.AC_TYPE == null || item.AC_TYPE == ' ') {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.AC_TYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new PASSBOOKPRINT()
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = schemastData[0].id
      obj['AC_NO'] = BANKACNO
      obj['AC_NAME'] = item.AC_NAME
      obj['AC_OP_CD'] = item.AC_OP_CD
      obj['OP_BALANCE'] = item.OP_BALANCE == null ? 0 : item.OP_BALANCE
      obj['TRAN_NO'] = item.TRAN_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['WITHDRAW_NO'] = item.WITHDRAW_NO
      obj['DR_AMOUNT'] = item.DR_AMOUNT == null ? 0 : item.DR_AMOUNT
      obj['CR_AMOUNT'] = item.CR_AMOUNT == null ? 0 : item.CR_AMOUNT
      obj['OTHER_AMOUNT'] = item.OTHER_AMOUNT == null ? 0 : item.OTHER_AMOUNT
      obj['OTHER_DRCR'] = item.OTHER_DRCR
      await this.PASSBOOKPRINTService.insert(obj)
    }
    console.log('PASSBOOKPRINT')

  }
  async PASSBOOKHISTORY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from PASSBOOKHISTORY order by PASSBOOKHISTORY.LAST_PRINT_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.AC_TYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.AC_TYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new PASSBOOKHISTORY()
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = schemastData[0].id
      obj['AC_NO'] = BANKACNO
      obj['LAST_PRINT_DATE'] = item.LAST_PRINT_DATE == '' || item.LAST_PRINT_DATE == null ? null : moment(item.LAST_PRINT_DATE).format('DD/MM/YYYY')
      obj['LAST_PRINT_TRANNO'] = item.LAST_PRINT_TRANNO
      await this.PASSBOOKHISTORYService.insert(obj)
    }
    console.log('PASSBOOKHISTORY')
  }
  async SUBSIDARYMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from SUBSIDARYMASTER order by code')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new SUBSIDARYMASTER()
        obj['NAME'] = item.NAME
        await queryRunner.manager.insert(SUBSIDARYMASTER, obj)
      }
      await queryRunner.commitTransaction();
      console.log('SUBSIDARYMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DEADSTOCKHEADER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select DEADSTOCKHEADER.*, SCHEMAST.S_APPL AS ACTYPE from DEADSTOCKHEADER LEFT JOIN SCHEMAST ON DEADSTOCKHEADER.TRANSFER_ACTYPE = SCHEMAST.S_APPL order by DEADSTOCKHEADER.TRAN_DATE,DEADSTOCKHEADER.TRAN_NO')
    let data = await this.jsonConverter(result);
    for (let item of data) {
      let date = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      let obj = new DEADSTOCKHEADER()
      obj['TRAN_YEAR'] = item.TRAN_YEAR
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_NO'] = item.TRAN_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY')
      obj['CHEQUE_SERIES'] = item.CHEQUE_SERIES
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['TRANSFER_ACNOTYPE'] = item.TRANSFER_ACNOTYPE
      obj['TRANSFER_ACTYPE'] = item.ACTYPE
      obj['TRANSFER_ACNO'] = item.TRANSFER_ACNOTYPE == 'GL' ? item.TRANSFER_ACNO : Number(item.TRANSFER_ACNO) + 100000
      obj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
      obj['TRAN_SUPPLIER_NAME'] = item.TRAN_SUPPLIER_NAME
      obj['SUPPLIER_BILL_DATE'] = item.SUPPLIER_BILL_DATE == '' || item.SUPPLIER_BILL_DATE == null ? null : moment(item.SUPPLIER_BILL_DATE).format('DD/MM/YYYY')
      obj['SUPPLIER_BILL_NO'] = item.SUPPLIER_BILL_NO
      obj['RESO_NO'] = item.RESO_NO
      obj['RESO_DATE'] = item.RESO_DATE == '' || item.RESO_DATE == null ? null : moment(item.RESO_DATE).format('DD/MM/YYYY')
      obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['CGST_AMT'] = item.CGST_AMT
      obj['SGST_AMT'] = item.SGST_AMT
      obj['IGST_AMT'] = item.IGST_AMT
      obj['GST_NO'] = item.GST_NO
      obj['SYSCHNG_LOGIN'] = item.OFFICER_CODE
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = 2
      }
      obj['status'] = 1
      let header = await this.DEADSTOCKHEADERService.save(obj)
      let detail = await connection2.execute(`select * from deadstockdetail where tran_date=TO_DATE('${date}','DD/MM/YYYY') and tran_no=${item.TRAN_NO} order by serial_no`)
      let resultDetail = await this.jsonConverter(detail);
      for (let ele of resultDetail) {
        let itemmasterData = await this.ITEMMASTERService.findOne({ ITEM_CODE: ele.ITEM_CODE })
        let details = new DEADSTOCKDETAIL()
        details['TRAN_YEAR'] = ele.TRAN_YEAR
        details['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
        details['TRAN_NO'] = ele.TRAN_NO
        details['SERIAL_NO'] = ele.SERIAL_NO
        details['TRAN_DRCR'] = ele.TRAN_DRCR
        details['ITEM_CODE'] = ele.ITEM_CODE
        details['ITEM_TYPE'] = Number(itemmasterData?.ITEM_TYPE)
        details['ITEM_NAME'] = itemmasterData?.ITEM_NAME
        details['ITEM_RATE'] = ele.ITEM_RATE
        details['ITEM_QTY'] = ele.ITEM_QTY
        details['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
        details['TRAN_REF_NO'] = ele.TRAN_REF_NO
        details['DEPR_RATE'] = ele.DEPR_RATE
        details['BRANCH_CODE'] = this.BRANCH_CODE
        details['deadstockHeader'] = header.id
        await this.DEADSTOCKDETAILService.insert(details)
      }
    }
    await connection2.close()
    console.log('DEADSTOCKHEADER-DEADSTOCKDETAIL')

  }
  async DEPOCLOSETRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOCLOSETRAN.*, SCHEMAST.S_APPL AS ACTYPE from 
        DEPOCLOSETRAN LEFT JOIN SCHEMAST ON DEPOCLOSETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by DEPOCLOSETRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOCLOSETRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.DEPOCLOSETRANSUB(data);
  }
  async DEPOCLOSETRANSUB(data) {
    for (let ele of data) {
      if (ele.ACTYPE == null) {
        continue
      }
      let date = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
      let schemastData = this.PostSchemast.filter(ele1 => ele1['AJARA_ACTYPE'] == ele.ACTYPE);

      let narration = ele.NARRATION?.replace("\x00", "")
      let marathiName
      let font = 'DVBW-TTYogeshEn';
      let engNarration

      if (narration != null) {
        marathiName = unidev(narration, 'hindi', `${font}`);

        if (font === 'DVBW-TTYogeshEn') {
          if (marathiName.includes('×')) {
            marathiName = marathiName.replace(/×(.)/g, '$1ि');
          }
          if (marathiName.includes('Ø')) {
            marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
          }
          if (marathiName.includes('Ô')) {

            marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
            marathiName = marathiName.replace(/Ô/g, 'र्');
          }
        }

        engNarration = this.translatefullwords(marathiName)
      }


      // let acno = Number(ele.TRAN_ACNO) + 100000
      let acno = String(ele.TRAN_ACNO).padStart(6, '0');
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new DEPOCLOSETRAN()
      obj['TRAN_NO'] = ele.TRAN_NO
      obj['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = ele.TRAN_TIME
      obj['TRAN_TYPE'] = ele.TRAN_TYPE
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = schemastData[0].id
      obj['TRAN_ACNO'] = BANKACNO
      obj['LEDGER_BAL'] = ele.LEDGER_BAL
      obj['EXCESS_INT'] = ele.EXCESS_INT
      obj['TDS_AMOUNT'] = ele.TDS_AMOUNT
      obj['SURCHARGE_AMOUNT'] = ele.SURCHARGE_AMOUNT
      obj['COMMISSION_CHARGES'] = ele.COMMISSION_CHARGES
      obj['COMMISSION_GLACNO'] = ele.COMMISSION_GLACNO
      obj['OTHER_CHARGES_AMOUNT'] = ele.OTHER_CHARGES_AMOUNT
      obj['OTHER_CHARGES_GLACNO'] = ele.OTHER_CHARGES_GLACNO
      obj['PENAL_INTEREST_AMOUNT'] = ele.PENAL_INTEREST_AMOUNT
      obj['PAID_INTEREST_AMOUNT'] = ele.PAID_INTEREST_AMOUNT
      obj['NET_INTEREST_AMOUNT'] = ele.NET_INTEREST_AMOUNT
      obj['UNPAID_CASHINT_AMOUNT'] = ele.UNPAID_CASHINT_AMOUNT
      obj['TOTAL_INTEREST_AMOUNT'] = ele.TOTAL_INTEREST_AMOUNT
      obj['NET_PAYABLE_AMOUNT'] = ele.NET_PAYABLE_AMOUNT
      obj['INTEREST_RATE'] = ele.INTEREST_RATE
      obj['IS_PREMATURE_CLOSE'] = ele.IS_PREMATURE_CLOSE == 0 ? 0 : 1
      if (ele.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = 0
      }
      else if (ele.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = 1
      }
      else if (ele.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = 2
      }
      obj['TOKEN_NO'] = ele.TOKEN_NO
      obj['CASHIER_CODE'] = ele.CASHIER_CODE
      obj['USER_CODE'] = ele.USER_CODE
      obj['OFFICER_CODE'] = ele.OFFICER_CODE
      obj['NARRATION'] = engNarration
      obj['PAYABLE_INTEREST_AMOUNT'] = ele.PAYABLE_INTEREST_AMOUNT
      obj['AUTO_MATURED_PAYABLEAMT'] = ele.AUTO_MATURED_PAYABLEAMT
      obj['AFT_MATURE_INT_RATE'] = ele.AFT_MATURE_INT_RATE
      obj['AFT_MATURE_INT_AMT'] = ele.AFT_MATURE_INT_AMT
      obj['CHEQUE_SERIES'] = ele.CHEQUE_SERIES
      obj['CHEQUE_NO'] = ele.CHEQUE_NO
      obj['CHEQUE_DATE'] = ele.CHEQUE_DATE == '' || ele.CHEQUE_DATE == null ? null : moment(ele.CHEQUE_DATE).format('DD/MM/YYYY')
      obj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      obj['status'] = 1
      let depoclose = await this.DEPOCLOSETRANService.save(obj)
      if (ele.TRAN_TYPE == 'TR') {
        let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
        let detail = await connection2.execute(`select DEPOCLOSETRANSAC.*, SCHEMAST.S_APPL AS ACTYPE from DEPOCLOSETRANSAC LEFT JOIN SCHEMAST ON DEPOCLOSETRANSAC.TRANSFER_ACTYPE= SCHEMAST.S_APPL
        where DEPOCLOSETRANSAC.tran_date=TO_DATE('${date}','DD/MM/YYYY') and DEPOCLOSETRANSAC.tran_no=${ele.TRAN_NO} order by DEPOCLOSETRANSAC.serial_no`)
        let resultDetail = await this.jsonConverter(detail);
        for (let item of resultDetail) {
          let schemastData = this.PostSchemast.filter(item1 => item1['AJARA_ACTYPE'] == item.ACTYPE);

          narration = item.NARRATION?.replace("\x00", "")
          if (narration != null) {
            marathiName = unidev(narration, 'hindi', `${font}`);

            if (font === 'DVBW-TTYogeshEn') {
              if (marathiName.includes('×')) {
                marathiName = marathiName.replace(/×(.)/g, '$1ि');
              }
              if (marathiName.includes('Ø')) {
                marathiName = marathiName.replace(/Ø(.)/g, '$1िं');
              }
              if (marathiName.includes('Ô')) {

                marathiName = marathiName.replace(/([क-ह])([ािीुूृेैोौंॅॉ]*)Ô/g, 'र्$1$2');
                marathiName = marathiName.replace(/Ô/g, 'र्');
              }
            }

            engNarration = this.translatefullwords(marathiName)
          }

          // let acno = Number(item.TRANSFER_ACNO) + 100000
          let acno = String(item.TRANSFER_ACNO).padStart(6, '0');
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let details = new DEPOCLOSETRANSAC()
          details['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
          details['TRAN_NO'] = item.TRAN_NO
          details['SERIAL_NO'] = item.SERIAL_NO
          details['TRAN_AMOUNT'] = item.TRAN_AMOUNT
          details['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
          details['TRANSFER_ACNOTYPE'] = item.TRANSFER_ACNOTYPE
          details['TRANSFER_ACTYPE'] = schemastData[0].id
          details['TRANSFER_ACNO'] = BANKACNO
          details['NARRATION'] = engNarration
          details['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
          details['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
          details['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
          details['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
          details['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
          details['depoclosetran'] = depoclose.id
          await this.DEPOCLOSETRANSACService.insert(details)
        }
        await connection2.close()
      }
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DEPOCLOSETRAN()
    } else if (this.flag == 1) {
      console.log('DEPOCLOSETRAN-DEPOCLOSETRANSAC');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DEPOCLOSETRAN()
    }
  }

  async SHARECAPITALAMTDETAILS() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from SHARE_CAPITAL_AMT_DETAILS order by FROM_DATE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new SHARECAPITALAMTDETAILS()
        obj['FROM_DATE'] = item.FROM_DATE == '' || item.FROM_DATE == null ? null : moment(item.FROM_DATE).format('DD/MM/YYYY')
        obj['TO_DATE'] = item.TO_DATE == '' || item.TO_DATE == null ? null : moment(item.TO_DATE).format('DD/MM/YYYY')
        obj['AMOUNT'] = item.AMOUNT
        obj['SYSID'] = this.PostSyspara[0].id
        await queryRunner.manager.insert(SHARECAPITALAMTDETAILS, obj)
      }

      await queryRunner.commitTransaction();
      console.log('SHARECAPITALAMTDETAILS')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async MANAGERVIEW() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from MANAGERVIEW order by SR_NO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new MANAGERVIEW()
        obj['TYPE '] = item.TYPE
        obj['STATEMENT_CODE '] = item.STATEMENT_CODE
        obj['DECRIPTION '] = item.DECRIPTION
        obj['IS_DISPLAY'] = item.IS_DISPLAY == 0 ? '0' : '1'
        obj['PERCENTAGE_TO_WORKING_CAPITAL'] = item.PERCENTAGE_TO_WORKING_CAPITAL0 ? '0' : '1'
        await queryRunner.manager.insert(MANAGERVIEW, obj)
      }

      await queryRunner.commitTransaction();
      console.log('MANAGERVIEW')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async GLREPORTLINK() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(' select GLREPORTLINK.*, SCHEMAST.S_APPL AS ACTYPE from GLREPORTLINK LEFT JOIN SCHEMAST ON GLREPORTLINK.AC_TYPE= SCHEMAST.S_APPL order by GLREPORTLINK.CODE')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new GLREPORTLINK()
        obj['REPORT_TYPE'] = item.REPORT_TYPE
        obj['CODE'] = item.CODE
        obj['CODE_TYPE'] = item.CODE_TYPE
        obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
        // obj['AC_TYPE'] = item.ACTYPE
        obj['AC_TYPE'] = 4;
        obj['AC_NO'] = item.AC_NO
        obj['SUB_COLUMN_NO'] = item.SUB_COLUMN_NO
        obj['EFFECT_DATE'] = item.EFFECT_DATE == '' || item.EFFECT_DATE == null ? null : moment(item.EFFECT_DATE).format('DD/MM/YYYY')
        obj['REVERSE_CODE'] = item.REVERSE_CODE
        obj['DEFAULT_BALTYPE'] = item.DEFAULT_BALTYPE
        obj['EFFECT_TO_DATE'] = item.EFFECT_TO_DATE == '' || item.EFFECT_TO_DATE == null ? null : moment(item.EFFECT_TO_DATE).format('DD/MM/YYYY')
        await queryRunner.manager.insert(GLREPORTLINK, obj)
      }

      await queryRunner.commitTransaction();
      console.log('GLREPORTLINK')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async GLREPORTMASTER() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM GLREPORTMASTER ORDER BY REF_ID')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        let obj = new GLREPORTMASTER()
        obj['CODE'] = item.CODE
        obj['NAME'] = item.NAME?.replace("\x00", "")
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['FIRST_SRNO'] = item.FIRST_SRNO
        obj['SECOND_SRNO'] = item.SECOND_SRNO
        obj['THIRD_SRNO'] = item.THIRD_SRNO
        obj['FOURTH_SRNO'] = item.FOURTH_SRNO
        obj['CODE_TYPE'] = item.CODE_TYPE
        obj['REPORT_TYPE'] = item.REPORT_TYPE
        obj['PERCENTAGE'] = item.PERCENTAGE == null ? 0 : item.PERCENTAGE
        obj['PERCENTAGE_OF_CODE'] = item.PERCENTAGE_OF_CODE
        obj['PERCENTAGE_CONSIDARATION'] = item.PERCENTAGE_CONSIDARATION
        obj['TEMP_AMOUNT'] = item.TEMP_AMOUNT == null ? 0 : item.TEMP_AMOUNT
        obj['FINAL_AMOUNT'] = item.FINAL_AMOUNT == null ? 0 : item.FINAL_AMOUNT
        obj['FINAL_AMOUNT1'] = item.FINAL_AMOUNT1 == null ? 0 : item.FINAL_AMOUNT1
        obj['FINAL_AMOUNT2'] = item.FINAL_AMOUNT2 == null ? 0 : item.FINAL_AMOUNT2
        obj['FINAL_HEADING1'] = item.FINAL_HEADING1
        obj['FINAL_HEADING2'] = item.FINAL_HEADING2
        obj['INPUT_ALLOWED'] = item.INPUT_ALLOWED == 0 ? 0 : 1
        obj['SUB_COLUMN_REQUIRED'] = item.SUB_COLUMN_REQUIRED
        obj['IS_RATIO'] = item.IS_RATIO == 0 ? 0 : 1
        obj['ALTERNET_CODE'] = item.ALTERNET_CODE
        obj['HO_LIQ_CODE1'] = item.HO_LIQ_CODE1
        obj['HO_LIQ_CODE2'] = item.HO_LIQ_CODE2
        obj['IS_PRINT_IN_REPORT'] = item.IS_PRINT_IN_REPORT == 0 ? 0 : 1
        obj['INNER_AMT_REQD'] = item.INNER_AMT_REQD
        obj['ADD_PL_AMOUNT'] = item.ADD_PL_AMOUNT == 0 ? 0 : 1
        obj['PRINT_AT_OUTER'] = item.PRINT_AT_OUTER
        obj['REF_ID'] = item.REF_ID
        obj['ALTERNATE_BALANCE_CODE'] = item.ALTERNATE_BALANCE_CODE
        await queryRunner.manager.insert(GLREPORTMASTER, obj)
      }

      await queryRunner.commitTransaction();
      console.log('GLREPORTMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async LOCKERTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select LOCKERTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOCKERTRAN LEFT JOIN SCHEMAST ON LOCKERTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL  order by LOCKERTRAN.TRAN_NO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        // let acno = Number(item.TRAN_ACNO) + 100000
        let acno = String(item.TRAN_ACNO).padStart(6, '0');
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new LOCKERTRAN()
        obj['TRAN_NO'] = item.TRAN_NO
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['LOCKER_OPENING_TIME'] = item.LOCKER_OPENING_TIME
        obj['LOCKER_CLOSING_TIME'] = item.LOCKER_CLOSING_TIME
        obj['OPENING_USER_CODE'] = item.OPENING_USER_CODE
        obj['CLOSING_USER_CODE'] = item.CLOSING_USER_CODE
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = '0'
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = '1'
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = '2'
        }
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.insert(LOCKERTRAN, obj)
      }

      await queryRunner.commitTransaction();
      console.log('LOCKERTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async LOCKERRENTTRAN() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select LOCKERRENTTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOCKERRENTTRAN LEFT JOIN SCHEMAST ON LOCKERRENTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL  order by LOCKERRENTTRAN.TRAN_NO')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let TRF_ACTYPE = null
        let agentschemastData = null
        if (item.TRF_ACTYPE != null) {
          TRF_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRF_ACTYPE);
          agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRF_ACTYPE[0].TYPEID);
        }
        let agentBANKACNO = null
        if (item.TRF_ACNO != 0 && agentschemastData != null) {
          let agentacno = Number(item.TRF_ACNO) + 100000
          agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno = Number(item.TRAN_ACNO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new LOCKERRENTTRAN()
        obj['TRAN_NO'] = item.TRAN_NO
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = '0'
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = '1'
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = '2'
        }
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        obj['TRAN_MODE'] = item.TRAN_MODE
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['RENT_FROM_DATE'] = item.RENT_FROM_DATE
        obj['RENT_UPTO_DATE'] = item.RENT_UPTO_DATE
        obj['RECEIPT_NO'] = item.RECEIPT_NO
        obj['TRF_ACNOTYPE'] = item.TRF_ACNOTYPE
        obj['TRF_ACTYPE'] = TRF_ACTYPE == null ? null : TRF_ACTYPE[0].TYPEID;
        obj['TRF_ACNO'] = agentBANKACNO
        obj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
        obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
        await queryRunner.manager.insert(LOCKERRENTTRAN, obj)
      }

      await queryRunner.commitTransaction();
      console.log('LOCKERRENTTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async PIGMYCHART() {

    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select DISTINCT PIGMYCHART.AGENT_ACTYPE,PIGMYCHART.AGENT_ACNO,TRAN_DATE from PIGMYCHART`);
    var data = await this.jsonConverter(result);
    let pgmasterdata = await this.PGMASTERService.find()
    for (let item of data) {
      let date = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      let pigmychartdata = await connection2.execute(`SELECT PIGMYCHART.*,SCHEMAST.S_APPL as ACTYPE FROM PIGMYCHART  LEFT JOIN SCHEMAST ON PIGMYCHART.AGENT_ACTYPE= SCHEMAST.S_APPL  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY') AND ROWNUM =1`);
      let pigmychart = await this.jsonConverter(pigmychartdata);
      if (pigmychart[0].ACTYPE == null) {
        continue
      }
      else {
        let schemastData = this.PostSchemast.filter(item1 => item1['AJARA_ACTYPE'] == pigmychart[0].ACTYPE);
        // let AGENT_ACNO = Number(pigmychart[0].AGENT_ACNO) + 100000
        let AGENT_ACNO = String(pigmychart[0].AGENT_ACNO).padStart(6, '0');
        let AGENT_BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + AGENT_ACNO
        let pigmy = new PIGMYCHART()
        pigmy['BRANCHCODE'] = this.PostBranchOne[0].CODE
        pigmy['BRANCH_ID'] = this.BRANCH_CODE
        pigmy['TRAN_DATE'] = pigmychart[0].TRAN_DATE == '' || pigmychart[0].TRAN_DATE == null ? null : moment(pigmychart[0].TRAN_DATE).format('DD/MM/YYYY')
        pigmy['TRAN_TIME'] = pigmychart[0].TRAN_TIME
        pigmy['TRAN_TYPE'] = pigmychart[0].TRAN_TYPE
        pigmy['TRAN_DRCR'] = pigmychart[0].TRAN_DRCR
        pigmy['TRAN_MODE'] = pigmychart[0].TRAN_MODE
        if (pigmychart[0].TRAN_STATUS == 'UP') {
          pigmy['TRAN_STATUS'] = 0
        }
        else if (pigmychart[0].TRAN_STATUS == 'PS') {
          pigmy['TRAN_STATUS'] = 1
        }
        else if (pigmychart[0].TRAN_STATUS == 'RJ') {
          pigmy['TRAN_STATUS'] = 2
        }
        pigmy['TRAN_AMOUNT'] = pigmychart[0].TRAN_AMOUNT
        pigmy['ENTRY_TYPE'] = pigmychart[0].ENTRY_TYPE
        pigmy['AGENT_ACNOTYPE'] = pigmychart[0].AGENT_ACNOTYPE
        pigmy['AGENT_ACTYPE'] = schemastData[0].id
        pigmy['AGENT_ACNO'] = Number(AGENT_ACNO)
        pigmy['AGENT_BANKACNO'] = AGENT_BANKACNO
        pigmy['CASHIER_CODE'] = pigmychart[0].CASHIER_CODE
        pigmy['USER_CODE'] = pigmychart[0].USER_CODE
        pigmy['OFFICER_CODE'] = pigmychart[0].OFFICER_CODE
        pigmy['AUTO_VOUCHER_DATE'] = pigmychart[0].AUTO_VOUCHER_DATE || pigmychart[0].AUTO_VOUCHER_DATE == null ? null : moment(pigmychart[0].AUTO_VOUCHER_DATE).format('DD/MM/YYYY')
        pigmy['AUTO_VOUCHER_NO'] = pigmychart[0].AUTO_VOUCHER_NO
        pigmy['CHART_NO'] = pigmychart[0].CHART_NO
        pigmy['BRANCH_CODE'] = this.BRANCH_CODE
        let pigmychartInsert = await this.PIGMYCHARTService.save(pigmy)
        let pigmychartmasterdata = await connection2.execute(`SELECT PIGMYCHART.*,SCHEMAST.S_APPL as ACTYPE FROM PIGMYCHART  LEFT JOIN SCHEMAST ON PIGMYCHART.TRAN_ACTYPE= SCHEMAST.S_APPL  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY') order by PIGMYCHART.SERIAL_NO`);
        let pigmychartmaster = await this.jsonConverter(pigmychartmasterdata);
        let totalAmount = await connection2.execute(`SELECT sum(TRAN_AMOUNT) AS AMOUNT FROM PIGMYCHART  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY')`);
        let getAmount = await this.jsonConverter(totalAmount);
        let updateAmount = await this.PIGMYCHARTService.update(pigmychartInsert.id, { TRAN_AMOUNT: getAmount[0].AMOUNT })
        for (let ele of pigmychartmaster) {
          let schemastData = this.PostSchemast.filter(item1 => item1['AJARA_ACTYPE'] == ele.ACTYPE);
          // let TRAN_ACNO = Number(ele.TRAN_ACNO) + 100000
          let TRAN_ACNO = String(ele.TRAN_ACNO).padStart(6, '0');
          let TRAN_BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + TRAN_ACNO
          let pgmastData = pgmasterdata.filter(item1 => item1['BANKACNO'] == TRAN_BANKACNO);
          let chart = new PIGMYCHARTMASTER()
          chart['SERIAL_NO'] = ele.SERIAL_NO
          chart['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
          chart['TRAN_ACTYPE'] = schemastData[0].id
          chart['TRAN_ACNO'] = Number(TRAN_ACNO)
          chart['TRAN_BANKACNO'] = TRAN_BANKACNO
          chart['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
          chart['TRAN_GLACNO'] = ele.TRAN_GLACNO
          chart['RECEIPT_NO'] = ele.RECEIPT_NO
          chart['CHART_NO'] = ele.CHART_NO
          chart['PIGMYCHARTID'] = pigmychartInsert.id
          chart['pigmyAccountID'] = pgmastData == null ? null : pgmastData[0].id
          await this.PIGMYCHARTMASTERService.insert(chart)
        }
      }
    }
    await connection2.close()
    console.log('PIGMYCHART')
  }
  async custdocument() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let fileExt = 'jpeg'
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT  SIGN.* FROM SIGN inner join  idmaster
         on  SIGN.ac_no =  idmaster.ac_no`);
      var data = await this.jsonConverter(result);
      for (let ele of data) {
        const blobsToProcess = [
          { blobData: ele.PHOTO, prefix: 'PHOTO' },
          { blobData: ele.SIGN1, prefix: 'SIGN1' },
          { blobData: ele.SIGN2, prefix: 'SIGN2' },
          { blobData: ele.SIGN3, prefix: 'SIGN3' },
          { blobData: ele.SIGN4, prefix: 'SIGN4' }
        ];
        let idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == ele.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        if (idmasterID == undefined) {
          continue;
        }
        for (let { blobData, prefix } of blobsToProcess) {
          if (blobData) {
            // Convert blob to Buffer
            const buffer = Buffer.from(blobData);

            // Determine file extension by reading file signature
            const fileSignature = buffer.slice(0, 8).toString('hex').toUpperCase();
            let fileExtension = 'jpeg';
            if (fileSignature.startsWith('FFD8FF')) {
              fileExtension = 'jpg';
            } else if (fileSignature.startsWith('89504E47')) {
              fileExtension = 'png';
            } else if (fileSignature.startsWith('25504446')) {
              fileExtension = 'pdf';
            } else if (fileSignature.startsWith('504B0304')) {
              fileExtension = 'docx';
            }

            // Generate unique file name and save the image
            const uniqueName = `${Date.now()}-${prefix}`;
            const fileNameWithExt = `${uniqueName}.${fileExtension}`;

            // Create directories if they don't exist
            if (!fs.existsSync('upload')) {
              fs.mkdirSync('upload', { recursive: true });
            }
            if (!fs.existsSync(`upload/${ele.AC_NO}`)) {
              fs.mkdirSync(`upload/${ele.AC_NO}`, { recursive: true });
            }

            // Save the file
            const filePath = `upload/${ele.AC_NO}/${fileNameWithExt}`;
            fs.writeFileSync(filePath, buffer);

            console.log(`File saved: ${filePath}`);
          }
        }

        // if (!fs.existsSync('upload')) {
        //   fs.mkdirSync('upload', { recursive: true });
        // }
        // if (!fs.existsSync(`upload/${ele.AC_NO}`)) {
        //   fs.mkdirSync(`upload/${ele.AC_NO}`, { recursive: true });
        // }
        if (ele.PHOTO != null) {
          let blobData = ele.PHOTO;
          const file_path: string = `upload/${ele.AC_NO}/PHOTO.${fileExt}`;
          let writeStream = createWriteStream(file_path);
          (blobData.pipe.bind(blobData))(writeStream);
          let custDocument = new CUSTDOCUMENT()
          custDocument['PATH'] = file_path
          custDocument['idmasterID'] = idmasterID.id
          custDocument['DocumentMasterID'] = 1
          const doc = queryRunner.manager.insert(CUSTDOCUMENT, custDocument)
        }
        if (ele.SIGN1 != null) {
          let blobData = ele.SIGN1;
          const file_path: string = `upload/${ele.AC_NO}/SIGN1.${fileExt}`;
          let writeStream = createWriteStream(file_path);
          (blobData.pipe.bind(blobData))(writeStream);
          let custDocument = new CUSTDOCUMENT()
          custDocument['PATH'] = file_path
          custDocument['idmasterID'] = idmasterID.id
          custDocument['DocumentMasterID'] = 2
          const doc = queryRunner.manager.insert(CUSTDOCUMENT, custDocument)
        }
        if (ele.SIGN2 != null) {
          let blobData = ele.SIGN2;
          const file_path: string = `upload/${ele.AC_NO}/SIGN2.${fileExt}`;
          let writeStream = createWriteStream(file_path);
          (blobData.pipe.bind(blobData))(writeStream);
          let custDocument = new CUSTDOCUMENT()
          custDocument['PATH'] = file_path
          custDocument['idmasterID'] = idmasterID.id
          custDocument['DocumentMasterID'] = 20
          const doc = queryRunner.manager.insert(CUSTDOCUMENT, custDocument)
        }
        if (ele.SIGN3 != null) {
          let blobData = ele.SIGN3;
          const file_path: string = `upload/${ele.AC_NO}/SIGN3.${fileExt}`;
          let writeStream = createWriteStream(file_path);
          (blobData.pipe.bind(blobData))(writeStream);
          let custDocument = new CUSTDOCUMENT()
          custDocument['PATH'] = file_path
          custDocument['idmasterID'] = idmasterID.id
          custDocument['DocumentMasterID'] = 21
          const doc = queryRunner.manager.insert(CUSTDOCUMENT, custDocument)
        }
        if (ele.SIGN4 != null) {
          let blobData = ele.SIGN4;
          const file_path: string = `upload/${ele.AC_NO}/SIGN4.${fileExt}`;
          let writeStream = createWriteStream(file_path);
          (blobData.pipe.bind(blobData))(writeStream);
          let custDocument = new CUSTDOCUMENT()
          custDocument['PATH'] = file_path
          custDocument['idmasterID'] = idmasterID.id
          custDocument['DocumentMasterID'] = 3
          const doc = queryRunner.manager.insert(CUSTDOCUMENT, custDocument)
        }
      }

      await queryRunner.commitTransaction();
      console.log('SIGN COMPLETED')
      return 0

    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }


  }
  async SMSMAST() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from smsmast')
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let ele of data) {
        let sms = new SMSMAST()
        sms['SMS_ID'] = ele.SMS_ID
        sms['TEMPLATE_ID'] = ele.TEMPLATE_ID
        sms['TEMPLATE_CONTENT'] = ele.TEMPLATE_CONTENT
        let savetemp = await queryRunner.manager.insert(SMSMAST, sms)
      }

      await queryRunner.commitTransaction();
      console.log('SMSMAST')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  changedate
  async betweendate(data) {
    this.changedate = data.changedate
    await this.TableData()
    await this.IDMASTERwithselect()
    await this.TableData()
    await this.ITEMMASTERselect()
    await this.SHmasterScriptselect()
    await this.DPMASTERScriptselect()
    await this.PGmasterScriptselect()
    await this.lnmasterScriptselect()
    //security tables
    await this.STOCKSTATEMENTselect()
    await this.VEHICLEselect()
    await this.PLANTMACHINARYselect()
    await this.OWNDEPOSITselect()
    await this.PLEDGESTOCKselect()
    await this.BOOKDEBTSselect()
    await this.OTHERSECURITYselect()
    await this.MARKETSHAREselect()
    await this.LANDBUILDINGselect()
    await this.GOLDSILVERselect()
    await this.FURNITUREselect()
    await this.FIREPOLICYselect()
    await this.SECINSURANCEselect()
    await this.GOVTSECULICselect()
    // // INSTRUCTION
    await this.SPECIALINSTRUCTIONselect()
    await this.STANDINSTRUCTIONselect()
    await this.INTINSTRUCTIONselect()
    // //transaction
    await this.DAILYTRAN()
    await this.HISTORYTRANselect()
    await this.ACCOTRANselect()
    await this.SHARETRANselect()
    await this.LOANTRANselect()
    await this.DEPOTRANselect()
    await this.PIGMYTRANselect()
    await this.DAILYSHRTRANselect()
    await this.RENEWALHISTORYselect()
    await this.DEADSTOCKHEADERselect()
    await this.DEPOCLOSETRANselect()
    await this.INTERESTTRANselect()

  }
  async IDMASTERwithselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        SELECT IDMASTER.*, OCCUPATIONMASTER.CODE AS OCCUPATION, CASTMASTER.CODE AS CASTMASTER ,RISKCATEGORYMASTER.CODE AS RISKCATEGORYMASTER FROM IDMASTER LEFT JOIN OCCUPATIONMASTER ON IDMASTER.AC_OCODE=OCCUPATIONMASTER.CODE LEFT JOIN CASTMASTER ON IDMASTER.AC_CAST= CASTMASTER.CODE LEFT JOIN RISKCATEGORYMASTER ON IDMASTER.AC_RISKCATG = RISKCATEGORYMASTER.CODE  where IDMASTER.AC_NO > 50 ORDER BY IDMASTER.AC_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    let data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from IDMASTER  where IDMASTER.AC_NO > 50`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.IDMASTERWITHLIMIT(data);
  }

  async ITEMMASTERselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM ITEMMASTER where ITEM_CODE >10 order by ITEM_CODE');
      let data = await this.jsonConverter(result);
      let pgData = await this.ITEMMASTERService.find()
      let itemcategory = await connection2.execute('SELECT NAME FROM ITEMCATEGORY');
      let itemcategorydata = await this.jsonConverter(itemcategory);
      let postItemcategory = await this.ITEMCATEGORYMASTERService.find()
      if (pgData.length == 0) {
        for (let ele of data) {
          let itemType = null
          if (ele.ITEM_TYPE != null) {
            for (let eleme of itemcategorydata) {
              itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.NAME))
            }
          }
          let newObj = new ITEMMASTER();
          newObj['ITEM_TYPE'] = itemType == null ? null : itemType.id;
          newObj['ITEM_CODE'] = ele.ITEM_CODE;
          newObj['ITEM_NAME'] = ele.ITEM_NAME;
          newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
          newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
          newObj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME;
          newObj['GL_ACNO'] = ele.GL_ACNO;
          newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
          newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
          newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
          newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
          newObj['OP_BALANCE'] = ele.OP_BALANCE;
          newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
          newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
          await queryRunner.manager.save(ITEMMASTER, newObj);
        }
      }
      else {
        for (let ele of data) {
          if (pgData.some(pgData => pgData['ITEM_NAME'] == ele.ITEM_NAME) && pgData.some(pgData => moment(pgData['PURCHASE_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.PURCHASE_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {

          }
          else {
            let itemType = null
            if (ele.ITEM_TYPE != null) {
              for (let eleme of itemcategorydata) {
                itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.NAME))
              }
            }
            let newObj = new ITEMMASTER();
            newObj['ITEM_TYPE'] = itemType.id;
            newObj['ITEM_CODE'] = ele.ITEM_CODE;
            newObj['ITEM_NAME'] = ele.ITEM_NAME;
            newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
            newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
            newObj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME;
            newObj['GL_ACNO'] = ele.GL_ACNO;
            newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
            newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
            newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
            newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
            newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
            newObj['OP_BALANCE'] = ele.OP_BALANCE;
            newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
            newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
            newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
            newObj['BRANCH_CODE'] = this.BRANCH_CODE;
            await queryRunner.manager.save(ITEMMASTER, newObj);
          }
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('ITEMMASTER')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async SHmasterScriptselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT SHMASTER.*,  
              CATEGORYMASTER.CODE AS ACCATG , 
               SCHEMAST.TYPEID AS ACTYPE1 ,
               SHMASTER.AC_TYPE AS SHTYPE,
               SHMASTER.AC_NO AS SHAC_NO, 
               OWNBRANCHMASTER.CODE AS BRANCH_CODE1 FROM SHMASTER 
               LEFT JOIN CATEGORYMASTER ON SHMASTER.AC_CATG=CATEGORYMASTER.CODE 
               LEFT JOIN OWNBRANCHMASTER ON SHMASTER.AC_BRANCH= OWNBRANCHMASTER.CODE  
               LEFT JOIN SCHEMAST ON SHMASTER.AC_TYPE= SCHEMAST.S_APPL where AC_OPDATE > '${this.changedate}' order by SHMASTER.AC_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHMASTER  where AC_OPDATE > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.SHMASTERSCRIPTWITHLIMIT(data);
  }
  async DPMASTERScriptselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT DPMASTER.*, SCHEMAST.TYPEID AS AC_TYPE1         
     FROM DPMASTER  LEFT JOIN SCHEMAST ON DPMASTER.AC_TYPE= SCHEMAST.S_APPL where AC_OPDATE >'${this.changedate}'  ORDER BY DPMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DPMASTER where AC_OPDATE >'${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DPMASTERSCRIPTWITHLIMIT(data);
  }

  async PGmasterScriptselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT PGMASTER.*,  CATEGORYMASTER.CODE AS ACCATG ,  SCHEMAST.TYPEID AS AC_TYPE1 ,
                PGMASTER.AC_TYPE AS DPTYPE, OWNBRANCHMASTER.CODE AS ACINTROBRANCH ,   OPERATIONMASTER.CODE AS ACOPRCODE, INTCATEGORYMASTER.CODE AS ACINTCATA FROM PGMASTER  
                    left JOIN INTCATEGORYMASTER ON PGMASTER.AC_INTCATA=INTCATEGORYMASTER.CODE
                    left JOIN OPERATIONMASTER ON PGMASTER.AC_OPR_CODE=OPERATIONMASTER.CODE
                    left JOIN CATEGORYMASTER ON PGMASTER.AC_CATG=CATEGORYMASTER.CODE
                    left JOIN OWNBRANCHMASTER ON PGMASTER.AC_INTROBRANCH= OWNBRANCHMASTER.CODE 
                    left JOIN SCHEMAST ON PGMASTER.AC_TYPE= SCHEMAST.S_APPL WHERE AC_OPDATE >'${this.changedate}' ORDER BY PGMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PGMASTER WHERE AC_OPDATE >'${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.PGMASTERSCRIPTWITHLIMIT(data);
  }
  async lnmasterScriptselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
               SELECT LNMASTER.*,  SCHEMAST.TYPEID AS AC_TYPE1  from LNMASTER  
               LEFT JOIN SCHEMAST ON LNMASTER.AC_TYPE= SCHEMAST.S_APPL where AC_OPDATE > '${this.changedate}'  ORDER BY LNMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LNMASTER where AC_OPDATE > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LNMASTERSCRIPTWITHLIMIT(data);
  }

  //STOCKSTATEMENT
  async STOCKSTATEMENTselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`SELECT STOCKSTATEMENT.*,schemast.typeid as actype  FROM STOCKSTATEMENT left join schemast on STOCKSTATEMENT.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.actype
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new STOCKSTATEMENT()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_TYPE'] = ele.actype
          obj['AC_NO'] = BANKACNO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['STATEMENT_DATE'] = ele.STATEMENT_DATE == '' || ele.STATEMENT_DATE == null ? null : moment(ele.STATEMENT_DATE).format('DD/MM/YYYY');
          obj['RAW_MATERIAL'] = ele.RAW_MATERIAL
          obj['WORK_PROGRESS'] = ele.WORK_PROGRESS
          obj['FINISHED_GOODS'] = ele.FINISHED_GOODS
          obj['RAW_MARGIN'] = ele.RAW_MARGIN
          obj['WORK_MARGIN'] = ele.WORK_MARGIN
          obj['FINISHED_MARGIN'] = ele.FINISHED_MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          let insertObj = await queryRunner.manager.insert(STOCKSTATEMENT, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('STOCKSTATEMENT')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //VEHICLE
  async VEHICLEselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  VEHICLE.*,schemast.typeid as actype from VEHICLE left join schemast on VEHICLE.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new VEHICLE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['RTO_REG_DATE'] = ele.RTO_REG_DATE == '' || ele.RTO_REG_DATE == null ? null : moment(ele.RTO_REG_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['VEHICLE_MAKE'] = ele.VEHICLE_MAKE
          obj['MANUFACTURE_YEAR'] = ele.MANUFACTURE_YEAR
          obj['VEHICLE_NO'] = ele.VEHICLE_NO
          obj['CHASSIS_NO'] = ele.CHASSIS_NO
          obj['NEW_VEHICLE'] = ele.NEW_VEHICLE
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(VEHICLE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('vehicle')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PLEDGESTOCK
  async PLEDGESTOCKselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  PLEDGESTOCK.*,schemast.typeid as actype from PLEDGESTOCK left join schemast on PLEDGESTOCK.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new PLEDGESTOCK()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['STORAGE_DATE'] = ele.STORAGE_DATE == '' || ele.STORAGE_DATE == null ? null : moment(ele.STORAGE_DATE).format('DD/MM/YYYY');
          obj['STORAGE_MEMO_NO'] = ele.STORAGE_MEMO_NO
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['GOODS_QTY'] = ele.GOODS_QTY
          obj['MANUF_MILL'] = ele.MANUF_MILL
          obj['DISCRIPTION'] = ele.DISCRIPTION
          obj['BALANCE_QTY'] = ele.BALANCE_QTY
          obj['RATE'] = ele.RATE
          obj['VALUE'] = ele.VALUE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(PLEDGESTOCK, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('pledestock')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //PLANTMACHINARY
  async PLANTMACHINARYselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  PLANTMACHINARY.*,schemast.typeid as actype from PLANTMACHINARY left join schemast on PLANTMACHINARY.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new PLANTMACHINARY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['SECU_CODE'] = secuCode?.id
          obj['MACHINE_NAME'] = ele.MACHINE_NAME
          obj['MACHINE_TYPE'] = ele.MACHINE_TYPE
          obj['DISTINCTIVE_NO'] = ele.DISTINCTIVE_NO
          obj['SPECIFICATION'] = ele.SPECIFICATION
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(PLANTMACHINARY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('plantmachinary')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OWNDEPOSIT
  async OWNDEPOSITselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  OWNDEPOSIT.*,schemast.typeid as actype from OWNDEPOSIT left join schemast on OWNDEPOSIT.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new OWNDEPOSIT()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['DEPO_AC_NO'] = ele.DEPO_AC_NO + 100000
          obj['DEPO_AC_TYPE'] = ele.DEPO_ACTYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
          obj['MATURITY_DATE'] = ele.MATURITY_DATE == '' || ele.MATURITY_DATE == null ? null : moment(ele.MATURITY_DATE).format('DD/MM/YYYY');
          obj['RECEIPT_NO'] = ele.RECEIPT_NO
          obj['DEPOSIT_AMT'] = ele.DEPOSIT_AMT
          obj['REMARK'] = ele.REMARK
          obj['MARGIN'] = ele.MARGIN
          obj['LEDGER_BAL'] = ele.LEDGER_BAL
          obj['IS_LIEN_MARK_CLEAR'] = ele.IS_LIEN_MARK_CLEAR
          obj['BALANCE_OF_LOAN_ACCOUNT'] = ele.BALANCE_OF_LOAN_ACCOUNT
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(OWNDEPOSIT, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('owndeposit')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //OTHERSECURITY
  async OTHERSECURITYselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  OTHERSECURITY.*,schemast.typeid as actype from OTHERSECURITY left join schemast on OTHERSECURITY.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new OTHERSECURITY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['SR_NO'] = ele.SR_NO
          obj['SHORT_DETAILS'] = ele.SHORT_DETAILS
          obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
          obj['DETAILS'] = ele.DETAILS
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(OTHERSECURITY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('othersecurity')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //MARKETSHARE
  async MARKETSHAREselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  MARKETSHARE.*,schemast.typeid as actype from MARKETSHARE left join schemast on MARKETSHARE.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new MARKETSHARE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['RELEASE_DATE'] = ele.RELEASE_DATE == '' || ele.RELEASE_DATE == null ? null : moment(ele.RELEASE_DATE).format('DD/MM/YYYY');
          obj['CO_CODE'] = ele.CO_CODE
          obj['CO_NAME'] = ele.CO_NAME
          obj['MARKET_VALUE'] = ele.MARKET_VALUE
          obj['SHARES'] = ele.SHARES
          obj['UPDATED_BY'] = ele.UPDATED_BY
          obj['RELEASE_BY'] = ele.RELEASE_BY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(MARKETSHARE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('marketshare')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //LANDBUILDING
  async LANDBUILDINGselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  LANDBUILDING.*,schemast.typeid as actype from LANDBUILDING left join schemast on LANDBUILDING.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new LANDBUILDING()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['CITY_SURVEY_DATE'] = ele.CITY_SURVEY_DATE == '' || ele.CITY_SURVEY_DATE == null ? null : moment(ele.CITY_SURVEY_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['VALUE'] = ele.VALUE
          obj['LOCATION'] = ele.LOCATION
          obj['AREA'] = ele.AREA
          obj['UNIT_AREA'] = ele.UNIT_AREA
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['CITY_SURVEY_NO'] = ele.CITY_SURVEY_NO
          obj['REG_NO'] = ele.REG_NO
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(LANDBUILDING, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('landbuilding')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //GOLDSILVER
  async GOLDSILVERselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  GOLDSILVER.*,schemast.typeid as actype from GOLDSILVER left join schemast on GOLDSILVER.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new GOLDSILVER()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['TRAN_STATUS'] = ele.TRAN_STATUS == '' || ele.TRAN_STATUS == 'UP' ? '0' : '1';
          obj['ITEM_TYPE'] = ele.ITEM_TYPE
          obj['TOTAL_WEIGHT_GMS'] = ele.TOTAL_WEIGHT_GMS
          obj['CLEAR_WEIGHT_GMS'] = ele.CLEAR_WEIGHT_GMS
          obj['RATE'] = ele.RATE
          obj['GOLD_BOX_NO'] = ele.GOLD_BOX_NO
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['RETURN_DATE'] = ele.RETURN_DATE == '' || ele.RETURN_DATE == null ? null : moment(ele.RETURN_DATE).format('DD/MM/YYYY');
          obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
          obj['BAG_RECEIPT_NO'] = ele.BAG_RECEIPT_NO
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
          obj['NOMINEE'] = ele.NOMINEE
          obj['NOMINEE_RELATION'] = ele.NOMINEE_RELATION
          obj['USER_CODE'] = ele.USER_CODE
          obj['OFFICER_CODE'] = ele.OFFICER_CODE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(GOLDSILVER, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('goldsilver')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //FURNITURE
  async FURNITUREselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  FURNITURE.*,schemast.typeid as actype from FURNITURE left join schemast on FURNITURE.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new FURNITURE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
          obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
          obj['ARTICLE_MAKE'] = ele.ARTICLE_MAKE
          obj['NEW_ARTICLE'] = ele.NEW_ARTICLE
          obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
          obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
          obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(FURNITURE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('furniture')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //FIREPOLICY
  async FIREPOLICYselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  FIREPOLICY.*,schemast.typeid as actype from FIREPOLICY left join schemast on FIREPOLICY.ac_type=schemast.s_appl  where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new FIREPOLICY()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['POLICY_NO'] = ele.POLICY_NO
          obj['POLICY_DUE_DATE'] = ele.POLICY_DUE_DATE == '' || ele.POLICY_DUE_DATE == null ? null : moment(ele.POLICY_DUE_DATE).format('DD/MM/YYYY');
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['POLICY_AMT'] = ele.POLICY_AMT
          obj['POLICY_NATURE'] = ele.POLICY_NATURE
          obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
          obj['PREMIUM'] = ele.PREMIUM
          obj['INSU_CO_CODE'] = ele.INSU_CO_CODE
          obj['ADDRESS'] = ele.ADDRESS
          obj['CITY'] = ele.CITY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          let insertObj = await queryRunner.manager.insert(FIREPOLICY, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('firepolicy')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async SECINSURANCEselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  SECINSURANCE.*,schemast.typeid as actype from SECINSURANCE left join schemast on SECINSURANCE.ac_type=schemast.s_appl where INSURANCE_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new SECINSURANCE()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['INSURANCE_DATE'] = ele.INSURANCE_DATE == '' || ele.INSURANCE_DATE == null ? null : moment(ele.INSURANCE_DATE).format('DD/MM/YYYY');
          obj['POLICY_NO'] = ele.POLICY_NO
          obj['INSU_COMPANY_CODE'] = ele.INSU_COMPANY_CODE
          obj['PREMIUM_DUE_DATE'] = ele.INSU_EXP_DATE == '' || ele.INSU_EXP_DATE == null ? null : moment(ele.INSU_EXP_DATE).format('DD/MM/YYYY');
          obj['INSU_AMOUNT'] = ele.INSU_AMOUNT
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          obj['SECU_CODE'] = secuCode?.id
          let insertObj = await queryRunner.manager.insert(SECINSURANCE, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('secinsurance')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //GOVTSECULIC
  async GOVTSECULICselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  GOVTSECULIC.*,schemast.typeid as actype from GOVTSECULIC left join schemast on GOVTSECULIC.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new GOVTSECULIC()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['AC_NO'] = BANKACNO
          obj['AC_TYPE'] = ele.ACTYPE
          obj['SECU_CODE'] = secuCode?.id
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
          obj['CERT_POLICY_DATE'] = ele.CERT_POLICY_DATE == '' || ele.CERT_POLICY_DATE == null ? null : moment(ele.CERT_POLICY_DATE).format('DD/MM/YYYY');
          obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
          obj['MATURE_DUE_DATE'] = ele.MATURE_DUE_DATE == '' || ele.MATURE_DUE_DATE == null ? null : moment(ele.MATURE_DUE_DATE).format('DD/MM/YYYY');
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['CERT_POLICY_NO'] = ele.CERT_POLICY_NO
          obj['ASSURED_NAME'] = ele.ASSURED_NAME
          obj['PAIDUP_AMT'] = ele.PAIDUP_AMT
          obj['SUM_ASSURED'] = ele.SUM_ASSURED
          obj['PREMIUM'] = ele.PREMIUM
          obj['SURRENDER_VALUE'] = ele.SURRENDER_VALUE
          obj['NOMINEE'] = ele.RECOVERY
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(GOVTSECULIC, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('govtseculic')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //BOOKDEBTS
  async BOOKDEBTSselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  BOOKDEBTS.*,schemast.typeid as actype from BOOKDEBTS left join schemast on bookdebts.ac_type=schemast.s_appl where SUBMISSION_DATE > '${this.changedate}'`);
      let data = await this.jsonConverter(result);
      let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
      let secutityPGData = await this.SECURITYMASTERService.find()
      let securityData = await this.jsonConverter(securiy);
      for (let ele of data) {
        let schemastData = await this.SCHEMASTService.find({
          where: {
            id: ele.ACTYPE
          }
        })
        if (schemastData.length != 0) {
          let secuCode
          if (ele.SECU_CODE != null) {
            for (let eleme of securityData) {
              secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
            }
          }
          let acno = Number(ele.AC_NO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let obj = new BOOKDEBTS()
          obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
          obj['BRANCH_CODE'] = ele.BRANCH_CODE
          obj['AC_NO'] = BANKACNO
          obj['SECU_CODE'] = secuCode?.id
          obj['SR_NO'] = ele.SR_NO
          obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE
          obj['STATEMENT_DATE'] = ele.STATEMENT_DATE
          obj['DEBTORS_OP_BAL'] = ele.DEBTORS_OP_BAL
          obj['CREDIT_SALE'] = ele.CREDIT_SALE
          obj['RECOVERY'] = ele.RECOVERY
          obj['OVERAGED_DEBTORS'] = ele.OVERAGED_DEBTORS
          obj['CLOSE_BAL'] = ele.CLOSE_BAL
          obj['CRD_OUTSTAND_BAL'] = ele.CRD_OUTSTAND_BAL
          obj['MARGIN'] = ele.MARGIN
          obj['REMARK'] = ele.REMARK
          obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
          obj['AC_TYPE'] = ele.ACTYPE
          obj['BRANCH_CODE'] = this.BRANCH_CODE
          let insertObj = await queryRunner.manager.insert(BOOKDEBTS, obj)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('bookdebts')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //SPECIALINSTRUCTION
  async SPECIALINSTRUCTIONselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select  SPECIALINSTRUCTION.*,schemast.typeid as actype from SPECIALINSTRUCTION left join schemast on SPECIALINSTRUCTION.tran_actype=schemast.s_appl where INSTRUCTION_DATE > '${this.changedate}' order by instruction_date`);
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        if (ele.ACTYPE == null) {
          continue;
        }
        let lockerSchemeData = null
        lockerSchemeData = await this.SCHEMASTService.find({
          where: {
            id: (ele.ACTYPE)
          }
        })
        let BANKACNO = null
        if (lockerSchemeData.length != 0) {
          let TDACNO = Number(ele.TRAN_ACNO) + 100000
          BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
        }
        let obj = new SPECIALINSTRUCTION()
        obj['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_ACTYPE'] = ele.ACTYPE
        obj['DRCR_APPLY'] = ele.DRCR_APPLY
        obj['DETAILS'] = ele.DETAILS
        obj['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        obj['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.TO_DATE).format('DD/MM/YYYY');
        obj['IS_RESTRICT'] = ele.IS_RESTRICT == 0 ? '0' : '1'
        obj['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        await queryRunner.manager.save(SPECIALINSTRUCTION, obj);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('SPECIALINSTRUCTION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  //STANDINSTRUCTION
  async STANDINSTRUCTIONselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select * from STANDINSTRUCTION where INSTRUCTION_DATE > '${this.changedate}' order by instruction_date`);
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let CR_ACTYPE = null
        if (ele.CR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.CR_ACTYPE}`)
          CR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let DR_ACTYPE = null
        if (ele.DR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.DR_ACTYPE}`)
          DR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let drschemastData = DR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            id: DR_ACTYPE[0].TYPEID
          }
        }) : null
        let crschemastData = CR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            id: CR_ACTYPE[0].TYPEID
          }
        }) : null
        let drAC_NO = Number(ele.DR_AC_NO) + 100000
        let crAC_NO = Number(ele.CR_AC_NO) + 100000
        let drBANKACNO = DR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + drschemastData[0].S_APPL + drAC_NO : null
        let crBANKACNO = CR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + crschemastData[0].S_APPL + crAC_NO : null
        let interestIns = new STANDINSTRUCTION()
        interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        interestIns['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
        // Month Begin =MB , Month End = ME, Specific Day = day		
        // if (ele.EXECUTION_DAY == 'MB')
        //   interestIns['EXECUTION_DAY'] = 'Month Begin'
        // else if (ele.EXECUTION_DAY == 'ME')
        //   interestIns['EXECUTION_DAY'] = 'Month End'
        // else if (ele.EXECUTION_DAY == 'day')
        //   interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
        interestIns['EXECUTION_DAY'] = ele.EXECUTION_DAY
        interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
        interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : drBANKACNO
        interestIns['DAYS'] = ele.SI_PERIOD
        interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
        interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
        interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : crBANKACNO
        interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
        interestIns['SI_FREQUENCY'] = ele.SI_FREQUENCY
        // M = MONTHLY / Q=QUARTERLY / H=HALF YEARLY / Y=YEARLY
        if (ele.SI_FREQUENCY == 'M')
          interestIns['SI_FREQUENCY'] = 'M'
        else if (ele.SI_FREQUENCY == 'Q')
          interestIns['SI_FREQUENCY'] = 'Q'
        else if (ele.SI_FREQUENCY == 'H')
          interestIns['SI_FREQUENCY'] = 'H'
        else
          interestIns['SI_FREQUENCY'] = 'Fixed Quarterly'
        interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
        interestIns['MIN_BAL'] = ele.MIN_BAL
        interestIns['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
        interestIns['PAYINT_AMOUNT'] = ele.PAYINT_AMOUNT
        interestIns['IS_AUTO_CUT_LNPGCOM'] = ele.IS_AUTO_CUT_LNPGCOM
        interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        interestIns['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.save(STANDINSTRUCTION, interestIns);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('STANDINSTRUCTION')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  //INTINSTRUCTION
  async INTINSTRUCTIONselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select * from INTINSTRUCTION where INSTRUCTION_DATE > '${this.changedate}' order by instruction_date`);
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let CR_ACTYPE = null
        if (ele.CR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.CR_ACTYPE}`)
          CR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let DR_ACTYPE = null
        if (ele.DR_ACTYPE != null) {
          let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.DR_ACTYPE}`)
          DR_ACTYPE = await this.jsonConverter(memTYPE);
        }
        let drschemastData = DR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            id: DR_ACTYPE[0].TYPEID
          }
        }) : null
        let crschemastData = CR_ACTYPE != null ? await this.SCHEMASTService.find({
          where: {
            id: CR_ACTYPE[0].TYPEID
          }
        }) : null
        let drAC_NO = Number(ele.DR_AC_NO) + 100000
        let crAC_NO = Number(ele.CR_AC_NO) + 100000
        let drBANKACNO = DR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + drschemastData[0].S_APPL + drAC_NO : null
        let crBANKACNO = CR_ACTYPE != null ? this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + crschemastData[0].S_APPL + crAC_NO : null
        let interestIns = new INTINSTRUCTION()
        interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
        interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
        interestIns['NEXT_EXE_DATE'] = ele.NEXT_EXE_DATE == '' || ele.NEXT_EXE_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
        // if (ele.EXECUTION_DAY == 'MB')
        //   interestIns['EXECUTION_DAY'] = 'Month Begin'
        // else if (ele.EXECUTION_DAY == 'ME')
        //   interestIns['EXECUTION_DAY'] = 'Month End'
        // else if (ele.EXECUTION_DAY == 'day')
        //   interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
        interestIns['EXECUTION_DAY'] = ele.EXECUTION_DAY
        interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
        interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
        interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : drBANKACNO
        interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : crBANKACNO
        // interestIns['DAYS'] = ele.SI_PERIOD
        interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
        interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
        if (ele.SI_FREQUENCY == 'M')
          interestIns['SI_FREQUENCY'] = 'M'
        else if (ele.SI_FREQUENCY == 'Q')
          interestIns['SI_FREQUENCY'] = 'Q'
        else if (ele.SI_FREQUENCY == 'H')
          interestIns['SI_FREQUENCY'] = 'H'
        else
          interestIns['SI_FREQUENCY'] = 'Fixed Quarterly'
        interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
        interestIns['TRAN_TYPE'] = ele.TRAN_TYPE == 'TR' ? 'Transfer' : 'Cash'
        interestIns['ADV_NARRATION'] = ele.ADV_NARRATION
        // interestIns['DEFAULT_INTEREST_APPLICABLE'] = ele.DEFAULT_INTEREST_APPLICABLE
        interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
        interestIns['BRANCH_CODE'] = this.BRANCH_CODE
        await queryRunner.manager.save(INTINSTRUCTION, interestIns);
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('intinstruction')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }

  async HISTORYTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select HISTORYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from HISTORYTRAN LEFT JOIN SCHEMAST ON HISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where TRAN_DATE > '${this.changedate}'
        order by HISTORYTRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from HISTORYTRAN where TRAN_DATE > '${this.changedate}'`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.HISTORYTRANSUB(data);
  }
  async ACCOTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
              select ACCOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from ACCOTRAN LEFT JOIN SCHEMAST ON ACCOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL WHERE TRAN_DATE='${this.changedate}' order by ACCOTRAN.TRAN_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from ACCOTRAN WHERE TRAN_DATE='${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.ACCOTRANSUB(data);
  }
  async SHARETRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select SHARETRAN.*, SCHEMAST.TYPEID AS ACTYPE from SHARETRAN LEFT JOIN SCHEMAST ON SHARETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
      order by SHARETRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHARETRAN where tran_date > '${this.changedate}'`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.SHARETRANSUB(data);
  }
  async LOANTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select LOANTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOANTRAN LEFT JOIN SCHEMAST ON LOANTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
      order by LOANTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LOANTRAN where tran_date > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LOANTRANSUB(data);
  }
  async DEPOTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from DEPOTRAN LEFT JOIN SCHEMAST ON DEPOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
        order by DEPOTRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOTRAN where tran_date > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DEPOTRANSUB(data);
  }
  async PIGMYTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select PIGMYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from PIGMYTRAN LEFT JOIN SCHEMAST ON PIGMYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
        order by PIGMYTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PIGMYTRAN where tran_date > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close();
    this.count = result1[0].COUNT;
    await this.PIGMYTRANSUB(data);
  }
  async DAILYSHRTRANselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select DAILYSHRTRAN.*, SCHEMAST.TYPEID AS ACTYPE from DAILYSHRTRAN LEFT JOIN SCHEMAST ON DAILYSHRTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}' order by DAILYSHRTRAN.TRAN_NO`)
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let item of data) {
        if (item.ACTYPE == null) {
          continue
        }
        let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
        let acno
        let BANKACNO
        acno = Number(item.TRAN_ACNO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let TRANSFER_ACTYPE_FROM = null
        let TRANSFER_ACTYPE_TO = null
        let agentschemastData = null
        let TRANSFER_MEMBER_NO_FROM = null
        let BANKTRANSFER_MEMBER_NO_FROM = null
        let TRANSFER_MEMBER_NO_TO = null
        let BANKTRANSFER_MEMBER_NO_TO = null
        acno = Number(item.TRAN_ACNO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        if (item.TRANSFER_ACTYPE_FROM != null) {
          TRANSFER_ACTYPE_FROM = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_FROM);
          agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_FROM[0].TYPEID);
          TRANSFER_MEMBER_NO_FROM = Number(item.TRANSFER_MEMBER_NO_FROM) + 100000
          BANKTRANSFER_MEMBER_NO_FROM = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_FROM
        }
        if (item.TRANSFER_MEMBER_NO_TO != null) {
          TRANSFER_ACTYPE_TO = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_TO);
          let agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_TO[0].TYPEID);
          TRANSFER_MEMBER_NO_TO = Number(item.TRANSFER_MEMBER_NO_TO) + 100000
          BANKTRANSFER_MEMBER_NO_TO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_TO
        }
        let obj = new DAILYSHRTRAN();
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
        obj['TRAN_NO'] = item.TRAN_NO
        obj['SERIAL_NO'] = item.SERIAL_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['TRAN_MODE'] = item.TRAN_MODE
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = '0'
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = '1'
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = '2'
        }
        obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
        obj['TRAN_ACTYPE'] = item.ACTYPE
        obj['TRAN_ACNO'] = BANKACNO
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['TRAN_GLACNO'] = item.TRAN_GLACNO
        obj['NO_OF_SHARES'] = item.NO_OF_SHARES
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['CERTIFICATE_NO'] = item.CERTIFICATE_NO
        obj['SHARES_FROM_NO'] = item.SHARES_FROM_NO
        obj['SHARES_TO_NO'] = item.SHARES_TO_NO
        obj['FACE_VALUE'] = item.FACE_VALUE
        obj['TRANSFER_ACTYPE_FROM'] = TRANSFER_ACTYPE_FROM == null ? null : TRANSFER_ACTYPE_FROM[0].TYPEID
        obj['TRANSFER_MEMBER_NO_FROM'] = BANKTRANSFER_MEMBER_NO_FROM
        obj['TRANSFER_ACTYPE_TO'] = TRANSFER_ACTYPE_TO == null ? null : TRANSFER_ACTYPE_TO[0].TYPEID
        obj['TRANSFER_MEMBER_NO_TO'] = BANKTRANSFER_MEMBER_NO_TO
        obj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE == '' || item.SHARES_TRANSFER_DATE == null ? null : moment(item.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
        obj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE == '' || item.SHARES_RETURN_DATE == null ? null : moment(item.SHARES_RETURN_DATE).format('DD/MM/YYYY');
        obj['RESULATION_DATE'] = item.RESULATION_DATE == '' || item.RESULATION_DATE == null ? null : moment(item.RESULATION_DATE).format('DD/MM/YYYY');
        obj['RESULATION_NO'] = item.RESULATION_NO
        obj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
        obj['AC_CLOSEDT'] = item.AC_CLOSEDT == '' || item.AC_CLOSEDT == null ? null : moment(item.AC_CLOSEDT).format('DD/MM/YYYY');
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
        obj['IS_AUTO_TRF_ENTRY'] = item.IS_AUTO_TRF_ENTRY
        obj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO
        obj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED == 0 ? 0 : 1
        await queryRunner.manager.insert(DAILYSHRTRAN, obj)
      }
      await queryRunner.commitTransaction();
      console.log('DAILYSHRTRAN')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async RENEWALHISTORYselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select renewalhistory.*, schemast.typeid as actype from renewalhistory left join schemast on renewalhistory.ac_type=schemast.s_appl where RENEWAL_DATE > '${this.changedate}'`)
      let data = await this.jsonConverter(result);
      await connection2.close()
      for (let ele of data) {
        let renew = new RENEWALHISTORY()
        let acno: number = 0
        let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.ACTYPE);
        acno = 100000 + Number(ele.AC_NO)
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        renew['RENEWAL_DATE'] = ele.RENEWAL_DATE == '' || ele.RENEWAL_DATE == null ? null : moment(ele.RENEWAL_DATE).format('DD/MM/YYYY');
        renew['AC_RENEWAL_COUNTER'] = ele.AC_RENEWAL_COUNTER
        renew['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        renew['AC_TYPE'] = ele.ACTYPE
        renew['AC_NO'] = BANKACNO
        renew['OLD_MONTH'] = ele.OLD_MONTH
        renew['OLD_EXPIRY_DATE'] = ele.OLD_EXPIRY_DATE == '' || ele.OLD_EXPIRY_DATE == null ? null : moment(ele.OLD_EXPIRY_DATE).format('DD/MM/YYYY')
        renew['OLD_AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        renew['OLD_SANCTION_LIMIT'] = ele.OLD_SANCTION_LIMIT
        renew['OLD_SANCTION_DATE'] = ele.OLD_SANCTION_DATE == '' || ele.OLD_SANCTION_DATE == null ? null : moment(ele.OLD_SANCTION_DATE).format('DD/MM/YYYY')
        renew['OLD_SECURITY_AMOUNT'] = ele.OLD_SECURITY_AMOUNT
        renew['OLD_DRAWING_POWER'] = ele.OLD_DRAWING_POWER
        renew['USER_CODE'] = ele.USER_CODE
        renew['NEW_MONTH'] = ele.NEW_MONTH
        renew['NEW_DAYS'] = ele.NEW_DAYS
        renew['NEW_OPEN_DATE'] = ele.NEW_OPEN_DATE == '' || ele.NEW_OPEN_DATE == null ? null : moment(ele.NEW_OPEN_DATE).format('DD/MM/YYYY');
        renew['NEW_ASON_DATE'] = ele.NEW_ASON_DATE == '' || ele.NEW_ASON_DATE == null ? null : moment(ele.NEW_ASON_DATE).format('DD/MM/YYYY');
        renew['NEW_EXPIRY_DATE'] = ele.NEW_EXPIRY_DATE == '' || ele.NEW_EXPIRY_DATE == null ? null : moment(ele.NEW_EXPIRY_DATE).format('DD/MM/YYYY')
        renew['NEW_INTEREST_RATE'] = ele.NEW_INTEREST_RATE
        renew['OLD_AC_OPEN_DATE'] = ele.OLD_AC_OPEN_DATE == '' || ele.OLD_AC_OPEN_DATE == null ? null : moment(ele.OLD_AC_OPEN_DATE).format('DD/MM/YYYY');
        renew['OLD_AC_SCHMAMT'] = ele.OLD_AC_SCHEME_AMT
        renew['OLD_MATUAMT'] = ele.OLD_MATUAMT
        renew['OLD_DAYS'] = ele.OLD_DAYS
        renew['OLD_INTEREST_RATE'] = ele.OLD_INTEREST_RATE
        renew['BRANCH_CODE'] = this.BRANCH_CODE
        renew['OLD_AC_INSTALLMENT'] = ele.OLD_AC_INSTALLMENT
        renew['RENEWAL_AMOUNT'] = ele.RENEWAL_AMOUNT
        renew['NEW_RECEIPTNO'] = ele.NEW_RECEIPTNO
        renew['NEW_INT_CODE'] = ele.NEW_INT_CODE
        renew['NEW_MATURITY_AMOUNT'] = ele.NEW_MATURITY_AMOUNT
        renew['OLD_AC_SCHEME_AMT'] = ele.OLD_AC_SCHEME_AMT
        renew['OLD_RECEIPT_NO'] = ele.OLD_RECEIPT_NO
        renew['PENAL_INTEREST'] = ele.PENAL_INTEREST
        renew['NORMAL_INTEREST'] = ele.NORMAL_INTEREST
        renew['PAYABLE_INTEREST'] = ele.PAYABLE_INTEREST
        renew['INTEREST_PAID_AMT'] = ele.INTEREST_PAID_AMT
        renew['OFFICER_CODE'] = ele.OFFICER_CODE
        renew['INTEREST_DATE'] = ele.INTEREST_DATE == '' || ele.INTEREST_DATE == null ? null : moment(ele.INTEREST_DATE).format('DD/MM/YYYY');
        renew['IS_ASON_AC'] = ele.IS_ASON_AC
        if (ele.TRAN_STATUS == 'UP') {
          renew['TRAN_STATUS'] = '0'
          renew['SYSCHNG_LOGIN'] = null
        }
        else if (ele.TRAN_STATUS == 'PS') {
          renew['TRAN_STATUS'] = '1'
          renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
        }
        else if (ele.TRAN_STATUS == 'RJ') {
          renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
          renew['TRAN_STATUS'] = '2'
        }
        renew['TRAN_NO'] = ele.TRAN_NO
        renew['NORMAL_INT_TRTYPE'] = ele.NORMAL_INT_TRTYPE
        renew['NEW_LAST_TRNDATE'] = ele.NEW_LAST_TRNDATE == '' || ele.NEW_LAST_TRNDATE == null ? null : moment(ele.NEW_LAST_TRNDATE).format('DD/MM/YYYY');
        renew['OLD_LAST_TRNDATE'] = ele.OLD_LAST_TRNDATE == '' || ele.OLD_LAST_TRNDATE == null ? null : moment(ele.OLD_LAST_TRNDATE).format('DD/MM/YYYY');
        renew['OLD_ASON_DATE'] = ele.OLD_ASON_DATE == '' || ele.OLD_ASON_DATE == null ? null : moment(ele.OLD_ASON_DATE).format('DD/MM/YYYY');
        renew['OLD_INT_CODE'] = ele.OLD_INT_CODE
        renew['OLD_INTEREST_DATE'] = ele.OLD_INTEREST_DATE == '' || ele.OLD_INTEREST_DATE == null ? null : moment(ele.OLD_INTEREST_DATE).format('DD/MM/YYYY');
        renew['TRAN_TYPE'] = ele.TRAN_TYPE
        await queryRunner.manager.insert(RENEWALHISTORY, renew);
      }
      await queryRunner.commitTransaction();
      console.log('RENEWALHISTORY')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DEADSTOCKHEADERselect() {
    let queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute(`select DEADSTOCKHEADER.*, SCHEMAST.TYPEID AS ACTYPE from DEADSTOCKHEADER LEFT JOIN SCHEMAST ON DEADSTOCKHEADER.TRANSFER_ACTYPE = SCHEMAST.S_APPL where tran_date > '${this.changedate}' order by DEADSTOCKHEADER.TRAN_DATE,DEADSTOCKHEADER.TRAN_NO`)
      let data = await this.jsonConverter(result);
      for (let item of data) {
        let date = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        let obj = new DEADSTOCKHEADER()
        obj['TRAN_YEAR'] = item.TRAN_YEAR
        obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
        obj['TRAN_NO'] = item.TRAN_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['TRAN_TIME'] = item.TRAN_TIME
        obj['TRAN_TYPE'] = item.TRAN_TYPE
        obj['TRAN_MODE'] = item.TRAN_MODE
        obj['TRAN_DRCR'] = item.TRAN_DRCR
        obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
        obj['TRAN_GLACNO'] = item.TRAN_GLACNO
        obj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY')
        obj['CHEQUE_SERIES'] = item.CHEQUE_SERIES
        obj['CHEQUE_NO'] = item.CHEQUE_NO
        obj['TRANSFER_ACNOTYPE'] = item.TRANSFER_ACNOTYPE
        obj['TRANSFER_ACTYPE'] = item.ACTYPE
        obj['TRANSFER_ACNO'] = item.TRANSFER_ACNOTYPE == 'GL' ? item.TRANSFER_ACNO : Number(item.TRANSFER_ACNO) + 100000
        obj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
        obj['TRAN_SUPPLIER_NAME'] = item.TRAN_SUPPLIER_NAME
        obj['SUPPLIER_BILL_DATE'] = item.SUPPLIER_BILL_DATE == '' || item.SUPPLIER_BILL_DATE == null ? null : moment(item.SUPPLIER_BILL_DATE).format('DD/MM/YYYY')
        obj['SUPPLIER_BILL_NO'] = item.SUPPLIER_BILL_NO
        obj['RESO_NO'] = item.RESO_NO
        obj['RESO_DATE'] = item.RESO_DATE == '' || item.RESO_DATE == null ? null : moment(item.RESO_DATE).format('DD/MM/YYYY')
        obj['NARRATION'] = item.NARRATION?.replace("\x00", "")
        obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
        obj['USER_CODE'] = item.USER_CODE
        obj['OFFICER_CODE'] = item.OFFICER_CODE
        obj['CGST_AMT'] = item.CGST_AMT
        obj['SGST_AMT'] = item.SGST_AMT
        obj['IGST_AMT'] = item.IGST_AMT
        obj['GST_NO'] = item.GST_NO
        obj['SYSCHNG_LOGIN'] = item.OFFICER_CODE
        if (item.TRAN_STATUS == 'UP') {
          obj['TRAN_STATUS'] = 0
        }
        else if (item.TRAN_STATUS == 'PS') {
          obj['TRAN_STATUS'] = 1
        }
        else if (item.TRAN_STATUS == 'RJ') {
          obj['TRAN_STATUS'] = 2
        }
        obj['status'] = 1
        let header = await queryRunner.manager.save(DEADSTOCKHEADER, obj)
        let detail = await connection2.execute(`select * from deadstockdetail where tran_date=TO_DATE('${date}','DD/MM/YYYY') and tran_no=${item.TRAN_NO} order by serial_no`)
        let resultDetail = await this.jsonConverter(detail);
        for (let ele of resultDetail) {
          let itemmasterData = await this.ITEMMASTERService.findOne({ ITEM_CODE: ele.ITEM_CODE })
          let details = new DEADSTOCKDETAIL()
          details['TRAN_YEAR'] = ele.TRAN_YEAR
          details['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
          details['TRAN_NO'] = ele.TRAN_NO
          details['SERIAL_NO'] = ele.SERIAL_NO
          details['TRAN_DRCR'] = ele.TRAN_DRCR
          details['ITEM_CODE'] = ele.ITEM_CODE
          details['ITEM_TYPE'] = Number(itemmasterData?.ITEM_TYPE)
          details['ITEM_NAME'] = itemmasterData?.ITEM_NAME
          details['ITEM_RATE'] = ele.ITEM_RATE
          details['ITEM_QTY'] = ele.ITEM_QTY
          details['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
          details['TRAN_REF_NO'] = ele.TRAN_REF_NO
          details['DEPR_RATE'] = ele.DEPR_RATE
          details['deadstockHeader'] = header.id
          await queryRunner.manager.insert(DEADSTOCKDETAIL, details)
        }
      }
      await connection2.close()
      await queryRunner.commitTransaction();
      console.log('DEADSTOCKHEADER-DEADSTOCKDETAIL')
    } catch (error) {
      // Rollback the transaction if an error occurs
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      // Release the query runner
      await queryRunner.release();
    }
  }
  async DEPOCLOSETRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOCLOSETRAN.*, SCHEMAST.TYPEID AS ACTYPE from DEPOCLOSETRAN LEFT JOIN SCHEMAST ON DEPOCLOSETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
        order by DEPOCLOSETRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOCLOSETRAN where tran_date > '${this.changedate}'`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.DEPOCLOSETRANSUB(data);
  }
  async INTERESTTRANselect() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select INTERESTTRAN.*, SCHEMAST.TYPEID AS ACTYPE from INTERESTTRAN LEFT JOIN SCHEMAST ON INTERESTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL where tran_date > '${this.changedate}'
        order by INTERESTTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from INTERESTTRAN where tran_date > '${this.changedate}'`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.INTERESTTRANSUB(data);
  }

  async IDmasterutility(data) {
    let REGarr = data.AC_NAME.split(' ');
    let updateIdmaster = await this.IDMASTERService.update({ ORA_AC_NO: data.AC_NO },
      {
        L_NAME_REG: REGarr == null ? null : REGarr[0],
        F_NAME_REG: REGarr == null ? null : REGarr[1],
        M_NAME_REG: REGarr == null ? null : REGarr[2]
      })
  }

  async uploadidmaster(data) {
    let idmast = new IDMASTER()
    idmast['AC_BIRTH_DT'] = data.BIRTH_DATE
    idmast['L_NAME'] = data.ENG_LAST
    idmast['M_NAME'] = data.ENG_MIDDLE
    idmast['F_NAME'] = data.ENG_FIRST
    idmast['F_NAME_REG'] = data.MAR_FIRST
    idmast['M_NAME_REG'] = data.MAR_MIDDLE
    idmast['L_NAME_REG'] = data.MAR_LAST
    idmast['AC_NAME'] = data.ENG_NAME
    let cust = await this.IDMASTERService.save(idmast)

    let custAdd = new CUSTOMERADDRESS();
    custAdd['AC_ADDFLAG'] = true;
    custAdd['AC_ADDR'] = data.ADDRESS
    custAdd['AC_CTCODE'] = Number(data.AC_CTCODE);
    custAdd['idmasterID'] = cust.id;
    let addcust = await this.CUSTOMERADDRESSService.insert(custAdd)
  }

  async shmasterrec(data) {
    let ele = data
    //idmaster find   
    let idmasterID
    let acno = Number(ele.SR_NO) + 100000
    let BANKACNO = '103' + '101' + '901' + acno
    ele.AC_NAME = ele.ENG_NAME
    let newObj = new SHMASTER();
    newObj['AC_ACNOTYPE'] = 'SH';
    newObj['AC_NO'] = acno;
    newObj['AC_CUSTID'] = ele.SR_NO;
    newObj['AC_NAME'] = ele.AC_NAME;
    newObj['AC_OPDATE'] = '15/10/2023'
    newObj['AC_OP_BAL'] = '0'
    newObj['status'] = 1;
    newObj['AC_CLOSED'] = '0'
    newObj['AC_BRANCH'] = '101'
    //relation  
    newObj['idmasterID'] = ele.SR_NO
    newObj['AC_DIRECT'] = 1
    newObj['AC_CATG'] = 1
    newObj['BRANCH_CODE'] = 101
    newObj['AC_TYPE'] = 5
    newObj['BANKACNO'] = BANKACNO;
    newObj['SYSCHNG_LOGIN'] = 'CCPL';
    let shmasterinsert = await this.SHMASTERService.save(newObj);

  }





  async PIGMYTRANS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`
        select PIGMY.*, SCHEMAST.S_APPL from PIGMY LEFT JOIN SCHEMAST ON PIGMY.TRAN_ACTYPE= SCHEMAST.S_APPL   
        order by PIGMY.TRAN_NO `);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    // let datacount = await connection2.execute(`select count(*) as count from PIGMY `);
    // var result1 = await this.jsonConverter(datacount);
    // await connection2.close();
    // this.count = result1[0].COUNT;
    //   await this.PIGMYTRANSSUB(data);
    // }
    // async PIGMYTRANSSUB(data) {
    for (let item of data) {
      // let schemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == item.TRAN_ACTYPE);
      // let AGENT_ACTYPE = null
      // let agentschemastData = null
      // if (item.AGENT_ACTYPE != null) {
      //   AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
      //   agentschemastData = this.PostSchemast.filter(ele => ele['AC_TYPE'] == AGENT_ACTYPE[0].S_APPL);
      // }
      // let agentBANKACNO = null
      // if (item.AGENT_ACNO != 0 && agentschemastData != null) {
      //   let agentacno = Number(item.AGENT_ACNO) + 100000
      //   agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      // }
      let data = await this.PGMASTERService.query(`select * from PGMASTER where  "BRANCH_CODE"='102' AND "REFACNO" = '${item.TRAN_ACNO}' AND "REF_ACTYPE" = '${item.TRAN_ACTYPE}'`)
      // // console.log(`
      // // select * from DEPOTRAN where CAST("TRAN_DATE" AS DATE) ='${moment(item.TRAN_DATE).format('DD/MM/YYYY')}'
      // // `);
      //   let tranamt = Number(item.TRAN_AMOUNT).toFixed(2)
      // let histranDuplicate = data.filter(ele2 => ele2['TRAN_ACNO'] == BANKACNO && ele2['TRAN_TIME'] == item.TRAN_TIME && ele2['TRAN_ACNOTYPE'] == item.TRAN_ACNOTYPE && ele2['TRAN_ACTYPE'] == schemastData[0].id && ele2['TRAN_GLACNO'] == item.TRAN_GLACNO && ele2['BRANCH_CODE'] == this.BRANCH_CODE && ele2['TRAN_AMOUNT'] == tranamt );




      // let acno = Number(item.TRAN_ACNO) + 100000
      // let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + '401' + acno
      let loanObj = new PIGMYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO == undefined || item.TRAN_NO == null ? 0 : item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO == undefined || item.TRAN_NO == null ? 0 : item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = 2
      }
      loanObj['ENTRY_TYPE'] = item.ENTRY_TYPE;
      loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
      loanObj['AGENT_ACTYPE'] = 2;
      loanObj['AGENT_ACNO'] = '118102301100004';
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = 1;


      if (data.length != 0) {

        loanObj['TRAN_ACNO'] = data[0].BANKACNO;

      } else {
        loanObj['TRAN_ACNO'] = '118102401100858'
      }

      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO == null ? 0 : item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES == null ? 0 : item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO == null ? 0 : item.CHEQUE_NO;
      loanObj['NARRATION'] = item.NARRATION == undefined || item.NARRATION == null ? null : item.NARRATION?.replace("\x00", "")
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE == null ? 0 : item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE == null ? 0 : item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE == null ? 0 : item.OFFICER_CODE;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT == null ? 0 : item.INTEREST_AMOUNT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT == null ? 0 : item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT == null ? 0 : item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT == null ? 0 : item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT == null ? 0 : item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT == null ? 0 : item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT == null ? 0 : item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT == null ? 0 : item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT == null ? 0 : item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT == null ? 0 : item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT == null ? 0 : item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT == null ? 0 : item.OTHER10_AMOUNT;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT == null ? 0 : item.OTHER11_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE == 0 ? 0 : item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO == null ? 0 : item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['CHART_NO'] = item.CHART_NO == null ? 0 : item.CHART_NO;
      loanObj['RECEIPT_NO'] = item.RECEIPT_NO == null ? 0 : item.RECEIPT_NO;
      loanObj['EDIT_USER'] = item.EDIT_USER == null ? 0 : item.EDIT_USER;
      loanObj['EDIT_DATE'] = item.EDIT_DATE == '' || item.EDIT_DATE == null ? null : moment(item.EDIT_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_DATE'] = item.AUTO_VOUCHER_DATE == '' || item.AUTO_VOUCHER_DATE == null ? null : moment(item.AUTO_VOUCHER_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_NO'] = item.AUTO_VOUCHER_NO == null ? 0 : item.AUTO_VOUCHER_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      loanObj['REFACNO'] = item.TRAN_ACNO
      loanObj['REFACTYPE'] = item.TRAN_ACTYPE
      loanObj['PGID'] = '1'


      await this.PIGMYTRANService.save(loanObj);
    }
    // if (this.offset <= this.count && this.flag == 0) {
    //   this.offset = this.offset + 1000;
    //   await this.PIGMYTRAN()
    // } else if (this.flag == 1) {
    //   console.log('PIGMYTRAN');
    //   this.offset = 0
    //   this.flag = 0
    // }
    // else if (this.flag == 0 && this.offset != 0) {
    //   this.offset = this.offset + 1000;
    //   this.flag = 1
    //   await this.PIGMYTRAN()
    // }

  }

  //CONVERT MARATHI TO ENGLISH
  private dictionary = [
    { marathi: 'ज्ञ', english: 'gy' }, { marathi: 'क्ष', english: 'ksha' },
    { marathi: 'श्र', english: 'shra' }, { marathi: 'त्र', english: 'tra' },
    { marathi: 'प्रि', english: 'pri' }, { marathi: 'प्र', english: 'pra' },
    { marathi: 'प्री', english: 'pree' }, { marathi: 'श्री', english: 'shri' },
    { marathi: 'राव', english: 'rav' }, { marathi: 'श्रि', english: 'shri' },
    { marathi: 'अ', english: 'a' }, { marathi: 'आ', english: 'aa' },
    { marathi: 'इ', english: 'i' }, { marathi: 'ई', english: 'ee' },
    { marathi: 'उ', english: 'u' }, { marathi: 'ऊ', english: 'oo' },
    { marathi: 'ए', english: 'e' }, { marathi: 'ऐ', english: 'ai' },
    { marathi: 'ओ', english: 'o' }, { marathi: 'औ', english: 'au' },
    { marathi: 'ऋ', english: 'ru' }, { marathi: 'क्रां', english: 'kran' },
    { marathi: 'क', english: 'k' }, { marathi: 'ख', english: 'kh' },
    { marathi: 'ग', english: 'g' }, { marathi: 'घ', english: 'gh' },
    { marathi: 'च', english: 'ch' }, { marathi: 'छ', english: 'chha' },
    { marathi: 'ज', english: 'j' }, { marathi: 'झ', english: 'jh' },
    { marathi: 'ट', english: 't' }, { marathi: 'ठ', english: 'th' },
    { marathi: 'ड', english: 'd' }, { marathi: 'ढ', english: 'dh' },
    { marathi: 'ण', english: 'n' }, { marathi: 'त', english: 't' },
    { marathi: 'थ', english: 'th' }, { marathi: 'द', english: 'd' },
    { marathi: 'ध', english: 'dh' }, { marathi: 'न', english: 'n' },
    { marathi: 'प', english: 'p' }, { marathi: 'फ', english: 'ph' },
    { marathi: 'ब', english: 'b' }, { marathi: 'भ', english: 'bh' },
    { marathi: 'म', english: 'm' }, { marathi: 'य', english: 'y' },
    { marathi: 'र', english: 'r' }, { marathi: 'ल', english: 'l' },
    { marathi: 'व', english: 'v' }, { marathi: 'श', english: 'sh' },
    { marathi: 'ष', english: 'sh' }, { marathi: 'स', english: 's' },
    { marathi: 'ह', english: 'h' }, { marathi: 'ळ', english: 'l' },
    { marathi: 'ा', english: 'a' }, { marathi: 'ि', english: 'i' },
    { marathi: 'ी', english: 'ee' }, { marathi: 'ु', english: 'u' },
    { marathi: 'ू', english: 'oo' }, { marathi: 'े', english: 'e' },
    { marathi: 'ै', english: 'ai' }, { marathi: 'ो', english: 'o' },
    { marathi: 'ौ', english: 'au' }, { marathi: 'ृ', english: 'ru' },
    { marathi: 'ः', english: 'h' }, { marathi: 'ँ', english: 'n' },
    { marathi: '्', english: '' }, { marathi: ' ', english: ' ' },
    { marathi: 'स्व', english: 'swa' }, { marathi: 'श्व', english: 'shwa' },
    { marathi: 'सं', english: 'san' }, { marathi: 'वं', english: 'van' },
    { marathi: 'व्ह', english: 'wha' }, { marathi: 'यां', english: 'yan' },
    { marathi: 'रकर', english: 'rkar' }, { marathi: 'चं', english: 'chan' },
    { marathi: 'द्र', english: 'dra' }, { marathi: 'तराव', english: 'trao' },
    { marathi: 'रराव', english: 'rrao' }, { marathi: 'र्य', english: 'rya' },
    { marathi: 'ड़े', english: 'de' }, { marathi: 'बां', english: 'ban' },
    { marathi: 'गु', english: 'gu' }, { marathi: 'चौ', english: 'chou' },
    { marathi: 'कडे', english: 'kde' }, { marathi: 'कृ', english: 'kri' },
    { marathi: 'टव', english: 'taw' }, { marathi: 'सदा', english: 'sada' },
    { marathi: 'र्डे', english: 'rde' }, { marathi: 'साव', english: 'sawa' },
    { marathi: 'र्वे', english: 'rve' }, { marathi: 'न्द्र', english: 'ndra' },
    { marathi: 'गे', english: 'ge' }, { marathi: 'मृ', english: 'mri' },
    { marathi: 'द्ध', english: 'ddh' }, { marathi: 'र्थ', english: 'rth' },
    { marathi: 'क्षी', english: 'kshi' }, { marathi: 'व्हा', english: 'avha' },
    { marathi: 'ग्रं', english: 'gran' }, { marathi: 'रं', english: 'ran' },
    { marathi: 'पां', english: 'paan' }, { marathi: 'स्ने', english: 'sne' },
    { marathi: 'ळुं', english: 'lun' }, { marathi: 'ग्रा', english: 'gara' },
    { marathi: 'सिंग', english: 'singh' }, { marathi: 'वा', english: 'va' },
    // { marathi: 'वल', english: 'wal' },
    { marathi: 'क्ता', english: 'kta' },
    { marathi: 'र्षा', english: 'rsha' }, { marathi: 'दग', english: 'dg' },
    { marathi: 'र्मा', english: 'rma' }, { marathi: 'स्ल', english: 'sla' },
    { marathi: 'न्स', english: 'ns' }, { marathi: 'ब्दु', english: 'bdu' },
    { marathi: 'सै', english: 'sai' }, { marathi: 'फ़', english: 'f' },
    { marathi: 'र्ज', english: 'rja' }, { marathi: 'र्जी', english: 'rji' },
    { marathi: 'क्सा', english: 'ksa' }, { marathi: 'र्द', english: 'rd' },
    { marathi: 'क्क', english: 'kka' }, { marathi: 'श्चं', english: 'shchan' },
    { marathi: 'स्मि', english: 'smi' }, { marathi: 'र्णी', english: 'rni' },
    { marathi: 'ध्रु', english: 'dhru' }, { marathi: 'गृ', english: 'gru' },
    { marathi: 'र्गे', english: 'rge' }, { marathi: 'र्के', english: 'rke' },
    { marathi: 'ग्य', english: 'gya' }, { marathi: 'डां', english: 'dan' },
    { marathi: 'प्ती', english: 'pti' }, { marathi: 'र्गु', english: 'rgu' },
    { marathi: 'त्रि', english: 'tri' }, { marathi: 'ज्य', english: 'jya' },
    { marathi: 'द्व', english: 'dw' }, { marathi: 'क्की', english: 'kki' },
    { marathi: 'रॉ', english: 'ro' }, { marathi: 'त्रे', english: 'tre' },
    { marathi: 'न्ह', english: 'nh' }, { marathi: 'स्वि', english: 'swi' },
    { marathi: 'स्वी', english: 'swi' }, { marathi: 'र्ती', english: 'rti' },
    { marathi: 'ल्मि', english: 'lmi' }, { marathi: 'र्वी', english: 'rvi' },
    { marathi: 'ट्टी', english: 'tty' }, { marathi: 'ळूं', english: 'lun' },
    { marathi: 'ज्यो', english: 'jyo' }, { marathi: 'ज्व', english: 'jwa' },
    { marathi: 'ल्क', english: 'lk' }, { marathi: 'द्या', english: 'dya' },
    { marathi: 'र्व', english: 'rva' }, { marathi: 'र्च', english: 'rcha' },
    { marathi: 'क्ष्म', english: 'xm' }, { marathi: 'ठ्ठ', english: 'ttha' },
    { marathi: 'ण्‍ण', english: 'nn' }, { marathi: 'स्म', english: 'sm' },
    { marathi: 'च्छिं', english: 'chhin' }, { marathi: 'त्य', english: 'tya' },
    { marathi: 'ल्प', english: 'lpa' }, { marathi: 'श्वि', english: 'shwi' },
    { marathi: 'त्त', english: 'tta' }, { marathi: 'क्म', english: 'km' },
    { marathi: 'वाघ', english: 'wagh' }, { marathi: 'म्ह', english: 'mh' },
    { marathi: 'स्त', english: 'st' }, { marathi: 'द्म', english: 'dm' },
    { marathi: 'क्र', english: 'kra' }, { marathi: 'श्य', english: 'shy' },
    { marathi: 'वृ', english: 'vru' }, { marathi: 'त्ती', english: 'tti' },
    { marathi: 'र्मे', english: 'rme' }, { marathi: 'र्जु', english: 'rju' },
    { marathi: 'प्रे', english: 'pre' }, { marathi: 'त्न', english: 'tn' },
    { marathi: 'र्लो', english: 'rlo' }, { marathi: 'स्क', english: 'ska' },
    { marathi: 'ल्त', english: 'lt' }, { marathi: 'र्त', english: 'rt' },
    { marathi: 'फै', english: 'fai' }, { marathi: 'ल्ब', english: 'lb' },
    { marathi: 'त्म', english: 'tm' }, { marathi: 'र्श', english: 'rsh' },
    { marathi: 'ग्र', english: 'gr' }, { marathi: 'ल्पे', english: 'lpe' },
    { marathi: 'श्त', english: 'sht' }, { marathi: 'श्रृ', english: 'shru' },
    { marathi: 'ब्रे', english: 'bre' }, { marathi: 'ध्द', english: 'ddh' },
    { marathi: 'द्रे', english: 'dre' }, { marathi: 'तृ', english: 'tru' },
    { marathi: 'सृ', english: 'sru' }, { marathi: 'क्ती', english: 'kti' },
    { marathi: 'क्ति', english: 'kti' }, { marathi: 'र्डी', english: 'rdi' },
    { marathi: 'सॉ', english: 'saw' }, { marathi: 'ऑ', english: 'o' },
    { marathi: 'ॲ', english: 'a' }, { marathi: 'कॉ', english: 'ko' },
    { marathi: 'प्लॉ', english: 'plo' }, { marathi: 'फ्लॅ', english: 'fla' },
    { marathi: 'डॉ', english: 'do' }, { marathi: 'ल्ह', english: 'lh' },
    { marathi: 'बौ', english: 'bo' }, { marathi: 'त्स', english: 'tsa' },
    { marathi: 'वॉर्ड', english: 'ward' }, { marathi: 'कॅम्प', english: 'camp' },
    { marathi: 'फ्लॉट', english: 'plot' }




  ];


  translatefullwords(input: string): string {
    if (input === undefined || input === null) {
      return '';
    }

    // Ensure it's always a string
    input = String(input)
    let dict = this.dictionary;
    let matras = ['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ'];
    let schwaConsonants = ['क', 'ग', 'म', 'न', 'श', 'ज', 'त', 'प', 'ब', 'द', 'भ', 'स', 'ण', 'ह', 'ध', 'व', 'य', 'र', 'ख', 'ल'];

    let corrections: Record<string, string> = {

      'krishnnath': 'krishnath', 'sanpada': 'sampada', 'nilkanthth': 'nilkanth', 'sanpatti': 'sampatti', 'sanbhaji': 'sambhaji', 'jakir': 'zakir', 'rais': 'raees', 'sharaft': 'sharafat', 'lkshami': 'laxmi', 'rokde': 'rokade', 'kuraoad': 'kurawad',
      'yedve': 'yedave', 'vakude': 'wakude', 'gayakavad': 'gayakwad', 'laxmn': 'laxman', 'tvinkal': 'twinkle', 'karaoti': 'karavati', 'akanath': 'eknath', 'dhavare': 'dhaware', 'pavar': 'pawar', 'asiph': 'asif', 'satawilakar': 'satvilkar', 'kutubuddin': 'qutubuddin',
      'vitthl': 'vitthal', 'balkrishn': 'balkrishna', 'kambale': 'kamble', 'daud': 'dawood', 'dgdu': 'dagdu', 'aphtab': 'aftab', 'gotl': 'gotal', 'aphsana': 'Afsana', 'akasesarij': 'accessories', 'oto': 'auto', 'kolej': 'college', 'shekh': 'sheikh', 'chipalun': 'chiplun', 'mu.po.chipalun': 'mu.po.chiplun', 'ta.chipalun': 'ta.chiplun'

    };

    let finalResult: string[] = [];

    let words = input.split(' '); // split input into words
    for (let word of words) {
      let result = '';
      let i = 0;
      let name = word;

      while (i < name.length) {
        let matched = false;

        // Handle nasal matra: ां → aan
        if (i + 1 < name.length && name[i] === 'ा' && name[i + 1] === 'ं') {
          result += 'aan';
          i += 2;
          matched = true;
          continue;
        }

        // Handle standalone ं with context
        if (!matched && name[i] === 'ं') {
          let nextChar = name[i + 1] || '';
          let nasalMap: Record<string, string> = {
            'क': 'n', 'ख': 'ng', 'ग': 'n', 'घ': 'ng',
            'च': 'n', 'छ': 'nch', 'ज': 'n', 'झ': 'n',
            'ट': 'nt', 'ठ': 'n', 'ड': 'n', 'ढ': 'n',
            'त': 'n', 'थ': 'n', 'द': 'n', 'ध': 'n',
            'प': 'm', 'फ': 'm', 'ब': 'm', 'भ': 'm', 'म': 'm',
          };
          let nasal = nasalMap[nextChar] || 'n';
          result += nasal;
          i++;
          matched = true;
          continue;
        }


        // Handle halant-based clusters with optional matra (e.g., प् + र + ि = प्रि)
        if (i + 3 < name.length && name[i + 1] === '्') {
          let cluster = name[i] + name[i + 1] + name[i + 2]; // प् + र = प्र
          let matraChar = name[i + 3];
          let clusterWithMatra = cluster + matraChar;

          // Try full cluster with matra first (e.g., 'प्रि')
          let fullEntry = dict.find(d => d.marathi === clusterWithMatra);
          if (fullEntry) {
            result += fullEntry.english;
            i += 4;
            matched = true;
            continue;
          }

          // Fallback: just cluster (e.g., 'प्र')
          let clusterEntry = dict.find(d => d.marathi === cluster);
          let matraEntry = dict.find(d => d.marathi === matraChar);
          if (clusterEntry && matraEntry && matras.includes(matraChar)) {
            result += clusterEntry.english + matraEntry.english;
            i += 4;
            matched = true;
            continue;
          }
        }

        // Try 5-char match (e.g., क् + र + ा + ं + consonant)
        if (!matched && i + 4 < name.length) {
          let fiveChar = name.substring(i, i + 5);
          let entry = dict.find(d => d.marathi === fiveChar);
          if (entry) {
            result += entry.english;
            i += 5;
            matched = true;
            continue;
          }
        }


        // Try 4-char match (e.g., क्रां)
        if (!matched && i + 3 < name.length) {
          let fourChar = name.substring(i, i + 4);
          let entry = dict.find(d => d.marathi === fourChar);
          if (entry) {
            result += entry.english;
            i += 4;
            matched = true;
            continue;
          }
        }




        // Try direct 3-char match
        if (!matched && i + 2 < name.length) {
          let threeChar = name.substring(i, i + 3);
          let entry = dict.find(d => d.marathi === threeChar);
          if (entry) {
            result += entry.english;
            i += 3;
            matched = true;
            continue;
          }
        }

        // Try direct 2-char match
        if (!matched && i + 1 < name.length) {
          let twoChar = name.substring(i, i + 2);
          let entry = dict.find(d => d.marathi === twoChar);
          if (entry) {
            result += entry.english;
            i += 2;
            matched = true;
            continue;
          }
        }

        // Consonant + matra match
        if (!matched && i + 1 < name.length) {
          let consonant = dict.find(d => d.marathi === name[i]);
          let matra = dict.find(d => d.marathi === name[i + 1]);

          if (consonant && matra && matras.includes(name[i + 1])) {
            result += consonant.english + matra.english;
            i += 2;
            matched = true;
            continue;
          }
        }




        //constant doubling
        if (!matched && i + 2 < name.length && name[i + 1] === '्' && name[i] === name[i + 2]) {
          let baseConsonant = dict.find(d => d.marathi === name[i]);
          let matra = dict.find(d => d.marathi === name[i + 3]);

          if (baseConsonant) {
            result += baseConsonant.english + baseConsonant.english;

            if (matra && matras.includes(name[i + 3])) {
              result += matra.english;
              i += 4; // consonant + halant + consonant + matra
            } else {
              i += 3; // consonant + halant + consonant
            }

            matched = true;
            continue;
          }
        }



        // Fallback to single-char handling with smart schwa
        let oneChar = name[i];
        let entry = dict.find(d => d.marathi === oneChar);
        let nextChar = name[i + 1];

        let shouldAddA =
          entry &&
          schwaConsonants.includes(oneChar) &&
          !matras.includes(nextChar) &&
          i + 1 < name.length; // only add 'a' if not at end of word

        if (shouldAddA) {
          result += entry.english + 'a';
        } else {
          result += entry ? entry.english : oneChar;
        }
        i++;
      }

      // Final cleanups for each word
      result = result
        .replace(/aa/g, 'a')
        .replace(/ee/g, 'i')
        .replace(/oo/g, 'u')
        .replace(/([aeiou])\1+/g, '$1');

      // Apply per-word corrections
      result = corrections[result] || result;

      finalResult.push(result.trim());
    }

    return finalResult.join(' ');
  }

  async updateIdmaster(data) {

    let data1
    let newData = await this.IDMASTERService.query(`SELECT * FROM IDMASTER WHERE "BRANCH_CODE" = 102`)

    for (data1 of newData) {
      let name = data1.AC_NAME

      let namearr = name.split(' ');
      let lname = namearr == null ? null : namearr[0]
      let fname = namearr == null ? null : namearr[1]
      let mname = namearr == null ? null : namearr[2]
    }




  }


  // //method that counts the rows of oracle and postgres and return if they are in sync or not
  async getSyncStatus(tableName: string, dependencies: string[]): Promise<{ isSynced: boolean, mismatched: string[] }> {
    let connection = await oracledb.getConnection({
      user: this.user,
      password: this.password,
      connectString: this.connectionString
    });

    let mismatched: string[] = [];

    for (let dep of dependencies) {
      // 1. Get Oracle count
      const oracleResult = await connection.execute(`SELECT COUNT(*) as cnt FROM ${dep}`);
      const oracleCount = oracleResult.rows[0][0];

      // 2. Get Postgres count (assuming you have access to the service for the dependency)
      // You might need to inject the repository for the dependency table or use a helper
      const pgCount = await this.connection.getRepository(dep).count();

      if (oracleCount !== pgCount) {
        mismatched.push(dep);
      }
    }

    await connection.close();
    return {
      isSynced: mismatched.length === 0,
      mismatched: mismatched
    };
  }



// Backend: Method to check if a single table's row count matches
// Update this method inside migrate.service.ts
  async checkSingleTableSync(tableName: string): Promise<{ isSynced: boolean, oracleCount: number, pgCount: number }> {
    let connection = await oracledb.getConnection({
      user: this.user,
      password: this.password,
      connectString: this.connectionString
    });

    try {
      const oracleResult = await connection.execute(`SELECT COUNT(*) as cnt FROM ${tableName}`);
      const oracleCount = Number(oracleResult.rows[0][0]);
      
      // Assuming this.connection is your Postgres connection
      const pgCount = await this.connection.getRepository(tableName).count();

      // Return the numbers along with the true/false status!
      return { 
        isSynced: oracleCount === pgCount,
        oracleCount: oracleCount,
        pgCount: pgCount
      }; 
    } catch (error) {
      console.error(`Error checking sync for ${tableName}:`, error);
      throw error;
    } finally {
      await connection.close();
    }
  }


}