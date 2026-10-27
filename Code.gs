/**
 * LegalOps Real-Time Workload & Productivity Dashboard
 * Backend Controller & ETL Pipeline (Google Apps Script V8)
 */

// 1. Renders custom native menu inside Google Sheets on open
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('📊 Dashboard LegalOps')
    .addItem('Abrir Dashboard', 'abrirDashboardInterno')
    .addToUi();
}

// 2. Opens the React 18 Dashboard inside a high-resolution floating modal dialog
function abrirDashboardInterno() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
    .setWidth(1200)
    .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, 'Enterprise LegalOps Workspace 2026');
}

// 3. Serverless Web App GET endpoint for standalone browser/mobile access
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Enterprise LegalOps Workspace 2026')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// 4. Dynamically retrieves the deployed Web App URL
function obterUrlWebApp() {
  return ScriptApp.getService().getUrl();
}

// 5. ETL Pipeline: Reads, sanitizes, and serializes raw operational data (8-Column Schema)
function obterDadosDaPlanilha() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("Empilhado");

  if (!aba) return JSON.stringify([]);

  var dados = aba.getDataRange().getValues();
  var linhas = dados.slice(1); // Removes header row
  var dadosFormatados = [];

  linhas.forEach(function(linha) {
    var nome = linha[0];
    if (nome && String(nome).trim() !== "") {
      dadosFormatados.push({
        nome: String(nome).trim(),
        desc2: linha[1] || '-',       // Column B: Activity
        frequencia: linha[2] || '-',  // Column C: Frequency
        juridica: linha[3] || '-',    // Column D: Is Legal Task? (Sim/Não)
        horas_mes: parseFloat(String(linha[4]).replace(',', '.')) || 0,   // Column E: Monthly Hours
        tempo_gasto: parseFloat(String(linha[5]).replace(',', '.')) || 0, // Column F: Time per Task
        tipo: linha[6] || '-',        // Column G: Category
        descricao: linha[7] || '-',   // Column H: Notes / Details
        
        // Backward-compatibility fallbacks for global filtering
        desc21: '-',
        pais: '-',
        cliente_final: '-',
        site: 'Global'
      });
    }
  });

  return JSON.stringify(dadosFormatados);
}
