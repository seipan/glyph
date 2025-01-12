package handler

import (
	"net/http"

	"github.com/Doer-org/glyph/log"

	"github.com/gin-gonic/gin"
)

func HealthHandler(ctx *gin.Context) {
	logger := log.New()
	logger.Info("@glyph-dev	", "helth : good")
	ctx.JSON(
		http.StatusOK,
		gin.H{"health": "good!"},
	)
}
