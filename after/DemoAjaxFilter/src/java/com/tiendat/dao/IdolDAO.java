/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tiendat.dao;

import com.tiendat.dto.Idol;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author DatTTSE62330
 */
public class IdolDAO implements Serializable{
    List<Idol> idols = null; 
    public void createDummyIdol() {
        if (idols == null) {
            idols = new ArrayList<>();
        }    
        
        Idol idol1 = new Idol("Laura Takizawa","/img/takizawa.jpg" ,83, 58, 84);
        idols.add(idol1);
        Idol idol2 = new Idol("Tsubasa Anami","/img/anami.jpg", 90, 60, 89);
        idols.add(idol2);
        Idol idol3 = new Idol("Ria Sakurai","/img/sakurai.jpg", 80, 56, 82);
        idols.add(idol3);
        Idol idol4 = new Idol("Yuzuki Tina ","/img/tina.jpg", 84, 58, 83);
        idols.add(idol4);
        Idol idol5 = new Idol("Ameri Ichinose","/img/ichinose.jpg", 85, 51, 85);
        idols.add(idol5);
        Idol idol6 = new Idol("Ngọc Trinh","/img/ngoctrinh.jpg", 84, 58, 93);
        idols.add(idol6);
        Idol idol7 = new Idol("Diễm My 9X","/img/diemmy.jpg", 82, 64, 90);
        idols.add(idol7);
        Idol idol8 = new Idol("Tâm Tít","/img/tamtit.jpg", 84, 62, 89);
        idols.add(idol8);
        Idol idol9 = new Idol("Nhã Phương","/img/nhaphuong.jpg", 84, 65, 93);
        idols.add(idol9);
        Idol idol10 = new Idol("Angela Phương Trinh","/img/phuongtrinh.jpeg", 84, 57, 93);
        idols.add(idol10);        
    }

    public List<Idol> getIdols() {
        return idols;
    }
    
    
}
