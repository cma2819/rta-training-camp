FROM ghcr.io/nodecg/nodecg:latest

USER nodecg

RUN nodecg defaultconfig nodecg-speedcontrol
