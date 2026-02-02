var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_infolot_brossardinfolot32_1 = new ol.format.GeoJSON();
var features_infolot_brossardinfolot32_1 = format_infolot_brossardinfolot32_1.readFeatures(json_infolot_brossardinfolot32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_infolot_brossardinfolot32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infolot_brossardinfolot32_1.addFeatures(features_infolot_brossardinfolot32_1);
var lyr_infolot_brossardinfolot32_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infolot_brossardinfolot32_1,
maxResolution:28004.466152261964,
 
                style: style_infolot_brossardinfolot32_1,
                popuplayertitle: 'infolot_brossard — infolot32',
                interactive: true,
                title: '<img src="styles/legend/infolot_brossardinfolot32_1.png" /> infolot_brossard — infolot32'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_infolot_brossardinfolot32_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_infolot_brossardinfolot32_1];
lyr_infolot_brossardinfolot32_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NO_LOT': 'Numéro de lot', });
lyr_infolot_brossardinfolot32_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'NO_LOT': 'TextEdit', });
lyr_infolot_brossardinfolot32_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NO_LOT': 'inline label - always visible', });
lyr_infolot_brossardinfolot32_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});