/* eslint-disable max-len */
module.exports = {
    xml:`<?xml version="1.0" encoding="UTF-8"?>
    <wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://tempuri.org/" targetNamespace="http://tempuri.org/">
      <wsdl:types>
        <s:schema elementFormDefault="qualified" targetNamespace="http://tempuri.org/">
          <s:element name="CalcPrecoPrazo">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdEmpresa" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDsSenha" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nCdFormato" type="s:int" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlComprimento" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlAltura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlLargura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlDiametro" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdMaoPropria" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlValorDeclarado" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdAvisoRecebimento" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoPrazoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoPrazoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:complexType name="cResultado">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="Servicos" type="tns:ArrayOfCServico" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="ArrayOfCServico">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="unbounded" name="cServico" type="tns:cServico" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="cServico">
            <s:sequence>
              <s:element minOccurs="1" maxOccurs="1" name="Codigo" type="s:int" />
              <s:element minOccurs="0" maxOccurs="1" name="Valor" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="PrazoEntrega" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="ValorMaoPropria" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="ValorAvisoRecebimento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="ValorValorDeclarado" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="EntregaDomiciliar" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="EntregaSabado" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="Erro" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="MsgErro" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="ValorSemAdicionais" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="obsFim" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="DataMaxEntrega" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="HoraMaxEntrega" type="s:string" />
            </s:sequence>
          </s:complexType>
          <s:element name="CalcPrecoPrazoData">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdEmpresa" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDsSenha" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nCdFormato" type="s:int" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlComprimento" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlAltura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlLargura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlDiametro" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdMaoPropria" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlValorDeclarado" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdAvisoRecebimento" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoPrazoDataResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoPrazoDataResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoPrazoRestricao">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdEmpresa" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDsSenha" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nCdFormato" type="s:int" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlComprimento" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlAltura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlLargura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlDiametro" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdMaoPropria" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlValorDeclarado" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdAvisoRecebimento" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoPrazoRestricaoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoPrazoRestricaoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPreco">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdEmpresa" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDsSenha" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nCdFormato" type="s:int" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlComprimento" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlAltura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlLargura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlDiametro" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdMaoPropria" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlValorDeclarado" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdAvisoRecebimento" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoData">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdEmpresa" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDsSenha" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nCdFormato" type="s:int" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlComprimento" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlAltura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlLargura" type="s:decimal" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlDiametro" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdMaoPropria" type="s:string" />
                <s:element minOccurs="1" maxOccurs="1" name="nVlValorDeclarado" type="s:decimal" />
                <s:element minOccurs="0" maxOccurs="1" name="sCdAvisoRecebimento" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoDataResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoDataResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazo">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrazoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazoData">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazoDataResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrazoDataResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazoRestricao">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrazoRestricaoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrazoRestricaoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoFAC">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="nVlPeso" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="strDataCalculo" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcPrecoFACResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcPrecoFACResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcDataMaxima">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="codigoObjeto" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="CalcDataMaximaResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="CalcDataMaximaResult" type="tns:cResultadoObjeto" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:complexType name="cResultadoObjeto">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="Objetos" type="tns:ArrayOfCObjeto" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="ArrayOfCObjeto">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="unbounded" name="cObjeto" type="tns:cObjeto" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="cObjeto">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="codigo" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="servico" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="cepOrigem" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="cepDestino" type="s:string" />
              <s:element minOccurs="1" maxOccurs="1" name="prazoEntrega" type="s:int" />
              <s:element minOccurs="0" maxOccurs="1" name="dataPostagem" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="dataPostagemCalculo" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="dataMaxEntrega" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="postagemDH" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="dataUltimoEvento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="codigoUltimoEvento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="tipoUltimoEvento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="descricaoUltimoEvento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="erro" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="msgErro" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="nuTicket" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="formaPagamento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="valorPagamento" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="nuContrato" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="nuCartaoPostagem" type="s:string" />
            </s:sequence>
          </s:complexType>
          <s:element name="ListaServicos">
            <s:complexType />
          </s:element>
          <s:element name="ListaServicosResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="ListaServicosResult" type="tns:cResultadoServicos" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:complexType name="cResultadoServicos">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="ServicosCalculo" type="tns:ArrayOfCServicosCalculo" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="ArrayOfCServicosCalculo">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="unbounded" name="cServicosCalculo" type="tns:cServicosCalculo" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="cServicosCalculo">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="codigo" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="descricao" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="calcula_preco" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="calcula_prazo" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="erro" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="msgErro" type="s:string" />
            </s:sequence>
          </s:complexType>
          <s:element name="ListaServicosSTAR">
            <s:complexType />
          </s:element>
          <s:element name="ListaServicosSTARResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="ListaServicosSTARResult" type="tns:cResultadoServicos" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="VerificaModal">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="VerificaModalResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="VerificaModalResult" type="tns:cResultadoModal" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:complexType name="cResultadoModal">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="ServicosModal" type="tns:ArrayOfCModal" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="ArrayOfCModal">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="unbounded" name="cModal" type="tns:cModal" />
            </s:sequence>
          </s:complexType>
          <s:complexType name="cModal">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="codigo" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="modal" type="s:string" />
              <s:element minOccurs="0" maxOccurs="1" name="obs" type="s:string" />
            </s:sequence>
          </s:complexType>
          <s:element name="getVersao">
            <s:complexType />
          </s:element>
          <s:element name="getVersaoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="getVersaoResult" type="tns:versao" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:complexType name="versao">
            <s:sequence>
              <s:element minOccurs="0" maxOccurs="1" name="versaoAtual" type="s:string" />
            </s:sequence>
          </s:complexType>
          <s:element name="calcPrazoNovo">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="0" maxOccurs="1" name="nCdServico" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepOrigem" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sCepDestino" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="sDtCalculo" type="s:string" />
                <s:element minOccurs="0" maxOccurs="1" name="strVerificaRestricao" type="s:string" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="calcPrazoNovoResponse">
            <s:complexType>
              <s:sequence>
                <s:element minOccurs="1" maxOccurs="1" name="calcPrazoNovoResult" type="tns:cResultado" />
              </s:sequence>
            </s:complexType>
          </s:element>
          <s:element name="cResultado" type="tns:cResultado" />
          <s:element name="cResultadoObjeto" type="tns:cResultadoObjeto" />
          <s:element name="cResultadoServicos" type="tns:cResultadoServicos" />
          <s:element name="cResultadoModal" type="tns:cResultadoModal" />
          <s:element name="versao" type="tns:versao" />
        </s:schema>
      </wsdl:types>
      <wsdl:message name="CalcPrecoPrazoSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazo" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazoData" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazoDataResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazoRestricao" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoPrazoRestricaoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPreco" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrecoData" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoDataResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrazo" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrazoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrazoData" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrazoDataResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrazoRestricao" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrazoRestricaoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACSoapIn">
        <wsdl:part name="parameters" element="tns:CalcPrecoFAC" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACSoapOut">
        <wsdl:part name="parameters" element="tns:CalcPrecoFACResponse" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaSoapIn">
        <wsdl:part name="parameters" element="tns:CalcDataMaxima" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaSoapOut">
        <wsdl:part name="parameters" element="tns:CalcDataMaximaResponse" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSoapIn">
        <wsdl:part name="parameters" element="tns:ListaServicos" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSoapOut">
        <wsdl:part name="parameters" element="tns:ListaServicosResponse" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSTARSoapIn">
        <wsdl:part name="parameters" element="tns:ListaServicosSTAR" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSTARSoapOut">
        <wsdl:part name="parameters" element="tns:ListaServicosSTARResponse" />
      </wsdl:message>
      <wsdl:message name="VerificaModalSoapIn">
        <wsdl:part name="parameters" element="tns:VerificaModal" />
      </wsdl:message>
      <wsdl:message name="VerificaModalSoapOut">
        <wsdl:part name="parameters" element="tns:VerificaModalResponse" />
      </wsdl:message>
      <wsdl:message name="getVersaoSoapIn">
        <wsdl:part name="parameters" element="tns:getVersao" />
      </wsdl:message>
      <wsdl:message name="getVersaoSoapOut">
        <wsdl:part name="parameters" element="tns:getVersaoResponse" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoSoapIn">
        <wsdl:part name="parameters" element="tns:calcPrazoNovo" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoSoapOut">
        <wsdl:part name="parameters" element="tns:calcPrazoNovoResponse" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoHttpGetIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataHttpGetIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoHttpGetIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoHttpGetIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataHttpGetIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="strDataCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaHttpGetIn">
        <wsdl:part name="codigoObjeto" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultadoObjeto" />
      </wsdl:message>
      <wsdl:message name="ListaServicosHttpGetIn" />
      <wsdl:message name="ListaServicosHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultadoServicos" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSTARHttpGetIn" />
      <wsdl:message name="ListaServicosSTARHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultadoServicos" />
      </wsdl:message>
      <wsdl:message name="VerificaModalHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
      </wsdl:message>
      <wsdl:message name="VerificaModalHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultadoModal" />
      </wsdl:message>
      <wsdl:message name="getVersaoHttpGetIn" />
      <wsdl:message name="getVersaoHttpGetOut">
        <wsdl:part name="Body" element="tns:versao" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoHttpGetIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
        <wsdl:part name="strVerificaRestricao" type="s:string" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoHttpGetOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoHttpPostIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataHttpPostIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoDataHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoHttpPostIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoPrazoRestricaoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoHttpPostIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataHttpPostIn">
        <wsdl:part name="nCdEmpresa" type="s:string" />
        <wsdl:part name="sDsSenha" type="s:string" />
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="nCdFormato" type="s:string" />
        <wsdl:part name="nVlComprimento" type="s:string" />
        <wsdl:part name="nVlAltura" type="s:string" />
        <wsdl:part name="nVlLargura" type="s:string" />
        <wsdl:part name="nVlDiametro" type="s:string" />
        <wsdl:part name="sCdMaoPropria" type="s:string" />
        <wsdl:part name="nVlValorDeclarado" type="s:string" />
        <wsdl:part name="sCdAvisoRecebimento" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoDataHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoDataHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrazoRestricaoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="nVlPeso" type="s:string" />
        <wsdl:part name="strDataCalculo" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcPrecoFACHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaHttpPostIn">
        <wsdl:part name="codigoObjeto" type="s:string" />
      </wsdl:message>
      <wsdl:message name="CalcDataMaximaHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultadoObjeto" />
      </wsdl:message>
      <wsdl:message name="ListaServicosHttpPostIn" />
      <wsdl:message name="ListaServicosHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultadoServicos" />
      </wsdl:message>
      <wsdl:message name="ListaServicosSTARHttpPostIn" />
      <wsdl:message name="ListaServicosSTARHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultadoServicos" />
      </wsdl:message>
      <wsdl:message name="VerificaModalHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
      </wsdl:message>
      <wsdl:message name="VerificaModalHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultadoModal" />
      </wsdl:message>
      <wsdl:message name="getVersaoHttpPostIn" />
      <wsdl:message name="getVersaoHttpPostOut">
        <wsdl:part name="Body" element="tns:versao" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoHttpPostIn">
        <wsdl:part name="nCdServico" type="s:string" />
        <wsdl:part name="sCepOrigem" type="s:string" />
        <wsdl:part name="sCepDestino" type="s:string" />
        <wsdl:part name="sDtCalculo" type="s:string" />
        <wsdl:part name="strVerificaRestricao" type="s:string" />
      </wsdl:message>
      <wsdl:message name="calcPrazoNovoHttpPostOut">
        <wsdl:part name="Body" element="tns:cResultado" />
      </wsdl:message>
      <wsdl:portType name="CalcPrecoPrazoWSSoap">
        <wsdl:operation name="CalcPrecoPrazo">
          <wsdl:documentation>Calcula o preço e o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoSoapIn" />
          <wsdl:output message="tns:CalcPrecoPrazoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <wsdl:documentation>Calcula o preço e o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoDataSoapIn" />
          <wsdl:output message="tns:CalcPrecoPrazoDataSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <wsdl:documentation>Calcula o preço e o prazo considerando as restrições de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoRestricaoSoapIn" />
          <wsdl:output message="tns:CalcPrecoPrazoRestricaoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <wsdl:documentation>Calcula somente o preço com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoSoapIn" />
          <wsdl:output message="tns:CalcPrecoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <wsdl:documentation>Calcula somente o preço com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoDataSoapIn" />
          <wsdl:output message="tns:CalcPrecoDataSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <wsdl:documentation>Calcula somente o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoSoapIn" />
          <wsdl:output message="tns:CalcPrazoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <wsdl:documentation>Calcula somente o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoDataSoapIn" />
          <wsdl:output message="tns:CalcPrazoDataSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <wsdl:documentation>Calcula o prazo considerando restrição de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoRestricaoSoapIn" />
          <wsdl:output message="tns:CalcPrazoRestricaoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <wsdl:documentation>Calcula os preços dos serviços FAC</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoFACSoapIn" />
          <wsdl:output message="tns:CalcPrecoFACSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <wsdl:documentation>Calcula a data máxima de entrega de determinado objeto</wsdl:documentation>
          <wsdl:input message="tns:CalcDataMaximaSoapIn" />
          <wsdl:output message="tns:CalcDataMaximaSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <wsdl:documentation>Lista os serviços que estão disponíveis para cálculo de preço e/ou prazo</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosSoapIn" />
          <wsdl:output message="tns:ListaServicosSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <wsdl:documentation>Lista os serviços que são calculados pelo STAR</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosSTARSoapIn" />
          <wsdl:output message="tns:ListaServicosSTARSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <wsdl:documentation>Método para mostrar se o trecho consultado utiliza modal aéreo ou terrestre</wsdl:documentation>
          <wsdl:input message="tns:VerificaModalSoapIn" />
          <wsdl:output message="tns:VerificaModalSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <wsdl:documentation>Retorna a versão atual do componente</wsdl:documentation>
          <wsdl:input message="tns:getVersaoSoapIn" />
          <wsdl:output message="tns:getVersaoSoapOut" />
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <wsdl:documentation>Calcula o prazo usando nova procedure</wsdl:documentation>
          <wsdl:input message="tns:calcPrazoNovoSoapIn" />
          <wsdl:output message="tns:calcPrazoNovoSoapOut" />
        </wsdl:operation>
      </wsdl:portType>
      <wsdl:portType name="CalcPrecoPrazoWSHttpGet">
        <wsdl:operation name="CalcPrecoPrazo">
          <wsdl:documentation>Calcula o preço e o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoPrazoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <wsdl:documentation>Calcula o preço e o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoDataHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoPrazoDataHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <wsdl:documentation>Calcula o preço e o prazo considerando as restrições de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoRestricaoHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoPrazoRestricaoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <wsdl:documentation>Calcula somente o preço com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <wsdl:documentation>Calcula somente o preço com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoDataHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoDataHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <wsdl:documentation>Calcula somente o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoHttpGetIn" />
          <wsdl:output message="tns:CalcPrazoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <wsdl:documentation>Calcula somente o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoDataHttpGetIn" />
          <wsdl:output message="tns:CalcPrazoDataHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <wsdl:documentation>Calcula o prazo considerando restrição de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoRestricaoHttpGetIn" />
          <wsdl:output message="tns:CalcPrazoRestricaoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <wsdl:documentation>Calcula os preços dos serviços FAC</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoFACHttpGetIn" />
          <wsdl:output message="tns:CalcPrecoFACHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <wsdl:documentation>Calcula a data máxima de entrega de determinado objeto</wsdl:documentation>
          <wsdl:input message="tns:CalcDataMaximaHttpGetIn" />
          <wsdl:output message="tns:CalcDataMaximaHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <wsdl:documentation>Lista os serviços que estão disponíveis para cálculo de preço e/ou prazo</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosHttpGetIn" />
          <wsdl:output message="tns:ListaServicosHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <wsdl:documentation>Lista os serviços que são calculados pelo STAR</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosSTARHttpGetIn" />
          <wsdl:output message="tns:ListaServicosSTARHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <wsdl:documentation>Método para mostrar se o trecho consultado utiliza modal aéreo ou terrestre</wsdl:documentation>
          <wsdl:input message="tns:VerificaModalHttpGetIn" />
          <wsdl:output message="tns:VerificaModalHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <wsdl:documentation>Retorna a versão atual do componente</wsdl:documentation>
          <wsdl:input message="tns:getVersaoHttpGetIn" />
          <wsdl:output message="tns:getVersaoHttpGetOut" />
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <wsdl:documentation>Calcula o prazo usando nova procedure</wsdl:documentation>
          <wsdl:input message="tns:calcPrazoNovoHttpGetIn" />
          <wsdl:output message="tns:calcPrazoNovoHttpGetOut" />
        </wsdl:operation>
      </wsdl:portType>
      <wsdl:portType name="CalcPrecoPrazoWSHttpPost">
        <wsdl:operation name="CalcPrecoPrazo">
          <wsdl:documentation>Calcula o preço e o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoPrazoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <wsdl:documentation>Calcula o preço e o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoDataHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoPrazoDataHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <wsdl:documentation>Calcula o preço e o prazo considerando as restrições de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoPrazoRestricaoHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoPrazoRestricaoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <wsdl:documentation>Calcula somente o preço com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <wsdl:documentation>Calcula somente o preço com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoDataHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoDataHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <wsdl:documentation>Calcula somente o prazo com a data atual</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoHttpPostIn" />
          <wsdl:output message="tns:CalcPrazoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <wsdl:documentation>Calcula somente o prazo com uma data especificada</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoDataHttpPostIn" />
          <wsdl:output message="tns:CalcPrazoDataHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <wsdl:documentation>Calcula o prazo considerando restrição de entrega</wsdl:documentation>
          <wsdl:input message="tns:CalcPrazoRestricaoHttpPostIn" />
          <wsdl:output message="tns:CalcPrazoRestricaoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <wsdl:documentation>Calcula os preços dos serviços FAC</wsdl:documentation>
          <wsdl:input message="tns:CalcPrecoFACHttpPostIn" />
          <wsdl:output message="tns:CalcPrecoFACHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <wsdl:documentation>Calcula a data máxima de entrega de determinado objeto</wsdl:documentation>
          <wsdl:input message="tns:CalcDataMaximaHttpPostIn" />
          <wsdl:output message="tns:CalcDataMaximaHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <wsdl:documentation>Lista os serviços que estão disponíveis para cálculo de preço e/ou prazo</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosHttpPostIn" />
          <wsdl:output message="tns:ListaServicosHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <wsdl:documentation>Lista os serviços que são calculados pelo STAR</wsdl:documentation>
          <wsdl:input message="tns:ListaServicosSTARHttpPostIn" />
          <wsdl:output message="tns:ListaServicosSTARHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <wsdl:documentation>Método para mostrar se o trecho consultado utiliza modal aéreo ou terrestre</wsdl:documentation>
          <wsdl:input message="tns:VerificaModalHttpPostIn" />
          <wsdl:output message="tns:VerificaModalHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <wsdl:documentation>Retorna a versão atual do componente</wsdl:documentation>
          <wsdl:input message="tns:getVersaoHttpPostIn" />
          <wsdl:output message="tns:getVersaoHttpPostOut" />
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <wsdl:documentation>Calcula o prazo usando nova procedure</wsdl:documentation>
          <wsdl:input message="tns:calcPrazoNovoHttpPostIn" />
          <wsdl:output message="tns:calcPrazoNovoHttpPostOut" />
        </wsdl:operation>
      </wsdl:portType>
      <wsdl:binding name="CalcPrecoPrazoWSSoap" type="tns:CalcPrecoPrazoWSSoap">
        <soap:binding transport="http://schemas.xmlsoap.org/soap/http" />
        <wsdl:operation name="CalcPrecoPrazo">
          <soap:operation soapAction="http://tempuri.org/CalcPrecoPrazo" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <soap:operation soapAction="http://tempuri.org/CalcPrecoPrazoData" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <soap:operation soapAction="http://tempuri.org/CalcPrecoPrazoRestricao" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <soap:operation soapAction="http://tempuri.org/CalcPreco" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <soap:operation soapAction="http://tempuri.org/CalcPrecoData" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <soap:operation soapAction="http://tempuri.org/CalcPrazo" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <soap:operation soapAction="http://tempuri.org/CalcPrazoData" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <soap:operation soapAction="http://tempuri.org/CalcPrazoRestricao" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <soap:operation soapAction="http://tempuri.org/CalcPrecoFAC" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <soap:operation soapAction="http://tempuri.org/CalcDataMaxima" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <soap:operation soapAction="http://tempuri.org/ListaServicos" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <soap:operation soapAction="http://tempuri.org/ListaServicosSTAR" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <soap:operation soapAction="http://tempuri.org/VerificaModal" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <soap:operation soapAction="http://tempuri.org/getVersao" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <soap:operation soapAction="http://tempuri.org/calcPrazoNovo" style="document" />
          <wsdl:input>
            <soap:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
      </wsdl:binding>
      <wsdl:binding name="CalcPrecoPrazoWSSoap12" type="tns:CalcPrecoPrazoWSSoap">
        <soap12:binding transport="http://schemas.xmlsoap.org/soap/http" />
        <wsdl:operation name="CalcPrecoPrazo">
          <soap12:operation soapAction="http://tempuri.org/CalcPrecoPrazo" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <soap12:operation soapAction="http://tempuri.org/CalcPrecoPrazoData" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <soap12:operation soapAction="http://tempuri.org/CalcPrecoPrazoRestricao" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <soap12:operation soapAction="http://tempuri.org/CalcPreco" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <soap12:operation soapAction="http://tempuri.org/CalcPrecoData" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <soap12:operation soapAction="http://tempuri.org/CalcPrazo" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <soap12:operation soapAction="http://tempuri.org/CalcPrazoData" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <soap12:operation soapAction="http://tempuri.org/CalcPrazoRestricao" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <soap12:operation soapAction="http://tempuri.org/CalcPrecoFAC" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <soap12:operation soapAction="http://tempuri.org/CalcDataMaxima" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <soap12:operation soapAction="http://tempuri.org/ListaServicos" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <soap12:operation soapAction="http://tempuri.org/ListaServicosSTAR" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <soap12:operation soapAction="http://tempuri.org/VerificaModal" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <soap12:operation soapAction="http://tempuri.org/getVersao" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <soap12:operation soapAction="http://tempuri.org/calcPrazoNovo" style="document" />
          <wsdl:input>
            <soap12:body use="literal" />
          </wsdl:input>
          <wsdl:output>
            <soap12:body use="literal" />
          </wsdl:output>
        </wsdl:operation>
      </wsdl:binding>
      <wsdl:binding name="CalcPrecoPrazoWSHttpGet" type="tns:CalcPrecoPrazoWSHttpGet">
        <http:binding verb="GET" />
        <wsdl:operation name="CalcPrecoPrazo">
          <http:operation location="/CalcPrecoPrazo" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <http:operation location="/CalcPrecoPrazoData" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <http:operation location="/CalcPrecoPrazoRestricao" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <http:operation location="/CalcPreco" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <http:operation location="/CalcPrecoData" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <http:operation location="/CalcPrazo" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <http:operation location="/CalcPrazoData" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <http:operation location="/CalcPrazoRestricao" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <http:operation location="/CalcPrecoFAC" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <http:operation location="/CalcDataMaxima" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <http:operation location="/ListaServicos" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <http:operation location="/ListaServicosSTAR" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <http:operation location="/VerificaModal" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <http:operation location="/getVersao" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <http:operation location="/calcPrazoNovo" />
          <wsdl:input>
            <http:urlEncoded />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
      </wsdl:binding>
      <wsdl:binding name="CalcPrecoPrazoWSHttpPost" type="tns:CalcPrecoPrazoWSHttpPost">
        <http:binding verb="POST" />
        <wsdl:operation name="CalcPrecoPrazo">
          <http:operation location="/CalcPrecoPrazo" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoData">
          <http:operation location="/CalcPrecoPrazoData" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoPrazoRestricao">
          <http:operation location="/CalcPrecoPrazoRestricao" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPreco">
          <http:operation location="/CalcPreco" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoData">
          <http:operation location="/CalcPrecoData" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazo">
          <http:operation location="/CalcPrazo" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoData">
          <http:operation location="/CalcPrazoData" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrazoRestricao">
          <http:operation location="/CalcPrazoRestricao" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcPrecoFAC">
          <http:operation location="/CalcPrecoFAC" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="CalcDataMaxima">
          <http:operation location="/CalcDataMaxima" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicos">
          <http:operation location="/ListaServicos" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="ListaServicosSTAR">
          <http:operation location="/ListaServicosSTAR" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="VerificaModal">
          <http:operation location="/VerificaModal" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="getVersao">
          <http:operation location="/getVersao" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
        <wsdl:operation name="calcPrazoNovo">
          <http:operation location="/calcPrazoNovo" />
          <wsdl:input>
            <mime:content type="application/x-www-form-urlencoded" />
          </wsdl:input>
          <wsdl:output>
            <mime:mimeXml part="Body" />
          </wsdl:output>
        </wsdl:operation>
      </wsdl:binding>
      <wsdl:service name="CalcPrecoPrazoWS">
        <wsdl:port name="CalcPrecoPrazoWSSoap" binding="tns:CalcPrecoPrazoWSSoap">
          <soap:address location="http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx" />
        </wsdl:port>
        <wsdl:port name="CalcPrecoPrazoWSSoap12" binding="tns:CalcPrecoPrazoWSSoap12">
          <soap12:address location="http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx" />
        </wsdl:port>
        <wsdl:port name="CalcPrecoPrazoWSHttpGet" binding="tns:CalcPrecoPrazoWSHttpGet">
          <http:address location="http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx" />
        </wsdl:port>
        <wsdl:port name="CalcPrecoPrazoWSHttpPost" binding="tns:CalcPrecoPrazoWSHttpPost">
          <http:address location="http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx" />
        </wsdl:port>
      </wsdl:service>
    </wsdl:definitions>
    `,
    json: [{"codigo":"02259","descricao":"MD COM GEOMARKETING POR REGIAO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"02267","descricao":"MD COM GEOMARKETING ENDERECADA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"02275","descricao":"MD COM GEOMARKETING ENDERECADA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04014","descricao":"SEDEX A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04022","descricao":"SEDEX ON LINE A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04030","descricao":"PAC ON LINE A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04065","descricao":"SEDEX A VISTA PGTO NA ENTREGA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04073","descricao":"SPP A VISTA E A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04081","descricao":"SPP A VISTA E A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04103","descricao":"COMBO SEDEX A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04138","descricao":"SEDEX CONTRATO GRAND FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04146","descricao":"SEDEX CONTR GRAND FORMATOS LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04154","descricao":"SEDEX CONTRATO AGENCIA LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04162","descricao":"SEDEX CONTRATO AGENCIA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04170","descricao":"SEDEX REVERSO ESPELHO 04162","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04189","descricao":"SEDEX CONTR AGENCIA PAGTO ENTR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04197","descricao":"COMBO SEDEX CONTRATO AGENCIA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04227","descricao":"CORREIOS MINI ENVIOS CTR AG","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04243","descricao":"SEDEX REVERSO 04170 LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04251","descricao":"SEDEX CONTR AG PAGTO ENTREG LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04278","descricao":"SEDEX CONTRATO UO LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04308","descricao":"PAC CONTR AG PAGTO ENTREGA LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04316","descricao":"SEDEX CONTRATO - UO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04332","descricao":"PAC CONTRATO UO LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04340","descricao":"COMBO SEDEX CONT AG AR ELET LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04359","descricao":"COMBO SEDEX CONTRATO AGENCI LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04367","descricao":"PAC CONTRATO AGENCIA LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04375","descricao":"PAC REVERSO 04677 LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04383","descricao":"PAC CONTR GRANDES FORMATOS LM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04405","descricao":"SEDEX 12 SCADA A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04413","descricao":"SEDEX 12 REVERSO SGPB A FATURA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04421","descricao":"SEDEX 10 SCADA A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04430","descricao":"SEDEX HOJE SCADA  A VISTA FATU","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04448","descricao":"SEDEX HOJE REVERSO SGPB FATURA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04456","descricao":"COMBO SEDEX 10 SCADA A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04464","descricao":"COMBO SEDEX HOJE SCADA VIST FA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04472","descricao":"COMBO SEDEX 12 SCADA A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04499","descricao":"COMBO SEDEX 12 AR ELETR SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04502","descricao":"COMBO SEDEX 10 AR ELETR SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04510","descricao":"PAC A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04529","descricao":"COMBO SEDEX HOJE AR ELET SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04537","descricao":"SEDEX CONTRATO GRANDES FORMATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04553","descricao":"SEDEX CONTRATO AGENCIA TA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04561","descricao":"SEDEX CONT AG PAG ENT TA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04588","descricao":"COMBO SEDEX CONT AG TA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04596","descricao":"PAC CONTRATO AGENCIA TA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04600","descricao":"PAC CONT AG PAG ENT TA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04618","descricao":"PAC CONTRATO GRANDES FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04669","descricao":"PAC CONTRATO AGENCIA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04677","descricao":"PAC REVERSO ESPELHO 04669","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04685","descricao":"PAC CONTRATO AGENCIA PAGTO ENT","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04693","descricao":"PAC CONTRATO GRANDES FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04707","descricao":"PAC A VISTA PAGTO NA ENTREGA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04715","descricao":"COMBO PAC A VISTA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04812","descricao":"PAC CONTRATO - UO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04839","descricao":"COMBO SEDEX A VISTA AR ELETRON","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04901","descricao":"COMBO SEDEX A VISTA EMBALAGEM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04910","descricao":"COMBO PAC A VISTA EMBALAGEM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04928","descricao":"SEDEX REVERSO TA ESPELHO 04553","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"04936","descricao":"PAC REVERSO TA ESPELHO 04596","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10014","descricao":"CARTA SIMPLES A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10022","descricao":"CARTA SOCIAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10030","descricao":"CARTA REGISTRADA VISTA SELO SE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10057","descricao":"CARTA FATURAR OP ACIMA 500 GR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10065","descricao":"CARTA A FATURAR CHANCELA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10073","descricao":"CARTA AGF OP","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10081","descricao":"CARTA REGISTRADA O3 ETIQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10090","descricao":"CARTA REGISTRADA PR1 SELO E SE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10120","descricao":"CARTA SIMPLES ADMINISTRATIVA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10138","descricao":"CARTA REG FAT ETIQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10146","descricao":"CARTA REG MOD FAT ETIQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10154","descricao":"CARTA REGISTRADA O1 ETIQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10162","descricao":"CARTA REGISTRADA O2 ETIQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10189","descricao":"E-CARTA A4 MON RG-FAIXA 1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10200","descricao":"CARTA REGISTRADA PL3","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10456","descricao":"E-CARTA A4 MON RG ARD-FAIXA 1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10499","descricao":"E-CARTA A4 MON RG ARD-FAIXA 5","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10502","descricao":"E-CARTA A4 MON RG ARD-FAIXA 6","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10510","descricao":"E-CARTA A4 MON RG ARD-FAIXA 7","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10570","descricao":"E-CARTA A4 MON RG ARD-FAIXA 13","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10600","descricao":"E-CARTA A4 MON RG ARD-FAIXA 15","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10669","descricao":"E-CARTA A4 MON RG ARD-FX 15","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10707","descricao":"CARTA COM REG CTR EP MÁQ FRAN","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10715","descricao":"CARTA COM SIMPLES CTO MÁQ FRAN","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10723","descricao":"CARTA COM REG MOD CTO EP MÁQ F","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"10987","descricao":"REGISTRADO ADMINISTRATIVO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11711","descricao":"CARTA REGISTRADA C AR B1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11720","descricao":"CARTA REGISTRADA C AR PR1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11835","descricao":"CARTA REGISTRADA O3","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11843","descricao":"CARTA REGISTRADA O4","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11851","descricao":"CARTA REGISTRADA PL1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11860","descricao":"E-CARTA TABELA BASE ECD","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11878","descricao":"E-CARTA TABELA BASE ECR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11886","descricao":"E-CARTA ECD 01","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11894","descricao":"E-CARTA ECD 02","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11908","descricao":"E-CARTA ECD 03","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11916","descricao":"E-CARTA ECD 04","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11924","descricao":"E-CARTA ECR 01","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11932","descricao":"E-CARTA ECR 02","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11940","descricao":"E-CARTA ECR 03","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11959","descricao":"E-CARTA ECR 04","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11967","descricao":"E-CARTA SIMPLES ECS 01","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11975","descricao":"E-CARTA SIMPLES ECS 02","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11983","descricao":"E-CARTA SIMPLES TB ECS","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"11991","descricao":"POSTAL RESPOSTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12165","descricao":"POSTAL RESPOSTA DPVAT","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12203","descricao":"COMBO MDB LOCAL CHANCELA E PP","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12211","descricao":"COMBO MDB ESTADUAL CHANC E PP","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12220","descricao":"COMBO MDB NACIONAL CHANC E PP","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12227","descricao":"COMBO MDE LOCAL +PP FX2","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12238","descricao":"COMBO MDE LOCAL +PP FX1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12254","descricao":"COMBO MDE ESTADUAL + PP FX1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12262","descricao":"COMBO MDE NACIONAL +PP FX1","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12289","descricao":"COMBO MDE ESTADUAL +PP FX2","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12297","descricao":"COMBO MDE NACIONAL +PP FX2","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12300","descricao":"COMBO MDE LOCAL +PP FX3","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12319","descricao":"COMBO MDE ESTADUAL +PP FX3","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12327","descricao":"COMBO MDE NACIONAL +PP FX3","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12335","descricao":"COMBO MDE LOCAL +PP FX4","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12351","descricao":"COMBO MDE ESTADUAL +PP FX4","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12360","descricao":"COMBO MDE NACIONAL +PP FX4","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12378","descricao":"COMBO MDE LOCAL +PP FX5","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12386","descricao":"COMBO MDE ESTADUAL +PP FX5","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12394","descricao":"COMBO MDE NACIONAL +PP FX5","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12416","descricao":"COMBO MDE LOCAL +PP FX6","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12424","descricao":"COMBO MDE ESTADUAL +PP FX6","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12432","descricao":"COMBO MDE NACIONAL +PP FX6","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12440","descricao":"COMBO MDE LOCAL +PP FX7","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12459","descricao":"COMBO MDE ESTADUAL +PP FX7","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12467","descricao":"COMBO MDE NACIONAL +PP FX7","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12483","descricao":"CARTA REGISTRADA A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12491","descricao":"CARTA REGISTRO MODICO A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12505","descricao":"CARTA NAO COML REGISTRADA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12513","descricao":"CARTA NAO COML REGISTRO MODICO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12556","descricao":"CARTA A FATURAR SELO E SE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12637","descricao":"CARTA NAO COMERCIAL A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"12645","descricao":"CARTA COMERCIAL A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14010","descricao":"MALA DIRETA POSTAL NORMAL LOCA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14028","descricao":"MALA DIRETA POSTAL URGENTE LOC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14036","descricao":"MALA DIRETA POSTAL DOMICILIARI","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14575","descricao":"MDP BASICA-NACIONAL- A FATURAR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14591","descricao":"MDP BASICA-NACIONAL- A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14745","descricao":"MDP BASICA- LOCAL 1- A FATURAR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14753","descricao":"MDP BASICA-ESTADUAL- A FATURAR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14761","descricao":"MDP BASICA-LOCAL 1- A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14770","descricao":"MDP BASICA-ESTADUAL- A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"14877","descricao":"MDPD NAO END (FATURAR)","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15270","descricao":"MDPE - URGENTE  - LOCAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15288","descricao":"MDPE - URGENTE - ESTADUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15296","descricao":"MDPE - URGENTE - NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15300","descricao":"MDPB ESTADUAL A FAT CHANCELA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15318","descricao":"MDPB LOCAL A FAT CHANCELA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15326","descricao":"MDPB NACIONAL A FAT CHANCELA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15350","descricao":"MDB A VISTA CHANCELA NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15547","descricao":"MDB LOCAL PROMO DIA CLIENTE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15555","descricao":"MDB EST PROMO DIA CLIENTE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15563","descricao":"MDB NAC PROMO DIA CLIENTE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15571","descricao":"MDB RCN ATE 20KG LOCAL CHANC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15580","descricao":"MDB RCN ATE 20KG ESTADO CHANC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15598","descricao":"MDB RCN ATE 20KG LOCAL FRANQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15610","descricao":"MDB RCN ATE 20KG NACIO FRANQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15628","descricao":"MDB RCN ATE 20KG NACIO CHANC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15636","descricao":"MDB RCN ATE 20KG ESTADO FRANQ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"15962","descricao":"COMBO MD DOMICILIARIA PP FAT","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"16012","descricao":"CARTÃO POSTAL NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20010","descricao":"IMPRESSO NACIONAL NORMAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20109","descricao":"IMPRESSO NAC URGENTE FAT CHANC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20125","descricao":"IMPRESSO NACI NORMAL FAT CHANC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20141","descricao":"IMPRESSO NAC URGENTE FAT MFD","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20150","descricao":"IMPRESSO NAC NORMAL FAT MFD","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20206","descricao":"IMPRESSO NORMAL _RCN_ATE 20KG","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20214","descricao":"IMPRESSO NACIONAL URGENTE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20354","descricao":"IMPRESSO RCN ATE 20KG CHANCELA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20362","descricao":"IMPRESSO REGISTRADO A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20370","descricao":"IMPRESSO URGENTE REG A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20397","descricao":"IMPRESSO URG REG MOD A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"20419","descricao":"IMPRESSO REG MODICO A VISTA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"22012","descricao":"CECOGRAMA NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31100","descricao":"SERVIÇOS BASICOS -OPERAÇÃO B -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31119","descricao":"SERVIÇOS BASICOS-OPERAÇÃO B -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31127","descricao":"SERVIÇOS BASICOS-OPER B -ANUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31135","descricao":"SERVIÇOS BASICOS-OP B -ANUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31283","descricao":"SERVIÇOS BASICOS -OPERAÇÃO B -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"31291","descricao":"SERVIÇOS BASICOS -OPERAÇÃO B -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35050","descricao":"DISTRIBUIÇÃO DE REAVISOS-","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35068","descricao":"DISTRIB DE DOCUMENTOS DIVERSOS","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35122","descricao":"DISTRIBUIÇÃO CONVENCIONAL DE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35130","descricao":"DISTRIBUIÇÃO DE REAVISOS -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35149","descricao":"DISTRIBUIÇÃO DE DOCUMENTOS","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35173","descricao":"DISTRIB DE CONTAS COM ENTREGA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35190","descricao":"DISTRIB DE CONTAS COM ENTREGA","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35220","descricao":"DISTRIBUIÇÃO CONTAS ÁGUA/LUZ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35238","descricao":"DISTRIBUIÇÃO CONTAS ÁGUA/LUZ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35246","descricao":"DISTRIBUIÇÃO CONTAS ÁGUA/LUZ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"35254","descricao":"DISTRIBUIÇÃO CONTAS ÁGUA/LUZ","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36080","descricao":"REM ECON ORG TRANSITO EST S/AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36099","descricao":"REM ECON ORG TRANSITO EST C/AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36102","descricao":"REM ECON ORG TRANSITO NAC C/AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36110","descricao":"REMES ECON TALÃO CARTÃO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36129","descricao":"REMES ECON TALÃO CARTÃO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36137","descricao":"REMES ECON TALÃO CARTÃO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36145","descricao":"REMES ECON TALÃO CARTÃO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36200","descricao":"REMESSA ECON.TALAO/CARTAO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"36250","descricao":"REMESSA EXPRESSA BANRISUL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"39012","descricao":"SEDEX CORREIOS LOG","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"39217","descricao":"PAC CORREIOS LOG","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40010","descricao":"SEDEX A VISTA SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40045","descricao":"SEDEX A COBRAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40096","descricao":"SEDEX (CONTRATO)","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40126","descricao":"SEDEX A COBRAR-ENCOMENDA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40150","descricao":"SERVICO DE PROTOCOLO POSTAL -","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40169","descricao":"SEDEX 12 A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40177","descricao":"SEDEX ADMINISTRATIVO CSHOPPING","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40215","descricao":"SEDEX 10 A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40223","descricao":"SEDEX 10-ENCOMENDA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40290","descricao":"SEDEX HOJE A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40355","descricao":"REM EXP CRVL/CRV/CNH E NOTIFIC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40380","descricao":"SEDEX REVERSO 40096","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40398","descricao":"SEDEX REVERSO 40436","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40436","descricao":"SEDEX - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40444","descricao":"SEDEX - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40517","descricao":"SEDEX REVERSO 40444","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40525","descricao":"REMES EXP ÓRGÃOS DE TRÂNSITO -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40533","descricao":"REMES EXP ÓRGÃOS DE TRÂNSITO-","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40541","descricao":"REMES EXP ÓRGÃOS DE TRÂNSITO-","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40550","descricao":"SEDEX ADMINISTRATIVO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40568","descricao":"SEDEX - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40576","descricao":"SEDEX REVERSO - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40584","descricao":"SEDEX 10 REVERSO A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40606","descricao":"SEDEX - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40614","descricao":"SEDEX REVERSO - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40622","descricao":"REMESSA EXP TALAO DE CHEQUES-","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40630","descricao":"SEDEX PAGAMENTO NA ENTREGA -","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40665","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40673","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40681","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40690","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40703","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40711","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40720","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40738","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40746","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40754","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40762","descricao":"REMESSA EXP TALAO DE CHEQUES/","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40789","descricao":"SEDEX 10","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40797","descricao":"SEDEX 10 REVERSO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40819","descricao":"SEDEX PAGAMENTO NA ENTREGA -","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40878","descricao":"SEDEX HOJE - ROLO E PACOTE","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40886","descricao":"SEDEX 10 - PACOTE E ROLO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40894","descricao":"SEDEX 12- PACOTE E  ROLO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40940","descricao":"COMBO SEDEX 10 A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40959","descricao":"COMBO SEDEX A VISTA SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"40991","descricao":"COMBO SEDEX HOJE A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41068","descricao":"PAC","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41076","descricao":"PAC REVERSO 4106-8","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41106","descricao":"PAC À VISTA SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41203","descricao":"PAC ADMINISTRATIVO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41211","descricao":"PAC - CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41220","descricao":"PAC - REVERSO DO 4121-1","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41238","descricao":"PAC - PAGAMENTO NA ENTREGA -","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41254","descricao":"PAC ADMINISTRATIVO CSHOPPING","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41262","descricao":"PAC PAGAMENTO NA ENTREGA -","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41270","descricao":"SEDEX - GRANDES FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41300","descricao":"PAC GRANDES FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41378","descricao":"SEDEX GRANDES FORMATOS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41408","descricao":"SEDEX REPOSTAGEM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41432","descricao":"SEDEX PAGAMENTO NA ENTREGA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41440","descricao":"SEDEX PAGAMENTO NA ENTREGA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41459","descricao":"COMBO PAC A VISTA SCADA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41467","descricao":"COMBO SEDEX CONTRATO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41483","descricao":"COMBO SEDEX 12 A FATURAR","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41491","descricao":"PAC REPOSTAGEM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41530","descricao":"PAC INTERM E-COMMERCE TAB41068","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41548","descricao":"SEDEX INTERM E-COMMERCE 40096","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41556","descricao":"SEDEX PRE PAGO VIA INTERNET","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41564","descricao":"SEDEX 10 PRE PAGO VIA INTERNET","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41572","descricao":"SEDEX 12 PRE PAGO VIA INTERNET","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41599","descricao":"SEDEX HOJE PRE PAGO VIA INTERN","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41602","descricao":"PAC PRE PAGO VIA INTERNET","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41610","descricao":"REMESSA AGRUPADA PAC","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41629","descricao":"REMESSA AGRUPADA PAC N POLIT","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41637","descricao":"COMBO SEDEX ELEICOES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41645","descricao":"COMBO SEDEX HOJE ELEICOES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41653","descricao":"COMBO SEDEX 10 ELEICOES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41661","descricao":"COMBO PAC ELEICOES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41670","descricao":"COMBO SEDEX 12 ELEICOES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41700","descricao":"SEDEX REPOSTAGEM REVERSO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"41726","descricao":"PAC REPOSTAGEM REVERSO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"43010","descricao":"REEMB POSTAL NORMAL (C AVULSO)","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"44105","descricao":"MALOTE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"54658","descricao":"TAXA DE ARMAZENAGEM","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"68233","descricao":"CARTA VIA INTERNET","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"73881","descricao":"ENTREGA EXPRESSA","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"74950","descricao":"CARGA CONSOLIDADA EXPRESSA ES","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"75043","descricao":"REMESSA SIMPLES LOCAL -","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"75078","descricao":"DISTRIBUICAO DE CARNES","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"75159","descricao":"DISTRIBUICAO DE CONTAS DE TELE","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"75329","descricao":"DISTRIBUICAO DE NOTIFICACOES","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"75701","descricao":"IMPRESSAO E DISTRIBUICAO DE EX","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81019","descricao":"E-SEDEX STANDARD","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81027","descricao":"E-SEDEX PRIORITARIO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81035","descricao":"E-SEDEX EXPRESS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81043","descricao":"E-SEDEX  REVERSO","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81108","descricao":"E-SEDEX ADMINISTRATIVO CSHOP","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81124","descricao":"E-SEDEX INTERM E-COMMERCE","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81833","descricao":"E-SEDEX GRUPO II","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81841","descricao":"E-SEDEX  REVERSO GRUPO II","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81850","descricao":"E-SEDEX TOCANTINS","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81868","descricao":"E-SEDEX GRUPO I","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"81876","descricao":"E-SEDEX  REVERSO GRUPO I","calcula_preco":"S","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82015","descricao":"FAC SIMPLES LOCAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82023","descricao":"FAC SIMPLES ESTADUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82031","descricao":"FAC SIMPLES NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82040","descricao":"FAC SIMPLES LOC SEM DESC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82066","descricao":"FAC SIMPLES ESTAD SEM DESC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82074","descricao":"FAC SIMPLES SEM PRE REQUISITO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82082","descricao":"FAC REG SEM PRE REQUISITO","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82090","descricao":"FAC REG COM AR SEM PRE REQUISI","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82104","descricao":"FAC REGISTRADO LOCAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82112","descricao":"FAC REGISTRADO ESTADUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82120","descricao":"FAC REGISTRADO NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82139","descricao":"FAC REGISTRADO LOCAL COM AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82147","descricao":"FAC REGISTRADO ESTADUAL COM AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82155","descricao":"FAC REGISTRADO NACIONAL COM AR","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82309","descricao":"FAC SIMPLES LOCAL ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82317","descricao":"FAC SIMPLES ESTAD ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82325","descricao":"FAC SIMPLES NAC ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82333","descricao":"FAC REGIST LOCAL ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82341","descricao":"FAC REGISTRADO EST ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82350","descricao":"FAC REGISTRADO NAC ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82368","descricao":"FAC REG LOCAL C/ AR ACIMA 500G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82376","descricao":"FAC REG EST C/ AR ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82384","descricao":"FAC REG NAC C/ AR ACIMA 500 G","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82392","descricao":"FAC MONITORADO NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82406","descricao":"FAC MONITORADO ESTADUAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82414","descricao":"FAC MONITORADO LOCAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"82422","descricao":"FAC SIMPLES NACI SEM DESC","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""},{"codigo":"85480","descricao":"VENDA DE AEROGRAMA NACIONAL","calcula_preco":"N","calcula_prazo":"S","erro":"","msgErro":""}]
};