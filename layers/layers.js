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
var features_LimitedoEstadodeSoPaulo_3 = format_LimitedoEstadodeSoPaulo_3.readFeatures(json_LimitedoEstadodeSoPaulo_3, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedoEstadodeSoPaulo_3 = new ol.source.Vector({});
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
var features_FaixadeDomnio_4 = format_FaixadeDomnio_4.readFeatures(json_FaixadeDomnio_4, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaixadeDomnio_4 = new ol.source.Vector({});
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
var features_reasDesapropriadas_5 = format_reasDesapropriadas_5.readFeatures(json_reasDesapropriadas_5, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasDesapropriadas_5 = new ol.source.Vector({});
jsonSource_reasDesapropriadas_5.addFeatures(features_reasDesapropriadas_5);

var lyr_reasDesapropriadas_5 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_reasDesapropriadas_5,
    style: style_reasDesapropriadas_5,
    popuplayertitle: 'Áreas Desapropriadas',
    interactive: true,
    title: 'Áreas Desapropriadas'
});

var format_RtulosdosCadastros_6 = new ol.format.GeoJSON();
var features_RtulosdosCadastros_6 = format_RtulosdosCadastros_6.readFeatures(json_RtulosdosCadastros_6, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RtulosdosCadastros_6 = new ol.source.Vector({});
jsonSource_RtulosdosCadastros_6.addFeatures(features_RtulosdosCadastros_6);

var lyr_RtulosdosCadastros_6 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_RtulosdosCadastros_6,
    style: style_RtulosdosCadastros_6,
    popuplayertitle: 'Rótulos dos Cadastros',
    interactive: false,
    title: 'Rótulos dos Cadastros'
});

var format_Empreendimentos1Empreendimentos_7 = new ol.format.GeoJSON();
var features_Empreendimentos1Empreendimentos_7 = format_Empreendimentos1Empreendimentos_7.readFeatures(json_Empreendimentos1Empreendimentos_7, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Empreendimentos1Empreendimentos_7 = new ol.source.Vector({});
jsonSource_Empreendimentos1Empreendimentos_7.addFeatures(features_Empreendimentos1Empreendimentos_7);

var lyr_Empreendimentos1Empreendimentos_7 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_Empreendimentos1Empreendimentos_7,
    style: style_Empreendimentos1Empreendimentos_7,
    popuplayertitle: 'Empreendimentos',
    interactive: false,
    title: 'Empreendimentos'
});

var group_SCDES = new ol.layer.Group({
    layers: [lyr_FaixadeDomnio_4,lyr_reasDesapropriadas_5,lyr_RtulosdosCadastros_6,lyr_Empreendimentos1Empreendimentos_7],
    fold: 'open',
    title: 'SCDES'
});

var group_OutrasCamadas = new ol.layer.Group({
    layers: [lyr_LimitedoEstadodeSoPaulo_3],
    fold: 'open',
    title: 'Outras Camadas'
});

var group_MapasBase = new ol.layer.Group({
    layers: [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2],
    fold: 'open',
    title: 'Mapas Base'
});
