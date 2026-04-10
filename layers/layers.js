var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimitedoEstadodeSoPaulo_3 = new ol.format.GeoJSON();
var features_LimitedoEstadodeSoPaulo_3 = format_LimitedoEstadodeSoPaulo_3.readFeatures(json_LimitedoEstadodeSoPaulo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedoEstadodeSoPaulo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedoEstadodeSoPaulo_3.addFeatures(features_LimitedoEstadodeSoPaulo_3);
var lyr_LimitedoEstadodeSoPaulo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedoEstadodeSoPaulo_3, 
                style: style_LimitedoEstadodeSoPaulo_3,
                popuplayertitle: 'Limite do Estado de São Paulo',
                interactive: false,
                title: '<img src="styles/legend/LimitedoEstadodeSoPaulo_3.png" /> Limite do Estado de São Paulo'
            });
var format_FaixadeDomnio_4 = new ol.format.GeoJSON();
var features_FaixadeDomnio_4 = format_FaixadeDomnio_4.readFeatures(json_FaixadeDomnio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaixadeDomnio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaixadeDomnio_4.addFeatures(features_FaixadeDomnio_4);
var lyr_FaixadeDomnio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaixadeDomnio_4, 
                style: style_FaixadeDomnio_4,
                popuplayertitle: 'Faixa de Domínio',
                interactive: true,
                title: '<img src="styles/legend/FaixadeDomnio_4.png" /> Faixa de Domínio'
            });
var format_reasDesapropriadas_5 = new ol.format.GeoJSON();
var features_reasDesapropriadas_5 = format_reasDesapropriadas_5.readFeatures(json_reasDesapropriadas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasDesapropriadas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasDesapropriadas_5.addFeatures(features_reasDesapropriadas_5);
var lyr_reasDesapropriadas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasDesapropriadas_5, 
                style: style_reasDesapropriadas_5,
                popuplayertitle: 'Áreas Desapropriadas',
                interactive: true,
    title: 'Áreas Desapropriadas<br />\
    <img src="styles/legend/reasDesapropriadas_5_0.png" /> Em Análise / Negociação<br />\
    <img src="styles/legend/reasDesapropriadas_5_1.png" /> Administrativo - Em Andamento<br />\
    <img src="styles/legend/reasDesapropriadas_5_2.png" /> Administrativo - Anuência / Posse<br />\
    <img src="styles/legend/reasDesapropriadas_5_3.png" /> Judicial - Em Andamento<br />\
    <img src="styles/legend/reasDesapropriadas_5_4.png" /> Judicial - Imissão Na Posse<br />\
    <img src="styles/legend/reasDesapropriadas_5_5.png" /> Área Pública<br />\
    <img src="styles/legend/reasDesapropriadas_5_6.png" /> Em Revisão - Documental / Técnica<br />' });
var format_RtulosdosCadastros_6 = new ol.format.GeoJSON();
var features_RtulosdosCadastros_6 = format_RtulosdosCadastros_6.readFeatures(json_RtulosdosCadastros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtulosdosCadastros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RtulosdosCadastros_6.addFeatures(features_RtulosdosCadastros_6);
cluster_RtulosdosCadastros_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RtulosdosCadastros_6
});
var lyr_RtulosdosCadastros_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RtulosdosCadastros_6, 
                style: style_RtulosdosCadastros_6,
                popuplayertitle: 'Rótulos dos Cadastros',
                interactive: false,
                title: 'Rótulos dos Cadastros'
            });
var format_Empreendimentos1Empreendimentos_7 = new ol.format.GeoJSON();
var features_Empreendimentos1Empreendimentos_7 = format_Empreendimentos1Empreendimentos_7.readFeatures(json_Empreendimentos1Empreendimentos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Empreendimentos1Empreendimentos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Empreendimentos1Empreendimentos_7.addFeatures(features_Empreendimentos1Empreendimentos_7);
var lyr_Empreendimentos1Empreendimentos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Empreendimentos1Empreendimentos_7, 
                style: style_Empreendimentos1Empreendimentos_7,
                popuplayertitle: 'Empreendimentos1 — Empreendimentos',
                interactive: false,
                title: 'Empreendimentos1 — Empreendimentos'
            });
var group_SCDES = new ol.layer.Group({
                                layers: [lyr_FaixadeDomnio_4,lyr_reasDesapropriadas_5,lyr_RtulosdosCadastros_6,lyr_Empreendimentos1Empreendimentos_7,],
                                fold: 'open',
                                title: 'SCDES'});
var group_OutrasCamadas = new ol.layer.Group({
                                layers: [lyr_LimitedoEstadodeSoPaulo_3,],
                                fold: 'open',
                                title: 'Outras Camadas'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,],
                                fold: 'open',
                                title: 'Mapas Base'});

lyr_GoogleRoad_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(false);lyr_LimitedoEstadodeSoPaulo_3.setVisible(true);lyr_FaixadeDomnio_4.setVisible(true);lyr_reasDesapropriadas_5.setVisible(true);lyr_RtulosdosCadastros_6.setVisible(true);lyr_Empreendimentos1Empreendimentos_7.setVisible(true);
var layersList = [group_MapasBase,group_OutrasCamadas,group_SCDES];
lyr_LimitedoEstadodeSoPaulo_3.set('fieldAliases', {'fid': 'fid', });
lyr_FaixadeDomnio_4.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Area': 'Area', });
lyr_reasDesapropriadas_5.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', 'layer': 'layer', 'path': 'path', });
lyr_RtulosdosCadastros_6.set('fieldAliases', {'fid': 'fid', 'Código do Documento': 'Código do Documento', 'Proprietário': 'Proprietário', 'Logradouro': 'Logradouro', 'Município': 'Município', 'Título da Propriedade Original': 'Título da Propriedade Original', 'Título da Propriedade DER': 'Título da Propriedade DER', 'Cartório': 'Cartório', 'Desapropriação': 'Desapropriação', 'Estaca da Propriedade Inicial': 'Estaca da Propriedade Inicial', 'Estaca da Propriedade Final': 'Estaca da Propriedade Final', 'KM Inicial': 'KM Inicial', 'KM Final': 'KM Final', 'Área da Propriedade (m²)': 'Área da Propriedade (m²)', 'Área a Desapropriar (m²)': 'Área a Desapropriar (m²)', 'Porcentagem da Área(%)': 'Porcentagem da Área(%)', 'Processo SEI': 'Processo SEI', 'Anuência': 'Anuência', 'Condução da  Desapropriação': 'Condução da  Desapropriação', 'Status da Desapropriação': 'Status da Desapropriação', 'Nº do Processo Judicial': 'Nº do Processo Judicial', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'Valor do Laudo do DER (Oferta Inicial) (R$)', 'Nº do Decreto': 'Nº do Decreto', 'Data do DUP': 'Data do DUP', 'Empreendimento': 'Empreendimento', 'Divisão Regional': 'Divisão Regional', 'Agente Financiador': 'Agente Financiador', 'Classe': 'Classe', 'layer': 'layer', 'path': 'path', });
lyr_Empreendimentos1Empreendimentos_7.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', });
lyr_LimitedoEstadodeSoPaulo_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_FaixadeDomnio_4.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasDesapropriadas_5.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RtulosdosCadastros_6.set('fieldImages', {'fid': 'TextEdit', 'Código do Documento': 'TextEdit', 'Proprietário': 'TextEdit', 'Logradouro': 'TextEdit', 'Município': 'TextEdit', 'Título da Propriedade Original': 'TextEdit', 'Título da Propriedade DER': 'TextEdit', 'Cartório': 'TextEdit', 'Desapropriação': 'TextEdit', 'Estaca da Propriedade Inicial': 'TextEdit', 'Estaca da Propriedade Final': 'TextEdit', 'KM Inicial': 'TextEdit', 'KM Final': 'TextEdit', 'Área da Propriedade (m²)': 'TextEdit', 'Área a Desapropriar (m²)': 'TextEdit', 'Porcentagem da Área(%)': 'TextEdit', 'Processo SEI': 'TextEdit', 'Anuência': 'TextEdit', 'Condução da  Desapropriação': 'TextEdit', 'Status da Desapropriação': 'TextEdit', 'Nº do Processo Judicial': 'TextEdit', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'TextEdit', 'Nº do Decreto': 'TextEdit', 'Data do DUP': 'TextEdit', 'Empreendimento': 'TextEdit', 'Divisão Regional': 'TextEdit', 'Agente Financiador': 'TextEdit', 'Classe': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Empreendimentos1Empreendimentos_7.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', });
lyr_LimitedoEstadodeSoPaulo_3.set('fieldLabels', {'fid': 'no label', });
lyr_FaixadeDomnio_4.set('fieldLabels', {'fid': 'hidden field', 'Nome': 'inline label - always visible', 'Area': 'hidden field', });
lyr_reasDesapropriadas_5.set('fieldLabels', {'fid': 'hidden field', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RtulosdosCadastros_6.set('fieldLabels', {'fid': 'inline label - always visible', 'Código do Documento': 'inline label - always visible', 'Proprietário': 'inline label - always visible', 'Logradouro': 'inline label - always visible', 'Município': 'inline label - always visible', 'Título da Propriedade Original': 'inline label - always visible', 'Título da Propriedade DER': 'inline label - always visible', 'Cartório': 'inline label - always visible', 'Desapropriação': 'inline label - always visible', 'Estaca da Propriedade Inicial': 'inline label - always visible', 'Estaca da Propriedade Final': 'inline label - always visible', 'KM Inicial': 'inline label - always visible', 'KM Final': 'inline label - always visible', 'Área da Propriedade (m²)': 'inline label - always visible', 'Área a Desapropriar (m²)': 'inline label - always visible', 'Porcentagem da Área(%)': 'inline label - always visible', 'Processo SEI': 'inline label - always visible', 'Anuência': 'inline label - always visible', 'Condução da  Desapropriação': 'inline label - always visible', 'Status da Desapropriação': 'inline label - always visible', 'Nº do Processo Judicial': 'inline label - always visible', 'Valor do Laudo do DER (Oferta Inicial) (R$)': 'inline label - always visible', 'Nº do Decreto': 'inline label - always visible', 'Data do DUP': 'inline label - always visible', 'Empreendimento': 'inline label - always visible', 'Divisão Regional': 'inline label - always visible', 'Agente Financiador': 'inline label - always visible', 'Classe': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_Empreendimentos1Empreendimentos_7.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', });
lyr_Empreendimentos1Empreendimentos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});